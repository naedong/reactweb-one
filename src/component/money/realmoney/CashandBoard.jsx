import React from "react";
import Navbar from "../../Nav/Navbar";
import CashBeChange from "./CashBeChange";
import "./Board.css";

export default function CashBoard() {

    return (
        
        <div>
            <div>
            <Navbar></Navbar>
            </div>
            <div>
            <CashBeChange></CashBeChange>
            </div>
        </div>
    );
}