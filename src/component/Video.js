import React from "react";
import cidels from "./assets/video/videoplayback.mp4";
import "./Video.css";
import "./style.css";
import "./script.js";
import { Link } from "react-router-dom";

export default function Video() {
  const clickMe = () => {
    console.log("클릭");
    <Link to="#"></Link>;
  };
  return (
    <div className="main">
      <Link className="navbar-brand" to={"/main"}>
        <div className="wrap">
          <div className="imageHolder bg0">
            <div className="moon"></div>
          </div>

          <div className="imageHolder bg1">
            {/* <img
            alt="background"
            className="rotY"
            src="https://forestcom-themesurgeons.netdna-ssl.com/wp-content/uploads/2018/10/tree1-sld.png"
          /> */}
          </div>
          {/* <div className="imageHolder bg2">
			<img  alt="background1" src="http://www.yerbabuena1.com/background/forest.png"/>
		</div> */}
          {/* <div className="imageHolder midTree bg3">
			<img alt="background2" src="https://png2.kisspng.com/sh/57cfae4388935260b557fc369e7fafc5/L0KzQYm3V8E3N5w0g9t8c4Dxd37pigJle151itHwcnHwPbTzigAuaaN5RdRAbXWwRbO7hMA2OGU4T9g5NECxSIG6VcY6QWM2TaU6N0e3QoK5UsI6OV91htk=/kisspng-birds-program-clip-art-bume-5b4d050437f040.8035699215317742122291.png"/>
		</div> */}
          <div className="imageHolder midTree2 bg3">
            <video autoPlay muted loop width="75%" height="100%">
              <source src={cidels} type="video/mp4"></source>
            </video>
          </div>
          <div className="imageHolder frontTree bg4">
            {/* <img
            alt="background4"
            src="https://png2.kisspng.com/sh/57cfae4388935260b557fc369e7fafc5/L0KzQYm3V8E3N5w0g9t8c4Dxd37pigJle151itHwcnHwPbTzigAuaaN5RdRAbXWwRbO7hMA2OGU4T9g5NECxSIG6VcY6QWM2TaU6N0e3QoK5UsI6OV91htk=/kisspng-birds-program-clip-art-bume-5b4d050437f040.8035699215317742122291.png"
          /> */}
          </div>
          <div className="imageHolder wolf bg5" onClick={clickMe}>
            <img
              className="imgs"
              alt="background5"
              src="https://images.vexels.com/media/users/3/148118/isolated/preview/06bc5a8132921a97bb7a0c7bb0b098f6-wolf-howling-silhouette-by-vexels.png"
            />

            <div
              className="fadein bg4"
              style={{
                display: "flex",
                justifyContent: "center",
                color: "white",
                fontSize: "20px",
              }}
            >
              <p
                className="text"
                style={{
                  display: "flex",
                  justifyItems: "center",
                }}
              >
                넘어가실려면 이곳을 클릭해주시길 바랍니다.
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
