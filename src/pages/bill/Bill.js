import React, { useEffect, useState } from 'react';
import Pagination from './Pagination';
import useImg from '../../hook/useImg';
import AddBill from './AddBill';
import { Link, useLoaderData } from 'react-router-dom';

const Bill = () => {
    const bill=useLoaderData()
    const [Bill, setBill] = useState(bill)
    // useEffect(() => {
    //     fetch('https://power-hacker-server.vercel.app/billing-list')
    //         .then(data => data.json())
    //         .then(data => {
                
    //            const remainData=Bill.filter(b=>)
    //         })
    //         .catch(err => console.error(err))
    // }, [])
    console.log(Bill)

    const handleDelete = (id) => {
        fetch(`https://power-hacker-server.vercel.app/delete-billing/${id}`, {
            method: "DELETE",
            headers: {
                'content-type':'application/json'
            }
        })
        .then(data=>data.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    alert('Successfully Deleted')
                    const remainBill = Bill.filter(b => b._id !== id)
                    setBill(remainBill)
                }
            })
    }
    return (
        <>
            <div className='container px-5'>
                <nav className="navbar bg-secondary my-5">
                    <div className="container-fluid">
                        <div className="d-flex justify-content-start" >
                            <a className="navbar-brand text-primary">
                                {useImg()}
                            </a>
                            <form role="search" 
                            style={{
                                width: '500px'
                            }}>
                                <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                            </form>
                        </div>
                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addBill">
                            Add New Bill
                        </button>
                        <AddBill></AddBill>
                    </div>
                </nav>
                <table className="table table-dark">
                    <thead>
                        <tr className=''>
                            <th scope="col">Bill Id</th>
                            <th scope="col">Full Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Paid Amount</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Bill?.map(b =><tr key={b._id} className=''>
                                <th scope="row">'12345'</th>
                                <td className="">{b.fullname}</td>
                                <td className="">{b.email}</td>
                                <td className="">{b.phone}</td>
                                <td className=""><span>$</span>{b.amount}</td>
                                <td className="d-flex justify-content-around">
                                    <Link to={`/update/${b._id}`}>
                                    <button className="btn btn-primary px-3">Edit</button>                                     
                                    </Link>
                                    <button onClick={() =>handleDelete(b._id)} className="btn btn-danger px-2">Delete</button>
                                </td>
                            </tr>
                          )
                        }
                    </tbody>
                </table>
                <Pagination></Pagination>
            </div>
        </>
    );
};

export default Bill;