import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type ArticleProps = {
    image: string,
    article_title: string,
    article_date: string,
    link: string
}

export const ArticleCard = ({ image, article_title, article_date, link }: ArticleProps) => {

    return (
        <div className="text-left mix-blend-difference bg-[#040b1433] bg-gradient-to-bl from-[#8e67ff99] to-[#0b080f] rounded-lg h-[360px] md:h-[410px] p-[1px] w-[320px] md:w-[400px] max-w-[400px]">
            <div className="bg-[#040b14] rounded-md flex flex-col justify-between items-start h-full">
                <img src={image} loading="lazy" className="rounded-tl-[8px] rounded-tr-[8px] z-10" />
                <div className="min-h-[150px] flex-start flex-col flex p-3 gap-5 justify-between">
                    <div className="text-2xl font-bold">
                        {article_title}
                    </div>
                    <div className="flex flex-col">
                        <div className="text-sm">{article_date}</div>
                        <Link href={link} className="flex flex-row text-md text-purple-300 items-center gap-1">
                            Read Now <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
};
