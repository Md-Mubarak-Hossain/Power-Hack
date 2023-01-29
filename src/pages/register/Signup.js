import React from 'react';
import { Form } from 'react-bootstrap';

const Signup = () => {
    return (
        <div className='container-fluid'>                     
           <Form className="my-5 shadow-lg p-5 mx-auto"
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
                        <input type="text" className="form-control" name='' placeholder='Enter your full name' id="fullName" />
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
                <div className="mb-3 row">
                    <div>
                        <input type="password" className="form-control" name='' placeholder='**********' id="inputConfirm" />
                    </div>
                </div>              
                    <button type="button" className="form-control btn btn-primary">Sign up</button>             
            </Form>        
        </div>
    );
};

export default Signup;