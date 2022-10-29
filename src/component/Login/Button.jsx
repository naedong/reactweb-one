import React from "react";

import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.min.js';
import './Button.css';
import Disable from "./Disable";
function Button(props) {

    function click() {
        console.log("클릭 발생")
    }

    console.log(props.changeColor);
    
    return (
        <button
            className={props.changeColor ? 'changeColorBtn' : 'loginBtn'} onClick={() => {console.log("클릭이벤트 발생")}}
    >   
        로그인
    </button>);
}
export default Button;