import React, { useEffect } from "react";
import ReactDOM from "react-dom";

export default function OnLoad() {
  useEffect(() => {
    const script = document.createElement("script");
    script.innerHTML = `         
        function initTmap() {
            var map = new Tmapv2.Map("TMapApp", {
                center: new Tmapv2.LatLng(37.566481622437934,126.98502302169841),
                width: "100%",
                height: "80%",
                zoom:15
            });
        }
        initTmap();
   `;

    script.type = "text/javascript";
    script.async = "async";
    document.head.appendChild(script);
  }, []);

  return (
    <div
      id="TMapApp"
      style={{
        height: "20%",
        width: "20%",
        position: "absolute",
      }}
    />
  );
}
