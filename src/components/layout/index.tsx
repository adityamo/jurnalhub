"use client";

import React, { ReactNode, useEffect, useState } from "react";
import FooterLanding from "../footer";
import NavbarLanding2 from "../navbar2";

type Props = {
  children: ReactNode;
};

export default function PublicLayout({ children }: Props) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="flex-1 content" id="app-container">
      <NavbarLanding2 />
      {children}
      <FooterLanding />
    </main>
  );
}
