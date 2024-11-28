import React from "react";
import Image from "next/image";
import { CategoryCard } from "./CategoryCard";

export const Category = () => {
  const category_data = [
    {
      icon: "/bet.svg",
      category_title: "Prediction Market",
      category_body:
        "Trade on real-world events on Solana’s premiere prediction market. Earn yield even while you’re predicting.",
      btn_title: "BET Now",
      link: "/bet",
    },
    {
      icon: "/trade.svg",
      category_title: "Higher Leverage",
      category_body:
        "Trade 40+ of the hottest markets with up to 20x leverage. Go up to 50x leverage when you trade SOL, BTC or ETH perps.",
      btn_title: "Trade Now",
      link: "/trade",
    },
    {
      icon: "/earn.svg",
      category_title: "Earn Yield",
      category_body:
        "Deposit 20+ assets as collateral and earn yield automatically from lending. Earn more yield from staking and Market Making Vaults.",
      btn_title: "Earn Now",
      link: "/earn",
    },
  ];
  return (
    <div className="flex flex-col items-center gap-10">
      <div className="text-[24px] font-bold md:text-[52px]">
        Your <span className="pink-blue-gradient">All-In-One</span> DEX
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {category_data.map((item, index) => (
          <CategoryCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};
