import React from "react"
import logo from '../Media/fb-logo.png'


export const Header = () => {
    return (
        <div className="header">
            <div>
                <img src={logo} alt="logo" className="header-logo" />
            </div>
        </div>
    )


}