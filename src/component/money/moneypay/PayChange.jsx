import React from "react";
import PayBack from "./PayBack";
import { faker } from "@faker-js/faker";
    
export default function CashBeChange() {
    faker.locale = "ko";
    const columns = ["가맹점", "결제 금액", "구매 물품", "결제 수단"];
    faker.seed(100);
    const getRandom = (min, max) => Math.floor(Math.random() * (max - min) + min);
const list = Array(1)
    .fill()
    .map(() => ({
      boano: faker.address.cityName(),
      boacash: getRandom(0, 10000),
      boatotal: faker.word.conjunction(5),
      paycall: faker.finance.accountName()
    }));

    // const board = 
    //  [
    //       {  boano : 1,
    //         boacash : 20000
    //         },
    //         {
    //             boano: 2,
    //             boacash : 10000
    //      }
    //  ];
    
  return <PayBack columns={columns} list={list}></PayBack>;
}