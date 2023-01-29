import React from 'react';

const Modal = () => {
    return (

        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">New Bill</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body px-5">
                        <div class="mb-3 row">
                            {/* <label for="fullName" class="col-sm-2 col-form-label">Full Name</label> */}
                            <div>
                                <input type="text"  class="form-control" name='' placeholder='Enter your full name' id="fullName"/>
                            </div>
                        </div>
                        <div class="mb-3 row">
                            {/* <label for="inputEmail" class="col-sm-2 col-form-label">Email</label> */}
                            <div>
                                <input type="email" class="form-control" name='' placeholder='Enter your email' id="inputEmail" />
                            </div>
                        </div>
                        <div class="mb-3 row">
                            {/* <label for="inputPhone" class="col-sm-2 col-form-label">Phone</label> */}
                            <div>
                                <input type="text" class="form-control" name='' placeholder='Enter your phone no' id="inputPhone" />
                            </div>
                        </div>
                        <div class="mb-3 row">
                            {/* <label for="inputAmount" class="col-sm-2 col-form-label">Payable amount</label> */}
                            <div>
                                <input type="text" class="form-control" name='' placeholder='Enter payable amount' id="inputAmount" />
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
                        <button type="button" class="btn btn-primary">Add Bill</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;