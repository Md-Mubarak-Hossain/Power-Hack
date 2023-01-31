import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/Context';
import useImg from '../hook/useImg';

const Navbar = () => {
    const{user}=useContext(AuthContext)
    let [bill, setBill] = useState([])
    let [sum,setSum] =useState(0);
    console.log(bill)
    useEffect(() => {
        fetch('https://power-hacker-server.vercel.app/billing-list')
            .then(data => data.json())
            .then(bill =>{setBill(bill)
            for (let i = 0; i <= bill.length; i++) {
                // sum = sum + parseInt(bill[i].amount)
                let result=(parseInt(bill[i]?.amount))
                isNaN(result)? sum=0:sum=sum+result;
                // sum = sum + (parseInt(bill[i]?.amount))
                // console.log(parseInt(bill[i]?.amount))
            }
            setSum(sum)})
    }, [])

   

    console.log(sum)
    return (
        <nav className="navbar bg-light text-uppercase px-2">
            <div className="container-fluid d-flex justify-content-between">
                <div>
                    <span>
                        {useImg()}
                    </span>
                    <span className="navbar-brand mb-0 h1 px-1">Power Hacker</span>
                </div>
                <div>
                    <Link to='/' className="navbar-brand mb-0 px-1">Home</Link>
                    {
                        user?
                            <>
                                <Link to='/login' className="navbar-brand mb-0 px-1">Login</Link>
                                <Link to='/signup' className="navbar-brand mb-0 px-1">Sign up</Link>
                            </>
                            : <Link to='/login' className="navbar-brand mb-0 px-1">Log out</Link>
                    }
                    <span className="navbar-brand mb-0 px-1">Total paid:{sum}</span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;