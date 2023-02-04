import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Cart from "../Pages/Cart";
import Home from "../Pages/Home";
import TopRated from "../Pages/TopRated";
import Wishlist from "../Pages/Wishlist";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/topRated',
                element: <TopRated></TopRated>
            },
            {
                path: '/cart',
                element: <Cart></Cart>
            },
            {
                path: '/wishlist',
                element: <Wishlist></Wishlist>
            }

        ]
    }
])