import React from "react";
import Rpg from "../assets/hugeicons_adventure.svg";
import articles from '../storage/article';
import { RiArrowLeftSLine } from "react-icons/ri";
import { RiArrowRightSLine } from "react-icons/ri";

const HeroSection = () => {
    return (
        <div className="">
            <Title title={"RPG Category "}/>
            <Cards title={"Hotest Article"} articles={articles} />
        </div>
    )
}

const Title = ({ title }) => {
    return (
        <div className="py-3 flex items-stretch justify-center space-x-5">
            <h1 className="text-3xl font-semibold text-white text-center">{title}</h1>
            <img src={Rpg} alt="" className="w-10 h-10" />
        </div>
    )
}

const Cards = ({ title, articles }) => {
    return (
      <div className="w-full px-3 relative">
      <div className="absolute inset-0 flex items-center justify-between px-6 z-10">
        <div className="bg-white h-10 w-10 rounded-full shadow-lg flex items-center justify-center">
            <RiArrowLeftSLine className="text-primary text-3xl" />
        </div>
        <div className="bg-white h-10 w-10 rounded-full shadow-lg flex items-center justify-center">
            <RiArrowRightSLine className="text-primary text-3xl" />
        </div>
      </div>
        <h2 className="px-4 text-2xl tracking-wider font-semibold text-white font-poppins">{title}</h2>
        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-48 px-20">
          {articles?.map((article, index) => {
            return (
              <div
                key={index}
                className={`bg-center bg-contain rounded-xl bg-no-repeat w-[500px] h-80 ${
                  index === 2 ? 'max-w-[380px]' : ''
                }`}
                style={{ backgroundImage: `url(${article.image})` }}
              >
                <div
                  className={
                    index === 2
                      ? 'h-full flex flex-col justify-end bg-gradient-to-l from-primary to-transparent p-4 relative'
                      : ''
                  }
                >
                  {index === 2 && (
                    <div className="absolute inset-0 bg-gradient-to-l from-primary to-transparent opacity-100"></div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };


export { HeroSection };