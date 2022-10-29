
import React from "react";
import { useState } from "react";

import bear from "../../../component/assets/images/fox.png";
import WonTable from "./Wonble";

export default function PayBack({ columns, list }) {
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
            <div className="backgroundimasd" >
                <img src={bear} alt="곰 배경이미지" className="bearedd" />
                <div className="white-panelsd">
                    <div className="login-showsd">
    
                        <table className="DAD" >
                            <thead>
                                <tr>
                                    {columns.map((column) => (
                                        <th key={column}>{column}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {list.map(({ boano, boacash, boatotal, paycall }) => (
                                    <tr key={boano + boacash + boatotal + paycall }>
                                        <td>{boano}</td>
                                        
                                        <td>  <input type='text' value={cash} placeholder="값을 입력하시오"
                                            onChange={(e) => setCash(inputPriceFormat(e.target.value))}></input> 원</td>
                                        <td>{boatotal}</td>
                                        <td>{paycall}</td>
                                    </tr>
                                ))}

                            </tbody>
                          
                        </table>
                        
                    </div>
                </div>
            </div>
        
        );
    }

