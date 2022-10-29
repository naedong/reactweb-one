// import React from "react";
// import ChageList from "./ChageList";
// import { faker } from "@faker-js/faker";
    
// export default function CashChage() {
//     faker.locale = "ko";
//     const columns = ["boano", "boacash", "boatotal"];
//     faker.seed(100);
//     const getRandom = (min, max) => Math.floor(Math.random() * (max - min) + min);
// const list = Array(53)
//     .fill()
//     .map(() => ({
//       boano: getRandom(0, 10000000),
//       boacash: faker.internet.email(),
//       boatotal: faker.word.adjective(),
//     }));

//     // const board = 
//     //  [
//     //       {  boano : 1,
//     //         boacash : 20000
//     //         },
//     //         {
//     //             boano: 2,
//     //             boacash : 10000
//     //      }
//     //  ];
    
//     return <ChageList columns={columns} list={list}></ChageList>;
// }