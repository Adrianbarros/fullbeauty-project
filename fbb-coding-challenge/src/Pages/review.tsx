import React from "react";
import { InforContainer } from "../Components/infoContainer";
import { Cart } from "../Components/cart";
interface Props {
    shippingInfo: any;
    billingInfo: any;
    cartData: any;
    next: any;
}
export const Review = ({ shippingInfo, billingInfo, cartData, next }: Props) => {

    return (
        <div className="page">
            <div className="cart">
                <Cart data={cartData} next={next} page={'shopping'} />
            </div>
            <div className="userInfo">
                <InforContainer userData={shippingInfo} title={'shipping info'} />
                <InforContainer userData={billingInfo} title={'Billing info'} />

            </div>
        </div>
    )
}