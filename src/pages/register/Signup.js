import React from 'react';
import { Navigate } from 'react-router-dom';


const Signup = () => {
    const handleSub = e => {
        e.preventDefault()
        const form = e.target;
        const fullname = form.fullName.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        const infoPost = {
            fullname, email, phone, password, confirm
        }
        fetch('https://power-hacker-server.vercel.app/registration', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(infoPost)

        })
            .then(data => data.json())
            .then(data => {
                console.log(data)
                if(data.acknowledged>0){
                    alert('Successfully sign up')
                    Navigate('/login')
                }
            })
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
                        <span>Sign up Form</span>
                    </div>
                </div>
                <div className="mb-3 row">
                    <div>
                        <input type="text" className="form-control" name='fullName' placeholder='Enter your full name' id="fullName" />
                    </div>
                </div>
                <div className="mb-3 row">
                    <div>
                        <input type="email" className="form-control" name='email' placeholder='Enter your email' id="inputEmail" />
                    </div>
                </div>
                <div className="mb-3 row">
                    <div>
                        <input type="text" className="form-control" name='phone' placeholder='Enter your mobile no' id="inputPhone" />
                    </div>
                </div>

                <div className="mb-3 row">
                    <div>
                        <input type="password" className="form-control" name='password' placeholder='**********' id="inputPassword" />
                    </div>
                </div>
                <div className="mb-3 row">
                    <div>
                        <input type="password" className="form-control" name='confirm' placeholder='**********' id="inputConfirm" />
                    </div>
                </div>
                <button  className="form-control btn btn-primary">Sign up</button>
            </form>
        </div>
    );
};

export default Signup;