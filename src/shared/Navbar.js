import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useImg from '../hook/useImg';

const Navbar = () => {
    const user = 'Mubarak'
    let [bill, setBill] = useState([])
    console.log(bill)
    useEffect(() => {
        fetch('https://power-hacker-server.vercel.app/billing-list')
            .then(data => data.json())
            .then(bill => setBill(bill))
    }, [])

    let sum = 0
    for (let i = 0; i <= bill.length; i++) {
        // sum = sum + parseInt(bill[i].amount)
        sum = sum + (parseInt(bill[i]?.amount))
        console.log(parseInt(bill[i]?.amount))
    }

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
                    <Link to='/' className="navbar-brand mb-0">Home</Link>
                    {
                        user ?
                            <>
                                <Link to='/login' className="navbar-brand mb-0">Login</Link>
                                <Link to='/signup' className="navbar-brand mb-0">Sign up</Link>
                            </>
                            : <button className="navbar-brand mb-0 h1 btn">Log out</button>
                    }
                    <span className="navbar-brand mb-0">Total paid:{sum}</span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;