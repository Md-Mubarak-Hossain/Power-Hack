import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from '../layouts/Main';
import AddBill from '../pages/bill/AddBill';
import Bill from '../pages/bill/Bill';
import Update from '../pages/bill/Update';
import Home from '../pages/Home/Home';
import Login from '../pages/login/Login';
import Signup from '../pages/register/Signup';
import FourOfFour from './FourOfFour';

const Router = () => {
    const router = createBrowserRouter([
        {
            path: '/', element: <Main/>, children: [
                {
                    path: '/', element: <Home/>,
                    loader:()=>fetch('https://power-hacker-server.vercel.app/billing-list')
                },
                {
                    path: '/login', element: <Login/>
                },
                {
                    path: '/bill', element: <Bill/>,
                    loader:()=>fetch('https://power-hacker-server.vercel.app/billing-list')
                },
                {
                    path: '/update/:id', element: <Update/>,
                    loader:({params})=>fetch(`https://power-hacker-server.vercel.app/billing-list/${params.id}`)
                },
                {
                    path: '/addbill/:id', element: <AddBill/>,loader:({params})=>fetch(`https://power-hacker-server.vercel.app/login/${params.id}`)
                },
                {
                    path: '/signup', element: <Signup/>
                },
            ]
        },
        {
            path: '/*', element: <FourOfFour />
        }

    ])
    return (
        <RouterProvider router={router}>
        </RouterProvider>
    );
};

export default Router;