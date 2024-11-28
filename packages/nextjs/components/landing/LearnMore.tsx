import React from "react";
import Image from "next/image";
import { LearnMoreCard } from "./LearnMoreCard";

export const LearnMore = () => {
  const learnmore_data = [
    {
      category_title: "Lightning fast speeds",
      category_body:
        "Drift is built on Solana to leverage its 100 milliseconds finality for seamless trade and yield opportunities.",
      btn_title: "Learn More",
      link: "https://docs.drift.trade/about-v2/understanding-drift",
    },
    {
      category_title: "Access to deep liquidity",
      category_body:
        "JIT liquidity mechanism ensures orders of any size gets filled with near-zero slippage and at the lowest fees.",
      btn_title: "Learn More",
      link: "https://www.drift.trade/updates/jit-liquidity-mechanism",
    },
    {
      category_title: "Cross-margin and yield-bearing system",
      category_body: "Use any token as collateral for trading and earn yield just by depositing.",
      btn_title: "Learn More",
      link: "https://docs.drift.trade/#-trade",
    },
    {
      category_title: "World class risk management",
      category_body: "Drift protocol has been audited by industry-leading security firms.",
      btn_title: "ToB Audit",
      link: "https://www.drift.trade/updates/tob-security-audit",
    },
  ];
  return (
    <div className="z-5 relative flex h-auto w-full justify-center">
      <img
        src={"/wave.png"}
        alt="Background Image"
        className="absolute -z-10 inline-block h-auto w-full max-w-full align-middle"
      />
      <div className="container z-10 flex flex-col items-center justify-center gap-5 px-5 py-10 md:flex-row md:justify-between md:gap-0 md:px-20">
        <div className="flex max-w-[450px] flex-col items-center gap-3 font-bold md:items-start">
          <div className="text-[24px] leading-none md:text-[52px]">
            The <span className="pink-blue-gradient">CEX-iest</span> <br /> DEX on Solana
          </div>
          <div className="text-md px-5 text-center font-medium md:text-2xl">
            Experience the best of centralized exchanges completely on-chain.
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:grid-rows-2">
          {learnmore_data.map((item, index) => (
            <LearnMoreCard key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};
