"use client";
import React from "react";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ServicesSection from "./ServicesSection";
import ProductSection from "./ProductSection";
// import ProPersonSection from "./ProPersonSection";
import FAQSection from "./FAQSection";
import CTASection from "./CTASection";
import TestimonialsSection from "./TestimonialsSection";
import BenefitSection from "./BenefitSection";
import ToolsSection from "./ToolsSection";

export default function LandingModule() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProductSection />
      {/* <ProPersonSection /> */}
      <BenefitSection />
      <ToolsSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
