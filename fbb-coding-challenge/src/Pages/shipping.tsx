import React from "react";
import { ShippingProps } from "../Types/types";

export const Shipping = ({ data, handleChange, next }: ShippingProps) => {
    const handleSubmit = (e: any) => {
        e.preventDefault()
        next('billing')
        console.log(data)
    }

    return (
        <div className="page">
            <h1 style={{ 'alignSelf': 'center' }}>Shipping</h1>
            <div className="container">


                <form onSubmit={handleSubmit}>
                    <div>
                        <div className="label">Name:</div>
                        <input

                            type="text"
                            id="name"
                            name="name"
                            value={data.name}
                            onChange={handleChange}

                        />
                    </div>
                    <div>
                        <div className="label">Address:</div>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            value={data.address}
                            onChange={handleChange}


                        />
                    </div>
                    <div>
                        <div className="label">Email:</div>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={data.email}
                            onChange={handleChange}

                        />
                    </div>
                    <div>
                        <div className="label">Phone:</div>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={data.phone}
                            onChange={handleChange}


                        />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}