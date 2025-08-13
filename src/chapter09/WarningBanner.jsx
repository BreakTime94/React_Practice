import React from "react";

function WarningBanner(props) {
  if(!props.warning){
    return null;
  }
  return (
    <div style={{fontWeight: "bold", fontSize: 24}}>경고!</div>
  );
}
export default WarningBanner;