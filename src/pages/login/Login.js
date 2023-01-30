import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Bill from '../bill/Bill';



const Login = () => {

    const [user, setUser] = useState(false)
    const [loading, setLoading] = useState(true)
    const navigate=useNavigate()
    const location=useLocation()
    const from=location.from?.state?.pathname||'/'
    // useEffect(() => {
    //     fetch('https://power-hacker-server.vercel.app/login')
    //         .then(data => data.json())
    //         .then(result => {
    //             setUser(result)
    //             setLoading(false)
    //         })
    // }, [])
    const handleSub = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        fetch('https://power-hacker-server.vercel.app/login', {
            method: "GET",
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(data => data.json())
            .then(result => {
                const login = result.filter(r => r.email === email)
                login.length > 0 ? setUser(true) : setUser(false)
                setLoading(false)
                navigate(from,{replace:true})

            })

    }
    if(loading){
        return <p>loading...</p>
    }
    return (
        <div className='container-fluid'>
          
            <form className="my-5 shadow-lg p-5 mx-auto"
            onSubmit={handleSub}
                style={{
                    width: '500px'
                }}>
                <div className="mb-3 row">
                    <div className='text-center text-uppercase fs-4'>
                        <span>Login Form</span>
                    </div>
                </div>
                <div className="mb-3 row">
                    <div>
                        <input type="email" className="form-control" name='email' placeholder='Enter your email' id="inputEmail" />
                    </div>
                </div>

                <div className="mb-3 row">
                    <div>
                        <input type="password" className="form-control" name='password' placeholder='**********' id="inputPassword" />
                    </div>
                </div>
                <button type="button" className="form-control btn btn-primary">Login</button>
            </form>

        </div>
    );
};

export default Login;