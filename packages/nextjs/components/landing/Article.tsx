import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArticleCard } from "./ArticleCard";

export const Article = () => {
  const article_date = [
    {
      image: "/finance.png",
      article_title: "What Is Decentralised Finance (DeFi)?",
      article_date: "August 11, 2024",
      link: "https://docs.drift.trade/about-v2/understanding-drift",
    },
    {
      image: "/ultimate.png",
      article_title: "Web2 vs. Web3: The Ultimate Guide",
      article_date: "August 11, 2024",
      link: "https://docs.drift.trade/about-v2/understanding-drift",
    },
    {
      image: "/futures.png",
      article_title: "Perpetual Futures vs. Options",
      article_date: "August 11, 2024",
      link: "https://docs.drift.trade/about-v2/understanding-drift",
    },
  ];
  return (
    <div className="container flex w-full flex-col items-center gap-10 px-5 md:px-20">
      <div className="text-[24px] font-bold md:text-[52px]">Level up your trading</div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {article_date.map((item, index) => (
          <ArticleCard key={index} {...item} />
        ))}
      </div>
      <Link href="/learn" className="w-[fit-content] rounded-md bg-[#fff3] px-4 py-2">
        Explore all articles
      </Link>
    </div>
  );
};
