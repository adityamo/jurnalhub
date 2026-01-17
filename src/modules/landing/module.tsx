"use client";
import React from "react";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ServicesSection from "./ServicesSection";
import ProductSection from "./ProductSection";
import ProPersonSection from "./ProPersonSection";
import FAQSection from "./FAQSection";
import CTASection from "./CTASection";
import TestimonialsSection from "./TestimonialsSection";

export default function LandingModule() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProductSection />
      <ProPersonSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
