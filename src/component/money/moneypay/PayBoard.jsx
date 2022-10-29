import React from "react";
import Navbar from "../../Nav/Navbar";
import PayChange from "./PayChange";
import "./PayBoard.css";

export default function PayBoard() {

    return (
        
        <div>
            <div>
            <Navbar></Navbar>
            </div>
            <div>
            <PayChange></PayChange>
            </div>
        </div>
    );
}