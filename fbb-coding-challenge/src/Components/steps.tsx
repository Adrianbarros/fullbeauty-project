import React from "react";
import shoppingLogo from "../Media/shopping-car.png";
import billLogo from '../Media/bill.png'
import reviewLogo from '../Media/review.png'
import shippingLogo from '../Media/delivery.png'

export const Steps = () => {
    return (
        <div className="steps">
            <div className="step">
                <img src={shoppingLogo} className="logo" />
                <div>Shop</div>

            </div>
            <div>-</div>
            <div className="step">
                <img src={shippingLogo} className="logo" />
                <div>Shipping</div>

            </div>
            <div>-</div>
            <div className="step">
                <img src={billLogo} className="logo" />
                <div>Billing</div>

            </div>
            <div>-</div>
            <div className="step">
                <img src={reviewLogo} className="logo" />
                <div>Review</div>

            </div>

        </div>
    )

}