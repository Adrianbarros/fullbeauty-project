import React from "react";

interface Props {
    userData: any;
    title: string;
}

export const InforContainer = ({ userData, title }: Props) => {

    return (
        <div className="info-container">
            <h2>{title}</h2>
            {
                Object.keys(userData).map((field, i) => {
                    return (<div className="field" key={i}>{field}: {userData[field]}</div>)
                })
            }

        </div>
    )

}