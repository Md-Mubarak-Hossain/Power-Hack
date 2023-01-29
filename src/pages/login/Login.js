import React from 'react';
import { Form } from 'react-bootstrap';

const Login = () => {
    return (
        <div className='container-fluid'>                     
           <Form className="my-5 shadow-lg p-5 mx-auto"
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
                        <input type="email" className="form-control" name='' placeholder='Enter your email' id="inputEmail" />
                    </div>
                </div>
        
                <div className="mb-3 row">
                    <div>
                        <input type="password" className="form-control" name='' placeholder='**********' id="inputPassword" />
                    </div>
                </div>                 
                    <button type="button" className="form-control btn btn-primary">Login</button>             
            </Form>        
        </div>
    );
};

export default Login;