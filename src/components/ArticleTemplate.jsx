import React from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

const ArticleTemplate = ({ withFooter = false, children, level = false}) => {
    return (
        <div className="bg-primary h-screen">
            <Navbar level={level} />
            {children}
            {withFooter && <Footer/>}
        </div>
    )
}

export { ArticleTemplate }