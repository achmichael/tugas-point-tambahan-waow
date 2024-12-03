import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
// import Profile from "../assets/profile.png";
import Anime from "../assets/anime.png";
import { IoIosArrowRoundForward } from "react-icons/io";

const Navbar = ({ level }) => {
    return (
        <nav className="p-0">
            <div className={`flex items-center justify-between px-10 py-5 ${level === 1 ? `bg-transparent z-30` : ''}`}>
            <Left level={level} />
            <Right />
        </div>
            {level === 1 && (
               <>
                <div className="relative w-full bg-black right-0">
                    <div
                        className="absolute h-[400px] bg-center bg-cover bg-opacity-20 -right-0 -top-20 w-[75%] z-10"
                        style={{ backgroundImage: `url(${Anime})` }}
                    ></div>
                    <div className="absolute h-[400px] bg-gradient-to-r from-primary to-transparent left-0 z-20 -top-20 w-full flex items-center">
                        <div className="space-y-5 p-10 mt-10">
                            <h1 className="text-white text-lg font-poppins max-w-48 z-20">
                                Mavuika, Pyro Archon yang Bersejarah Akhirnya Hadir di Genshin Impact Versi 5.3
                            </h1>
                            <div className="flex flex-wrap max-w-56 gap-2">
                                <Button label="RPG" className="bg-transparent border border-secondary text-white w-fit text-[10px] focus:outline-none h-8 font-thin py-0"/>
                                <Button label="Adventure" className="bg-transparent border border-secondary text-white w-fit text-[10px] focus:outline-none h-8 font-thin py-0"/>
                                <Button label="Co-Op" className="bg-transparent border border-secondary text-white w-fit text-[10px] focus:outline-none h-8 font-thin py-0"/>
                                <Button label="Open-World" className="bg-transparent border border-secondary text-white w-fit text-[10px] focus:outline-none h-8 font-thin py-0"/>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col absolute bottom-30 left-64 bg-gradient-to-l from-primary via-primary opacity-95 to-transparent w-52 h-[90%] z-30"></div>
                </div>
               </>
        )}
        </nav>
    )
}

const Button = ( {label, className }) => {
    return (
        <button className={className}>
                {label}
        </button>
    )
}
const Left = ({ level }) => {
    return (
        <div className="flex items-center space-x-8 z-40">
            <h2 className="font-bold text-white tracking-wider text-xl font-poppins">WAOW</h2>
            <div className="flex items-center space-x-4">
                <a href="" className={`text-sm no-underline text-gray-400 font-poppins ${level === 1 ? 'text-white' : ''}`}>Home</a>
                <a href="" className={`text-sm text-gray-400 font-poppins after:border-b-2 after:border-white ${level === 2 ? 'text-white' : ''}`}>Profile</a>
                <button className="flex items-center border-none bg-transparent p-0">
                    <p className={`text-sm text-gray-400 font-poppins ${level === 3 ? 'text-white' : ''}`}>Category</p>
                    <RiArrowDropDownLine className="text-gray-400" />
                </button>
            </div>
        </div>
    )
}

const Right = () => {
    return (
        <div className="flex items-center space-x-2 pr-5 z-30">
           <div className="flex bg-secondary rounded-full px-4 items-center">
                <input type="text" placeholder="Search" className="text-black focus:outline-none placeholder:text-sm placeholder:text-gray-800 font-poppins"/>
                <CiSearch className="text-gray-800" />
           </div>
           <div className="bg-bg-card rounded-full w-6 h-6 flex items-center justify-center">
                <IoIosArrowRoundForward className="text-white" />
           </div>
           {/* <img src={Profile} alt="" className="h-8 w-8 rounded-full" /> */}
        </div>
    )
}

export { Navbar };