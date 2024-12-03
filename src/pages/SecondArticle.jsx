import React from "react";
import { ArticleTemplate } from "../components/ArticleTemplate";
import { HeroSection } from "../components/HeroSection";
import { ListArticle } from "../components/ListArticle";

const SecondArticle = () => {
    return (
        <div className="bg-primary min-h-screen overflow-auto">
            <ArticleTemplate withFooter={false} isOne={false} level={2}>
                    <HeroSection />
                    <ListArticle />
            </ArticleTemplate>
        </div>
    );
}

export { SecondArticle };