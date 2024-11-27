import React from "react";
import Image from "next/image";
import Link from "next/link";

type LearnMoreProps = {
    category_title: string;
    category_body: string;
    btn_title: string;
    link: string;
}

export const LearnMoreCard = ({ category_title, category_body, btn_title, link }: LearnMoreProps) => {

    return (
        <div className="text-left mix-blend-difference bg-[#040b1433] bg-gradient-to-b from-[#8e67ff99] to-[#0b080f] rounded-lg w-[320px] md:w-[360px] max-w-[360px] p-[1px]">
            <div className="bg-gradient-to-br from-black via-[#020508a6] to-[#040b14] rounded-md flex flex-col justify-between items-start h-full p-6 gap-5">
                <div className="flex flex-col">
                    <div className="text-purple-400 font-bold text-2xl">{category_title}</div>
                </div>
                <div className="text-[#6693a7] font-semibold">
                    {category_body}
                </div>
                <Link href={link} className="bg-[#fff3] rounded-[8px] px-4 py-2 text-5">
                    {btn_title}
                </Link>
            </div>
        </div>
    );
};
