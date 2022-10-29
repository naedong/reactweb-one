import React from "react";

export default function Item({ item, data }) {
    return (
        <div key={item.boano}>
            <span key={item.boano}>{item.boano}</span>
            <span key={item.boacash}>{item.boacash}</span>

        </div>
    )
}