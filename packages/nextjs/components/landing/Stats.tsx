import React from "react";
import Image from "next/image";

export const Stats = () => {
    const stats = [
        { value: "$700M", label: "TVL" },
        { value: "$50B+", label: "Cumulative Volume" },
        { value: "19,256,573", label: "Total Trades" },
    ];
    return (
        <div className="px-5 max-w-[1000px] container">
            <div className="bg-[#080F1810] rounded-lg py-3 shadow-md border border-gray-900">
                <div className="grid grid-cols-3 divide-x divide-gray-600">
                    {
                        stats.map((stat, index) => (
                            <div key={index} className="text-center px-3 flex flex-col gap-2">
                                <div className="text-md md:text-2xl font-semibold text-base-content">{stat.value}</div>
                                <div className="text-xs md:text-sm text-base-content">{stat.label}</div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};
