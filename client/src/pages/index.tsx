import React from "react";
import { SVGBackground } from "@/components/magic";
import {
  Hero,
  FeatureTrio,
  AppShowcase,
  SocialProof,
  FinalCTA,
} from "@/components/sections";
import { Footer } from "@/components/layout";

export const LandingPage = () => {
  return (
    <main className="relative w-full bg-slate-950 overflow-hidden">
      <SVGBackground />

      <div className="relative z-20">
        <AppShowcase />

        {/* <Hero /> */}
        <FeatureTrio />
        <SocialProof />
        <FinalCTA />
        <Footer />
      </div>
    </main>
  );
};
