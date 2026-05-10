"use client";

export default function Showcase() {
  return (
    <div className="paragraph">
      <div className="paragraph-vert">
        <h1>TITOLO</h1>
        <p>si anche questa</p>
      </div>
      <div className="paragraph-vert">
        <img className="showcase-img" src="/images/carousel/progettazione-render-bluedesign01-1024x450.jpg" alt="Showcase" />
      </div>

      <style jsx>{`
        .paragraph {
          font-size: 20px;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 30px 100px;
          background: #353535;
          color: white;
        }
        .paragraph-vert {
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        h1 {
          text-align: center;
          margin-bottom: 0.5rem;
        }
        p {
          text-align: center;
          line-height: 1.6;
        }
        .showcase-img {
          width: 40vw;
          height: auto;
          display: block;
          margin: 0 auto;
        }
        @media (max-width: 768px) {
          .paragraph {
            flex-direction: column;
            padding: 20px;
          }
          .showcase-img { width: 80vw; }
        }
      `}</style>
    </div>
  );
}
