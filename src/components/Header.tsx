"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function Header() {
  const navRef = useRef<HTMLElement>(null);
  const [navWidth, setNavWidth] = useState<number | string>("auto");

  useEffect(() => {
    const updateWidth = () => {
      if (navRef.current) {
        setNavWidth(navRef.current.offsetWidth);
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Chi Siamo", href: "/chi-siamo" },
    { label: "Showroom", href: "/showroom" },
    { label: "Progettazione", href: "/progettazione" },
    { label: "Contatti", href: "/contatti" },
  ];

  return (
    <header className="header">
      <div className="header-inner">
        <Link href="/" className="logo-link" style={{ width: typeof navWidth === 'number' ? `${navWidth}px` : navWidth }}>
          <div className="logo-container">
            <Image
              src="/images/logo/BlueDesign-Logo.png"
              alt="Bluedesign Logo"
              fill
              className="logo-img"
              priority
            />
          </div>
        </Link>
        <div className="nav-container">
          <nav ref={navRef} className="desktop-nav">
            {navItems.map((item, index) => (
              <Link key={index} href={item.href} className="nav-button">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      <style jsx>{`
        .header {
          width: 100%;     
          background-color: #1b1b1b;
          text-align: center;
          padding-top: 15px; /* Smaller header */
          padding-bottom: 10px;
          box-shadow: #000000 0px 10px 50px;
          position: fixed;
          top: 0;
          z-index: 1000;
        }
        .header-inner {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .logo-link {
          display: block;
          position: relative;
          margin-bottom: 15px;
        }
        .logo-container {
          position: relative;
          width: 100%;
          aspect-ratio: 4.5 / 1; 
          transform: translateY(10%); /* Lowered logo by 10% */
        }
        .logo-img {
          /* filter: invert(1); */ /* Color inversion removed per request */
          object-fit: contain;
        }
        .desktop-nav {
          display: flex;
          justify-content: center;
          gap: 15px;
          white-space: nowrap;
        }
        .nav-button {
          display: inline-block;
          margin: 0 10px;
          color: #fff;
          text-decoration: none;
          font-size: 0.8rem; /* Smaller font for smaller header */
          font-weight: 500;
          transition: var(--transition);
        }
        .nav-button:hover {
          font-weight: bold;
          transform: translateY(-1px);
        }
        @media (max-width: 992px) {
          .desktop-nav {
            flex-wrap: wrap;
            gap: 10px;
          }
          .logo-link {
            width: 80% !important;
          }
        }
      `}</style>
    </header>
  );
}
