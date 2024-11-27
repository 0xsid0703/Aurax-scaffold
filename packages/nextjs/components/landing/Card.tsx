import React from "react";
import Image from "next/image";
import { ChevronsDown, ChevronsUp, Gift, MessageCircle, Star } from "lucide-react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";

type CardProps = {
    id: number;
    image: string;
    question: string;
    chance: number;
    volume: string;
    reward: number;
};

export const Card = ({ id, image, question, chance, volume, reward }: CardProps) => {
    return (
        <div className="bg-[#030a13a4] min-w-20 h-auto justify-between flex-start rounded flex flex-col p-4 gap-5">
            <div className="flex flex-row gap-2 justify-between">
                <div className="flex flex-row gap-3 w-5/6">
                    <img src={image} alt={question} className="rounded-md w-12 h-12" />
                    <div className="text-md text-white text-wrap line-clamp-2 font-semibold ">{question}</div>
                </div>
                <div className="w-1/6 h-16 relative">
                    <CircularProgressbar
                        value={chance}
                        // text={`${chance}%`}
                        circleRatio={0.5} // Limit to half a circle
                        styles={buildStyles({
                            rotation: 0.75, // Start the progress bar at the bottom
                            strokeLinecap: "butt",
                            trailColor: "#e5e7eb", // Light gray for the background
                            pathColor: chance > 50 ? "#40d67c" : "#d65c40", // Change color dynamically
                            textColor: "#ffffff", // Text color
                        })}
                    />
                    <div className="absolute inset-0 bottom-0 flex items-center justify-center text-white text-sm font-semibold flex-col gap-0">
                        <span className="leading-none">{`${chance}%`}</span>
                        <span className="text-gray-300 text-xs">chance</span>
                    </div>
                </div>
            </div>
            <div className="flex flex-row gap-4 justify-center">
                <button className="hover:bg-buy-color w-1/2 rounded-lg hover:text-white text-buyColor bg-transparent py-2 text-md font-semibold  flex items-center justify-center gap-3">Yes <ChevronsUp size={18} /></button>
                <button className="hover:bg-sell-color w-1/2  rounded-lg hover:text-white text-sellColor bg-transparent py-2 text-md font-semibold  flex items-center justify-center gap-3">No <ChevronsDown size={18} /></button>
            </div>
            <div className="flex flex-row justify-between items-center text-gray-300 font-light text-sm">
                <span className="">{volume} Vol.</span>
                <div className="flex flex-row gap-2 items-center">
                    <button><Gift size={18} /></button>
                    <button><span className="flex items-center"><MessageCircle size={18} />{reward}</span></button>
                    <button><Star size={18} /></button>
                </div>
            </div>
        </div>
    );
};
