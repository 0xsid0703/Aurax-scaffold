import React from "react";
import Image from "next/image";
import Link from "next/link";

type CategoryCardProps = {
    icon: string;
    category_title: string;
    category_body: string;
    btn_title: string;
    link: string;
}

export const CategoryCard = ({ icon, category_title, category_body, btn_title, link }: CategoryCardProps) => {

    return (
        <div className="text-left mix-blend-difference bg-[#040b1433] bg-gradient-to-br from-[#f84d8099] via-[#c36e9e00] to-[#3fe5ff99] rounded-lg w-[320px] md:w-[400px] max-w-[400px] p-[1px]">
            <div className="bg-gradient-to-br from-black via-[#020508a6] to-[#040b14] rounded-md flex flex-col justify-between items-start h-full p-6 gap-3">
                <div className="flex flex-col">
                    {icon && <Image src={icon} loading="lazy" alt={category_title} width={72} height={72} />}
                    <div className="text-purple-400 font-medium text-3xl">{category_title}</div>
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
