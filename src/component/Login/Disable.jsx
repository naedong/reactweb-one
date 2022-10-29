import React, { useState } from "react";


function Disable(props) {
    const [disable, setDisable] = useState(false);
    setDisable(props.disable);
    console.log(disable+"클릭 이벤트 발생");
    return disable ? 'false' : 'true';
}
export default Disable;