import React from "react";
import ChageBeTable from "./CashBeTable";
import { faker } from "@faker-js/faker";
    
export default function CashBeChange() {
    faker.locale = "ko";
    const columns = ["머니 잔액", "머니 충전액", "충전 결과 예정액"];
    faker.seed(100);
    const getRandom = (min, max) => Math.floor(Math.random() * (max - min) + min);
const list = Array(1)
    .fill()
    .map(() => ({
      boano: getRandom(0, 10000),
      boacash: getRandom(0, 10000),
      boatotal: faker.word.adjective(),
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
    
  return <ChageBeTable columns={columns} list={list}></ChageBeTable>;
}