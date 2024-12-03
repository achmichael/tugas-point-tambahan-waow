import React from "react";
import { ArticleTemplate } from '../components/ArticleTemplate'
import { FaXTwitter } from "react-icons/fa6";
import { GrFacebookOption } from "react-icons/gr";
import { RiLinkM } from "react-icons/ri";
import Anime from '../assets/anime_no_caption.png';

const ThirdArticle = () => {
    return (
        <div className="bg-primary min-h-screen">
            <ArticleTemplate level={3}>
                <Section />
            </ArticleTemplate>
        </div>
    )
}

const Section = () => {
    return (
        <div className="p-5">
           <h1 className="text-2xl font-semibold text-white tracking-wider">Cara Dapat Resonator Bintang 5 Xiangli Yao Secara Gratis di Wuthering Waves</h1>
           <div className="flex items-center space-x-4 px-4 mt-4">
                <p className="text-white text-base">Share Article</p>
                <div className="flex items-center space-x-2">
                    <FaXTwitter className="text-base text-white" />
                    <GrFacebookOption className="text-base text-white" />
                    <RiLinkM className="text-base text-white" />
                </div>
           </div>

           {/* Image */}
           <div className="px-4 mt-4">
                <img src={Anime} alt="Anime" className="w-full max-w-[920px] h-[418px] object-cover" />
           </div>
        </div>
    )
}
export { ThirdArticle };