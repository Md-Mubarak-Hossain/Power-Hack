import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Update = () => {
    const b = useLoaderData()
    console.log(b)
    const [bill, setBill] = useState(b)

    const handleUpdate =()=> {
       
        fetch(`https://power-hacker-server.vercel.app/update-billing/${bill._id}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bill)
        })
            .then(data => data.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    alert('Successfully update')

                }
            })
    }
    const onChangeHandle = (e) => {
        const form = e.target;
        const field = form.name;
        const value = form.value;
        const newData = { ...bill }
        newData[field] = value;
        setBill(newData)
        console.log(newData)
    }
    return (
        <div className='container shadow-lg my-5 py-5 rounded-3'
            style={
                { width: '600px' }
            }>
            <div className="modal-dialog">
                <div className="modal-content">
                    <h1 className="modal-title fs-4 text-primary text-uppercase text-center py-4">EDIT Bill</h1>
                    <form className="modal-body px-5">
                        <div className="mb-3 row">
                            <div>
                                <input onChange={onChangeHandle} type="text" className="form-control" name='fullname'
                                    defaultValue={bill.fullname} />
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <div>
                                <input onChange={onChangeHandle} type="email" className="form-control" name='email'
                                    defaultValue={bill.email} />
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <div>
                                <input onChange={onChangeHandle} type="text" className="form-control" name='phone'
                                    defaultValue={bill.phone} id="inputPhone" />
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <div>
                                <input onChange={onChangeHandle} type="text" className="form-control" name='amount'
                                    defaultValue={bill.amount} />
                            </div>
                        </div>
                    </form>
                    <div className='d-flex justify-content-center'
                        style={
                            { width: '600px' }
                        }>
                        <Link to='/'>
                            <button type="button" className="btn btn-danger mx-2 px-5">Cancel</button>
                        </Link>
                        <button className="btn btn-primary px-5"
                        onClick={()=>handleUpdate()}>Update Bill</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Update;