import React, { useEffect, useState } from 'react';

const AddBill = () => {
    const handleSub = e => {
        e.preventDefault()
        const form = e.target;
        const fullname = form.fullname.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const amount = form.amount.value;
        const billPost = {
            fullname, email, phone, amount
        }
        fetch('https://power-hacker-server.vercel.app/add-billing', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(billPost)
        })
            .then(data => data.json())
            .then(data => {
                console.log(data)
                if(data.acknowledged>0){
                    alert('Bill added')
                    form.reset()                   
                }
            })
    }

    return (
        <div onSubmit={handleSub} className="modal fade" id="addBill" tabindex="-1" aria-labelledby="addBillLabel" aria-hidden="true">
            <div className="modal-dialog">
                <form className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="addBillLabel">New Bill</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body px-5">
                        <div className="mb-3 row">
                         
                            <div>
                                <input type="text"  className="form-control" name='fullname' placeholder='Enter your full name' id="fullName"/>
                            </div>
                        </div>
                        <div className="mb-3 row">
                          
                            <div>
                                <input type="email" className="form-control" name='email' placeholder='Enter your email' id="inputEmail" />
                            </div>
                        </div>
                        <div className="mb-3 row">
                           
                            <div>
                                <input type="text" className="form-control" name='phone' placeholder='Enter your phone no' id="inputPhone" />
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <div>
                                <input type="text" className="form-control" name='amount' placeholder='Enter payable amount' id="inputAmount" />
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
                        <button  className="btn btn-primary">Add Bill</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddBill;