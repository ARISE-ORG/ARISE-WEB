import React from "react";
import { SVGBackground } from "@/components/magic/SVGBackground";

import { Hero } from "@/components/sections/Hero";
import { FeatureTrio } from "@/components/sections/FeatureTrio";
import { AppShowcase } from "@/components/sections/AppShowcase";
import { SocialProof } from "@/components/sections/SocialProof";
import { FinalCTA } from "@/components/sections/FinalCTA";
import CollaborationForm from "@/components/sections/CollaborationForm";

import { Footer } from "@/components/layout/Footer";

export const LandingPage = () => {
  return (
    <main className="relative w-full bg-slate-950 overflow-hidden">
      <SVGBackground />

      <div className="relative z-20">
        <AppShowcase />

        {/* <Hero /> */}
        <FeatureTrio />
        {/* <SocialProof /> */}
        <FinalCTA />
        <CollaborationForm />
        <Footer />
      </div>
    </main>
  );
};
