import React from "react";
import { articles } from "../storage/list_article";

const ListArticle = () => {
    return (
        <div className="w-full px-10 space-y-4">
            <h2 className="text-2xl font-semibold tracking-wider text-white font-poppins">Latest Article</h2>
            <List articles={articles} />
        </div>
    )
}


const List = ({ articles }) => {
    return (
        articles.map((article, index) => {
            return (
                <div className="flex items-center space-x-5 border-b border-gray-400 py-3" key={index}>
                    <img src={article.image} className="rounded-lg w-80 h-32 object-cover" />
                    <div className="space-y-2">
                        <p className="text-white font-poppins text-base">{article.description}</p>
                        <div className="flex items-center space-x-2">
                            <h2 className="text-white font-poppins text-sm font-thin">{article.name}</h2>
                            <p className="text-gray-400 font-poppins text-sm font-thin">1h</p>
                        </div>
                    </div>
                </div>
            )
        })
    )
}
export { ListArticle };