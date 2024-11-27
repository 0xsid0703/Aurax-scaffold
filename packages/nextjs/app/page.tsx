"use client";

import Link from "next/link";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { BugAntIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Address } from "~~/components/scaffold-eth";
import { Card } from "~~/components/landing/Card"
import { Stats } from "~~/components/landing/Stats";
import { Category } from "~~/components/landing/Category";
import { LearnMore } from "~~/components/landing/LearnMore";
import { Article } from "~~/components/landing/Article";
import Community from "~~/components/landing/Community";

const CARDDATA = [
  {
    "question": "November 2024 Temperature Increase (°C)",
    "chance": 65,
    "volume": "$307k",
    "id": 8970,
    "image": '/avatar1.png',
    "reward": 10
  },
  {
    "question": "GPT-5 released in 2024?",
    "chance": 2,
    "volume": "$650k",
    "id": 7041,
    "image": '/avatar3.png',
    "reward": 6
  },
  {
    "question": "How many named storms during Atlantic Hurricane Season?",
    "chance": 34,
    "volume": "$5m",
    "id": 2887,
    "image": '/avatar2.png',
    "reward": 5
  },
  {
    "question": "Will the US confirm that aliens exist in 2024?",
    "chance": 3,
    "volume": "$2m",
    "id": 9898,
    "image": '/avatar3.png',
    "reward": 10
  },
  {
    "question": "Will 2024 be the hottest year on record?",
    "chance": 99,
    "volume": "$382k",
    "id": 8593,
    "image": '/avatar4.png',
    "reward": 6
  },
  {
    "question": "Bird flu pandemic before August 2025?",
    "chance": 14,
    "volume": "$8k",
    "id": 3311,
    "image": '/avatar5.png',
    "reward": 9
  },
  {
    "question": "How many SpaceX Starship launches reach space in 2024?",
    "chance": 42,
    "volume": "$577k",
    "id": 5111,
    "image": '/avatar2.png',
    "reward": 6
  },
  {
    "question": "Megaquake in November?",
    "chance": 1,
    "volume": "$53k",
    "id": 3855,
    "image": '/avatar1.png',
    "reward": 4
  },
]

const Home: NextPage = () => {
  const { address: connectedAddress } = useAccount();

  return (
    <>
      <div className="flex items-center flex-col flex-grow">
        <div className="bg-[url('/landing.webp')] bg-cover relative overflow-hidden w-full max-w-full min-h-[910px] bg-[50%_50%] bg-no-repeat flex justify-center py-16">
          <div className="absolute inset-0 bg-black mix-blend-multiply opacity-45"></div>
          <div className="container z-10">
            <div className="w-full flex flex-col gap-10 px-5 md:px-0">
              <p className="text-white text-5xl md:text-8xl text-center">Ape Into Your Favorite Memes with Leverage</p>
              <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4">
                {
                  CARDDATA.map((item, index) => (
                    <Card key={item.id} {...item} />
                  ))
                }
              </div>
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 w-full h-[250px] bg-gradient-to-b from-transparent to-[#02070c] z-[1]"></div>
        </div>
        <div className="w-full bg-main-bg bg-cover bg-no-repeat bg-center relative py-24">
          <div className="absolute z-0 inset-x-0 top-0 w-full h-[250px] bg-gradient-to-t from-transparent to-[#02070c]"></div>
          <div className="absolute inset-0 bg-black mix-blend-multiply opacity-25"></div>
          <div className="w-full flex flex-col items-center gap-28 relative z-10">
            <Stats />
            <Category />
            <LearnMore />
            <Article />
            <Community />
          </div>
          <img className="absolute bottom-0 inset-x-0 z-[2] w-1/2 h-auto translate-y-24 translate-x-1/2" src={'/earth.png'} />
          <img className="absolute bottom-0 inset-x-0 z-[1] w-full opacity-30" src={'/earth-effect.png'} />
        </div>

        {/* <div className="flex-grow bg-base-300 w-full mt-16 px-8 py-12">
          <div className="flex justify-center items-center gap-12 flex-col sm:flex-row">
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <BugAntIcon className="h-8 w-8 fill-secondary" />
              <p>
                Tinker with your smart contract using the{" "}
                <Link href="/debug" passHref className="link">
                  Debug Contracts
                </Link>{" "}
                tab.
              </p>
            </div>
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <MagnifyingGlassIcon className="h-8 w-8 fill-secondary" />
              <p>
                Explore your local transactions with the{" "}
                <Link href="/blockexplorer" passHref className="link">
                  Block Explorer
                </Link>{" "}
                tab.
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Home;
