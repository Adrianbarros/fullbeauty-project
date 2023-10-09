import React from "react";
import { ItemType } from "../Types/types";

interface Props {
    item: ItemType
    add: any
}

export const Item = ({ item, add }: Props) => {

    return (
        <div className="item-card">
            <div className="item-name">{item.name}</div>
            <div className="item-price">Price: ${item.price}</div>
            <div className="item-quantity">Quantity: {item.quantity}</div>
            {
                item.discount &&
                <div className="item-discount">{item.discount}</div>
            }

            <button onClick={() => add(item.name)}>Add to Cart</button>

        </div>
    )

}