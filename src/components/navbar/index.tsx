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
import { useScrollSpy } from "@/hooks/useColorSpy";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function NavbarLanding() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("ID");
  const tNav = useTranslations("Navigation");
  const tBtn = useTranslations();

  const activeId = useScrollSpy(
    siteConfig.navItems.map((i) => i.href.replace("#", "")),
    120
  );

  useEffect(() => {
    let last = false;

    const onScroll = () => {
      const next = window.scrollY > 10;
      if (next !== last) {
        last = next;
        setIsScrolled(next);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
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
      <Navbar isScrolled={isScrolled}>
        <NavBody isScrolled={isScrolled}>
          <NavbarLogo />
          <NavItems items={siteConfig.navItems} activeId={activeId} />
          <div className="hidden md:flex gap-4 items-center">
            <LanguageSwitcher
              selectedLang={selectedLang}
              setSelectedLang={setSelectedLang}
            />
            <NavbarButton>{tBtn("ButtonHeader")}</NavbarButton>
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
      <MobileNavMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)}>
        {siteConfig.navItems.map((item) => {
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-lg font-medium"
            >
              {tNav(`${item.label}`)}
            </Link>
          );
        })}

        <LanguageSwitcher
          isMobile
          selectedLang={selectedLang}
          setSelectedLang={setSelectedLang}
        />

        <NavbarButton className="w-48">{tBtn("ButtonHeader")}</NavbarButton>
      </MobileNavMenu>
    </>
  );
}
