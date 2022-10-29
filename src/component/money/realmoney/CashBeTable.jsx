
import React from "react";
import { useState } from "react";
import styled, { keyframes } from "styled-components";
import bear from "../../../component/assets/images/bear.png";
import WonTable from "./WonTable";

export default function ChageList({ columns, list }) {
    const [cash, setCash] = useState('');

  const inputPriceFormat = (str) => {
      console.log("s", str);
      
    const comma = (str) => {
      str = String(str);
      return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,");
      };
      
    const uncomma = (str) => {
      str = String(str);
      return str.replace(/[^\d]+/g, "");
    };
    return comma(uncomma(str));
  };


        return (
            <div className="backgroundimas" >
                <img src={bear} alt="곰 배경이미지" className="beared" />
                <div className="white-panels">
                    <div className="login-shows">
    
                        <table className="DA" >
                            <thead>
                                <tr>
                                    {columns.map((column) => (
                                        <th key={column}>{column}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {list.map(({ boano, boacash, boatotal }) => (
                                    <tr key={boano + boacash + boatotal}>
                                        <td><WonTable boano={boano} /> 원</td>
                                        <p style={{
                                            fontSize: '15px'
                                            
                                               }}> * 클릭 후 자판을 입력하시면 금액이 나옵니다.</p>
                                        <td>  <input type='text' value={cash} placeholder="값을 입력하시오"
                                            onChange={(e) => setCash(inputPriceFormat(e.target.value))}></input> 원</td>
                                        <td>{boano + boacash} 원</td>
                                    </tr>
                                ))}

                            </tbody>
                            <tfoot>
                                    <tr><input type='button' value="충전"></input></tr>

                            </tfoot>
                        </table>
                        
                    </div>
                </div>
            </div>
        
        );
    }

