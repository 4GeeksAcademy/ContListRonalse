import React from "react"

export const AddContact =() => {
    return (
<div className="container">
<div className="mt-5">
        <label className="form-label d-flex text-start">Full Name</label>
        <input type="email" className="form-control"  placeholder="full Name" />
    </div>
    <div className="mb-3">
        <label  className="form-label d-flex text-start">Email</label>
        <input type="email" className="form-control" placeholder="name@example.com" />
    </div>
    <div className="mb-3">
        <label  className="form-label d-flex text-start">Phone</label>
        <input type="text" className="form-control"  placeholder="+34-666-66-66-66" />
    </div>
    <div className="mb-3">
        <label className="form-label d-flex text-start">Address</label>
        <input type="email" className="form-control"  placeholder="Address" />
</div>
</div>
    )
}