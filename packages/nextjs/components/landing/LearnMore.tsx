import React from "react";
import Image from "next/image";
import { LearnMoreCard } from "./LearnMoreCard";

export const LearnMore = () => {
    const learnmore_data = [
        {
            category_title: 'Lightning fast speeds',
            category_body: 'Drift is built on Solana to leverage its 100 milliseconds finality for seamless trade and yield opportunities.',
            btn_title: 'Learn More',
            link: 'https://docs.drift.trade/about-v2/understanding-drift'
        },
        {
            category_title: 'Access to deep liquidity',
            category_body: 'JIT liquidity mechanism ensures orders of any size gets filled with near-zero slippage and at the lowest fees.',
            btn_title: 'Learn More',
            link: 'https://www.drift.trade/updates/jit-liquidity-mechanism'
        },
        {
            category_title: 'Cross-margin and yield-bearing system',
            category_body: 'Use any token as collateral for trading and earn yield just by depositing.',
            btn_title: 'Learn More',
            link: 'https://docs.drift.trade/#-trade'
        },
        {
            category_title: 'World class risk management',
            category_body: 'Drift protocol has been audited by industry-leading security firms.',
            btn_title: 'ToB Audit',
            link: 'https://www.drift.trade/updates/tob-security-audit'
        }
    ]
    return (
        <div className="z-5 relative w-full h-auto flex justify-center">
            <img src={'/wave.png'} alt="Background Image" className="-z-10 absolute w-full h-auto max-w-full inline-block align-middle" />
            <div className="container md:justify-between justify-center flex md:flex-row flex-col items-center md:px-20 px-5 py-10 z-10 gap-5 md:gap-0">
                <div className="max-w-[450px] font-bold flex flex-col md:items-start items-center gap-3">
                    <div className="md:text-[52px] leading-none text-[24px]">
                        The <span className="pink-blue-gradient">CEX-iest</span> <br /> DEX on Solana
                    </div>
                    <div className="text-md md:text-2xl font-medium px-5 text-center">Experience the best of centralized exchanges completely on-chain.</div>
                </div>
                <div className="grid md:grid-cols-2 md:grid-rows-2 grid-cols-1 gap-4">
                    {
                        learnmore_data.map((item, index) => (
                            <LearnMoreCard key={index} {...item} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};
