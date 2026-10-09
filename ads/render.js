// Render + screenshot di tutte le creatività nei 4 formati → ads/export/*.png
// Uso: node render.js   (richiede: npm i puppeteer-core, Edge installato)
const puppeteer = require('puppeteer-core');
const path = require('path');
const fs = require('fs');

const EDGE = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const HERE = __dirname;
const OUT = path.join(HERE, 'export');
fs.mkdirSync(OUT, { recursive: true });

const CSS = fs.readFileSync(path.join(HERE, 'export.html'), 'utf8').match(/<style>([\s\S]*?)<\/style>/)[1];
// config.js è JS valido (chiavi non quotate) → lo carica la pagina, poi lo leggo
const CONFIG_URL = 'file:///' + path.join(HERE, 'export.html').replace(/\\/g, '/');
let config; // assegnato dopo il caricamento pagina

const FORMATS = {
  'meta-square': { w: 1080, h: 1080, cls: '' },
  'meta-story':  { w: 1080, h: 1920, cls: 'story' },
  'google-large':{ w: 1200, h: 628,  cls: 'wide' },
  'google-sq':   { w: 1200, h: 1200, cls: 'wide-sq' },
};

const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;');
const mainLine = t => esc(t).split('**').map((p, i) => i % 2 ? `<span class="gold">${p}</span>` : p).join('');
const img = p => 'file:///' + path.join(HERE, p).replace(/\\/g, '/');

function creativeHTML(ad, cls) {
  return `<div class="creative ${cls}">
  <div class="photo" style="background-image:url('${img(ad.photo)}'); background-position:${ad.photoPos}"></div>
  <div class="veil"></div>
  <div class="badge">${esc(ad.badge)}</div>
  <div class="content">
    <div class="brandline">
      <img class="logo" src="${img(config.brand.logo)}" alt="">
    </div>
    <div style="flex:1"></div>
    <div class="kicker">${esc(ad.kicker)}</div>
    <div class="top-line">${esc(ad.lines.top)}</div>
    <div class="main-line">${mainLine(ad.lines.main)}</div>
    ${ad.lines.extra ? `<div class="extra-line">${esc(ad.lines.extra)}</div>` : ''}
    <div class="sub">${esc(ad.sub)}</div>
    <div class="bottombar">
      <span class="cta">${esc(config.brand.cta)} →</span>
      <span class="phone">${esc(config.brand.phone)}</span>
      ${ad.partnerLogo ? `<img class="partner" src="${img(ad.partnerLogo)}">` : ''}
    </div>
  </div>
</div>`;
}

(async () => {
  const browser = await puppeteer.launch({ executablePath: EDGE, headless: 'new', args: ['--no-sandbox', '--disable-dev-shm-usage', '--hide-scrollbars', '--force-color-profile=srgb'] });
  const page = await browser.newPage();
  // carica export.html (che include config.js) e leggi la config dal window
  await page.goto(CONFIG_URL, { waitUntil: 'load' });
  config = await page.evaluate(() => window.ADS_CONFIG);
  const total = Object.keys(FORMATS).length * config.ads.length;
  let n = 0;

  for (const ad of config.ads) {
    for (const [fmtKey, { w, h, cls }] of Object.entries(FORMATS)) {
      await page.setViewport({ width: w, height: h, deviceScaleFactor: 1 });
      await page.setContent(`<!DOCTYPE html><html><head><style>${CSS} body{margin:0}</style></head><body>${creativeHTML(ad, cls)}</body></html>`, { waitUntil: 'domcontentloaded' });
      await new Promise(r => setTimeout(r, 900));
      const el = await page.$('.creative');
      await el.screenshot({ path: path.join(OUT, `${ad.id}_${fmtKey}.png`) });
      n++;
      console.log(`[${n}/${total}] ${ad.id}_${fmtKey}.png`);
    }
  }
  await browser.close();
  console.log('EXPORT COMPLETATO →', OUT);
})();
