import "../styles/globals.css";
import { HamburgerIcon, CloseIcon } from "../components/icons";
import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "../components/Link";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  function toggleMobileMenu(e) {
    e.preventDefault();
    setMobileMenuOpen(!mobileMenuOpen);
  }
  useEffect(() => {
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  }, [pathname]);

  if (Component.layout === "fullpage") {
    return (
      <div className="app">
        <main>
          <div className="content">
            <Component {...pageProps} />
          </div>
        </main>
      </div>
    );
  }
  return (
    <>
      <Head>
        {mobileMenuOpen && (
          <style>
            {`body {
            overflow: hidden;
          }`}
          </style>
        )}
      </Head>
      <div className="app withHeader">
        <button className="mobileMenuButton" onClick={toggleMobileMenu}>
          {mobileMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
        </button>
        <header className={`${mobileMenuOpen ? "mobileMenuOpen" : ""}`}>
          <div>
            <Link href="/">
              <a className="home-link">CZaas</a>
            </Link>
            <Link href="/test">
              <a>Quia, sed, exercitationem.</a>
            </Link>
            <Link href="/another">
              <a>Animi, iure, ab.</a>
            </Link>
            <Link href="/fired">
              <a>Debitis voluptatum, atque!</a>
            </Link>
            <Link href="/ipsum">
              <a>Itaque, repudiandae praesentium.</a>
            </Link>
          </div>
          <div>
            <Link href="">
              <a>Neque, nisi, aliquid.</a>
            </Link>
            <Link href="">
              <a>Dolor atque, totam.</a>
            </Link>
            <Link href="">
              <a>Illum quidem, distinctio!</a>
            </Link>
          </div>
        </header>
        <main>
          <div className="content">
            <Component {...pageProps} />
          </div>
        </main>
      </div>
    </>
  );
}

export default MyApp;
