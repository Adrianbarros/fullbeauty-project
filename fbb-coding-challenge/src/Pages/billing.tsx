import React from "react";
import { BillingProps } from "../Types/types";

export const Billing = ({ data, handleChange, next }: BillingProps) => {
    const handleSubmit = (e: any) => {
        e.preventDefault()
        next('review')
        console.log(data)
    }

    return (
        <div className="page">
            <h1 style={{ 'alignSelf': 'center' }}>Billing</h1>
            <div className="container">

                <form onSubmit={handleSubmit}>
                    <div>
                        <div className="label">Name in Card:</div>
                        <input

                            type="text"
                            id="name"
                            name="name"
                            value={data.name}
                            onChange={handleChange}

                        />
                    </div>
                    <div>
                        <div className="label">Card Number:</div>
                        <input
                            type="number"
                            id="CardNumber"
                            name="cardNumber"
                            value={data.cardNumber}
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

                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}