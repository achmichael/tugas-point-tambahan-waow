import React from "react";
import { ArticleTemplate } from "../components/ArticleTemplate";
import { icons } from "../storage/icons";
import infinity from '../assets/infinity.png';
import { FaPlay } from "react-icons/fa";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

const FirstArticle = () => {
    return (
        <div className="bg-primary min-h-screen overflow-auto w-full">
            <ArticleTemplate withFooter={true} level={1}>
                <div className="flex items-center justify-center h-full mt-28 w-full">
                    <Section />
                </div>
            </ArticleTemplate>
        </div>
    )
}

const Section = () => {
    return (
        <div className="container p-4 sm:p-6 lg:p-10 mx-auto relative w-full mt-40 z-40">
           <h2 className="text-xl sm:text-2xl text-white tracking-wider">Browse By Category</h2>
           <div className="">
            <div className="w-full px-4 sm:px-8 lg:px-14 py-5 flex justify-center relative">
                    <div className="flex items-center justify-between w-full absolute inset-0">
                        <div className="bg-transparent h-20 w-20 rounded-full shadow-lg flex items-center px- justify-center">
                            <RiArrowLeftSLine className="text-white text-5xl" />
                        </div>
                        <div className="bg-transparent h-20 w-20 rounded-full shadow-lg flex items-center justify-center">
                            <RiArrowRightSLine className="text-white text-5xl" />
                        </div>
                    </div>
                    <CardIcon icons={icons}/>
            </div>
            <div className="w-full flex items-center justify-center">
                    <VideoCard />
            </div>
           </div>
        </div>
    )
}

const CardIcon = ({ icons }) => {
    return (
        <div className="grid max-w-full gap-8 sm:gap-16 lg:gap-32 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 py-4 z-40">
            {icons?.map((icon, index) => {
                return (
                    <div key={index} className="h-32 w-32 sm:h-36 sm:w-36 lg:h-40 lg:w-40 rounded-lg border p-6 sm:p-8 lg:p-12 border-gray-200 flex flex-col space-y-4 items-center justify-center transition-transform hover:scale-105">
                        <img src={icon.icon} alt={icon.name} className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-white" />
                        <p className="text-black text-sm sm:text-base rounded-lg w-fit px-4 bg-white">{icon.name}</p>
                    </div>
                )
            })}
        </div>
    )
}

const VideoCard = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[...Array(3)].map((_, i) => (
                <div key={i} className="bg-gray-700 w-full sm:w-[45%] lg:w-96 h-fit py-2 px-3 rounded-lg shadow-sm">
                    <div className="relative w-full h-full">
                        <img src={infinity} alt="infinity" className="w-full h-[60%px] sm:h-[70%px] lg:h-[80%px] object-cover object-center rounded-sm" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <FaPlay className="text-white text-xl sm:text-2xl" />
                        </div>
                    </div>
                    <div className="p-4">
                        <p className="text-white text-sm sm:text-base line-clamp-3 max-w-[90%] mb-2">Infinity Nikki PC system requirements: Can your PC handle this whimsical adventure?</p>
                        <div className="flex items-center space-x-3">
                            <p className="text-white text-xs sm:text-sm font-thin">Infinity Nikky</p>
                            <p className="text-gray-600 text-xs sm:text-sm font-thin">1h Ago</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export { FirstArticle };