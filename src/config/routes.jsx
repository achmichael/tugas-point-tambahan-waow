import App from "../App";
import { createBrowserRouter } from "react-router";
import { FirstArticle } from "../pages/FirstArticle";
import { SecondArticle } from "../pages/SecondArticle";
import { ThirdArticle } from '../pages/ThirdArticle';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "/article-1",
        element: <FirstArticle />
    },
    {
        path: "/article-2",
        element: <SecondArticle />
    },
    {
        path: "/article-3",
        element: <ThirdArticle />
    }
]);

export { router };