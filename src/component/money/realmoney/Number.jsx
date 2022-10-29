// import NumberFormat from "react-number-format";
// import React, { useCallback } from "react";

// const Number = props => {
//   const { inputRef, onChange, ...other } = props;

//   const isAllowed = useCallback(values => {
//     const { value } = values;
//     if (String(value).includes(".")) return false;
//     return true;
//   }, []);

//   const onHandleChange = useCallback(
//     e => {
//       e.target.value = e?.target?.value.replaceAll(",", "") || "";
//       onChange(e);
//     },
//     [onChange]
//   );

//   return (
//     <NumberFormat
//       {...other}
//       getInputRef={inputRef}
//       onChange={onHandleChange}
//       thousandSeparator
//       displayType={"input"}
//       allowNegative={false}
//       isAllowed={isAllowed}
//     />
//   );
// };

// export default Number;