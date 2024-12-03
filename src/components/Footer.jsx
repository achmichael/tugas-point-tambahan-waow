import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { TiSocialFacebook } from "react-icons/ti";
import pesawat from '../assets/pesawat.png';

const Footer = () => {
    return (
        <footer className="py-6 px-16 flex items-center justify-between bg-[#201F36]">
        {/* left side */}
            <div className="flex flex-col space-y-3">
                <h1 className="text-4xl font-bold font-poppins tracking-wider text-white">WAOW</h1>
                <div className="flex items-center space-x-2">
                    <div className="rounded-full h-8 w-8 bg-gray-500 flex items-center justify-center">
                        <FaXTwitter className="text-white text-base" />   
                    </div>
                    <div className="rounded-full h-8 w-8 bg-gray-500 flex items-center justify-center">
                        <FaInstagram className="text-white text-base" />   
                    </div>
                    <div className="rounded-full h-8 w-8 bg-gray-500 flex items-center justify-center">
                        <TiSocialFacebook className="text-white text-xl" />   
                    </div>
                </div>


                <div className="flex items-center space-x-4">
                  <a href="" className="text-white no-underline text-base font-poppins">
                    Home
                  </a>
                  <a href="" className="text-white no-underline text-base font-poppins">
                    Work 
                  </a>
                  <a href="" className="text-white no-underline text-base font-poppins">
                    Blog
                  </a>
                  <a href="" className="text-white no-underline text-base font-poppins">
                    About
                  </a>
                </div>
            </div>

            {/* right side */}
            <div className="flex items-center space-x-10">
               {/* first content */}
               <div className="space-y-2">
                  <h1 className="text-white font-poppins text-xl font-semibold tracking-wider">Subscribe to WAOW </h1>
                  <div className="flex items-center">
                      <input type="text" placeholder="Your E-Mail Here" className="bg-transparent border px-3 py-1 border-purple-800 placeholder:text-gray-400 text-white outline-none" /> 
                      <div className="border border-purple-800 bg-transparent px-3 py-1 text-white text-base">Submit</div>
                  </div>
               </div>

               {/* second content */}
               <div className="h-[60%] w-60">
                <img src={pesawat} alt="" className="h-full w-full" />
               </div>
            </div>
        </footer>
    )
}

export  { Footer };
