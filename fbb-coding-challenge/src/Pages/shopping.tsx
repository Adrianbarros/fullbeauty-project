import React from "react";
import { Props } from "../Types/types";
import { Item } from "../Components/item";



export const Shopping = ({ items, add, next }: Props) => {
    return (
        <div className="shopping">
            {
                items.map((item, i) => {
                    return (<Item item={item} add={add} key={i} />)
                })
            }
            <button onClick={() => { next('shipping') }}> Proceed Shipping</button>
        </div>
    )
}