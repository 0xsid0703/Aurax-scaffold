import React from "react";
import Link from "next/link";
import { hardhat } from "viem/chains";
import { CurrencyDollarIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { HeartIcon } from "@heroicons/react/24/outline";
import { SwitchTheme } from "~~/components/SwitchTheme";
import { Faucet } from "~~/components/scaffold-eth";
import { useTargetNetwork } from "~~/hooks/scaffold-eth/useTargetNetwork";
import { useGlobalState } from "~~/services/store/store";
import { Copyright } from "lucide-react";

/**
 * Site footer
 */
export const Footer = () => {
  const nativeCurrencyPrice = useGlobalState(state => state.nativeCurrency.price);
  const { targetNetwork } = useTargetNetwork();
  const isLocalNetwork = targetNetwork.id === hardhat.id;

  const handleChange = (e: any) => {
    console.log(e.target.value)
  }
  return (
    <div className="min-h-0 lg:mb-0 bg-base-100 flex flex-col items-center z-20">
      <div className="container py-10 px-5 flex flex-col md:flex-row md:justify-between">
        <div className="flex flex-col gap-16 items-center md:items-start">
          <div className="flex flex-col gap-5">
            <div className="flex flex-row gap-3 items-center">
              <img src={'/logo.png'} className="w-10 h-10" />
              <span className="text-[28px] font-bold">AURAX</span>
            </div>
            <div className="flex flex-row gap-3">
              <Link className="text-[16px] text-gray-500 hover:text-white cursor-pointer font-semibold" href="/privacy-policy">Privacy Policy</Link>
              <Link className="text-[16px] text-gray-500 hover:text-white cursor-pointer font-semibold" href="/terms-of-use">Terms of Use</Link>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="text-[16px] font-semibold">Subscribe to Aurax's newsletter for exclusive updates.</div>
            <div className="flex flex-row">
              <input type="email" placeholder="Enter your email" onChange={handleChange} className="min-w-48 w-48 md:w-72 md:min-w-72 text-black text-[18px] rounded-tl-md rounded-bl-md px-3 py-1 bg-white"></input>
              <button className="rounded-tr-md rounded-br-md text-[24px] px-5 py-1 bg-primary">Subscribe</button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          <div className="flex flex-col gap-3">
            <div className="text-[24px] font-bold">Aurax</div>
            <Link className="text-[16px] text-gray-500 font-semibold hover:text-white" href="/careers">Careers</Link>
            <Link className="text-[16px] text-gray-500 font-semibold hover:text-white" href="/media-kit">Media Kit</Link>
          </div>
          <div className="flex flex-col gap-3">
            <div className="text-[24px] font-bold">Research</div>
            <Link className="text-[16px] text-gray-500 font-semibold hover:text-white" href="/v2-stats">v2 Stats</Link>
            <Link className="text-[16px] text-gray-500 font-semibold hover:text-white" href="/validator-security">Validator Security</Link>
            <Link className="text-[16px] text-gray-500 font-semibold hover:text-white" href="/documentation">Documentation</Link>
          </div>
          <div className="flex flex-col gap-3">
            <div className="text-[24px] font-bold">Developers</div>
            <Link className="text-[16px] text-gray-500 font-semibold hover:text-white" href="/protocol-code">Protocol Code</Link>
            <Link className="text-[16px] text-gray-500 font-semibold hover:text-white" href="/technical-docs">Technical Docs</Link>
            <Link className="text-[16px] text-gray-500 font-semibold hover:text-white" href="/python-sdk">Python SDK</Link>
            <Link className="text-[16px] text-gray-500 font-semibold hover:text-white" href="/typescript-sdk">Typescript SDK</Link>
            <Link className="text-[16px] text-gray-500 font-semibold hover:text-white" href="/trail-of-bits-audit">Trail of Bits Audit</Link>
            <Link className="text-[16px] text-gray-500 font-semibold hover:text-white" href="/neodyme-audit">Neodyme Audit</Link>
            <Link className="text-[16px] text-gray-500 font-semibold hover:text-white" href="/connect-by-aurax-audit">CONNECT by AURAX Audit</Link>
          </div>
          <div className="flex flex-col gap-3">
            <div className="text-[24px] font-bold">Social</div>
            <Link className="text-[16px] text-gray-500 font-semibold hover:text-white flex flex-row gap-2 items-center" href="/twitter">
              <img src={'/twitter.svg'} className="w-5 h-5" />
              Twitter
            </Link>
            <Link className="text-[16px] text-gray-500 font-semibold hover:text-white flex flex-row gap-2 items-center" href="/discord">
              <img src={'/discord.svg'} className="w-5 h-5" />
              Discord
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t-[1px] border-t-gray-500 w-full text-center text-[12px] text-gray-600 flex flex-row gap-2 justify-center py-5">
        <Copyright size={18} /> MINA protocol, {new Date().getFullYear()}. All rights reserved.
      </div>
    </div>
  );
};
