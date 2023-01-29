import React from 'react';
import Modal from './Modal';
import Pagination from './Pagination';

const Bill = () => {
    return (
        <>
            <nav class="navbar bg-light">
                <div class="container-fluid">
                    <span class="navbar-brand mb-0 h1">Bill logo</span>
                    <span class="navbar-brand mb-0 h1">Total paid</span>
                </div>
            </nav>
            <div className='container px-5'>
                <nav className="navbar bg-secondary my-5">
                    <div className="container-fluid">
                        <div className="d-flex justify-content-start" >
                            <a className="navbar-brand text-primary">Bill logo</a>
                            <form role="search" style={{
                                width: '500px'
                            }}>
                                <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                            </form>
                        </div>
                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Add New Bill
                        </button>
                        <Modal></Modal>
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
                        <tr className=''>
                            <th scope="row">0111</th>
                            <td className="">Md Mubarak Hossain</td>
                            <td className="">hossainmubarak477@gmail.com</td>
                            <td className="">+8801302265408</td>
                            <td className="">$32456</td>
                            <td className="">Edit|Delete</td>
                        </tr>
                    </tbody>
                </table>
                <Pagination></Pagination>
            </div>
        </>
    );
};

export default Bill;