import React from "react";
import { CartItem } from "../Types/types";

interface Props {
    data?: any;
    total?: number
    next: any;
    page: string;
}

export const Cart = ({ data, total, next, page }: Props) => {

    return (
        <div className="cart">
            <div className="userInfo">
                {data && Object.keys(data).length != 0 ?

                    <div className="cart-container" >
                        <h2>Cart</h2>
                        <p>Items</p>
                        {
                            Object.keys(data).map((item, i) => {
                                return (<div className="field" key={i}>{item} X {data[item]}</div>)
                            })
                        }
                        {
                            total &&
                            <h2>Total: ${total}</h2>

                        }
                        <button className="button" onClick={() => { next(page) }}> Checkout</button>
                    </div>

                    : <div>No Items in cart</div>}

            </div>


        </div>
    )
}