import "./App.css";
import Video from "./component/Video";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainHome from "./component/MainHome";
import Login from "./component/Login/Login";
import CashBoard from "./component/money/realmoney/CashandBoard";
import PayBoard from "./component/money/moneypay/PayBoard";
import BoardPay from "./component/trade/Boardpay";
import Game from "./component/game/Game";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Video />}></Route>
          <Route path="/main" element={<MainHome />}></Route>
          <Route path="/sign-in" element={<Login />}></Route>
          <Route path="/cash" element={<CashBoard />}></Route>
          <Route path="/pay" element={<PayBoard />}></Route>
          <Route path="/board" element={<BoardPay />}></Route>
          <Route path="/game" element={<Game />}></Route>
          {/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는경우 처리 */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
