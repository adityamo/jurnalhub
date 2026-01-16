"use client";

import { useEffect, useState } from "react";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
} from "./navbar-components";
import { NavbarLogo, LanguageSwitcher, NavbarButton } from "./navbar-elements";
import { siteConfig } from "@/config/site";

export default function NavbarLanding() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("ID");

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* NAVBAR HEADER */}
      <Navbar>
        <NavBody isScrolled={isScrolled}>
          <NavbarLogo />
          <NavItems items={siteConfig.navItems} />
          <div className="hidden md:flex gap-4 items-center">
            <LanguageSwitcher
              selectedLang={selectedLang}
              setSelectedLang={setSelectedLang}
            />
            <NavbarButton>Konsultasi Sekarang</NavbarButton>
          </div>
        </NavBody>

        <MobileNav isScrolled={isScrolled}>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMenuOpen}
              onClick={() => setIsMenuOpen(true)}
            />
          </MobileNavHeader>
        </MobileNav>
      </Navbar>

      {/* MOBILE MENU (WAJIB DI LUAR NAVBAR) */}
      <MobileNavMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)}>
        {siteConfig.navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={() => setIsMenuOpen(false)}
            className="text-lg font-medium"
          >
            {item.label}
          </a>
        ))}

        <LanguageSwitcher
          isMobile
          selectedLang={selectedLang}
          setSelectedLang={setSelectedLang}
        />

        <NavbarButton className="w-48">Konsultasi Sekarang</NavbarButton>
      </MobileNavMenu>
    </>
  );
}
