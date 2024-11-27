import React from "react";
import Image from "next/image";
import { ArticleCard } from "./ArticleCard";
import Link from "next/link";

export const Article = () => {
    const article_date = [
        {
            image: '/finance.png',
            article_title: 'What Is Decentralised Finance (DeFi)?',
            article_date: 'August 11, 2024',
            link: 'https://docs.drift.trade/about-v2/understanding-drift'
        },
        {
            image: '/ultimate.png',
            article_title: 'Web2 vs. Web3: The Ultimate Guide',
            article_date: 'August 11, 2024',
            link: 'https://docs.drift.trade/about-v2/understanding-drift'
        },
        {
            image: '/futures.png',
            article_title: 'Perpetual Futures vs. Options',
            article_date: 'August 11, 2024',
            link: 'https://docs.drift.trade/about-v2/understanding-drift'
        },
    ]
    return (
        <div className="w-full container md:px-20 px-5 flex flex-col gap-10 items-center">
            <div className="text-[24px] md:text-[52px] font-bold">Level up your trading</div>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
                {
                    article_date.map((item, index) => (
                        <ArticleCard key={index} {...item} />
                    ))
                }
            </div>
            <Link href="/learn" className="bg-[#fff3] rounded-md px-4 py-2 w-[fit-content]">
                Explore all articles
            </Link>
        </div>
    );
};
