import React, {useState} from "react";

function TogglePractice(props) {
  const [isClick, setIsClick] = useState(false);

  const click = () => {
    setIsClick((isClick) => !isClick);
  }

  return(
    <button onClick={click} disabled={isClick}>
      {isClick ? '확인됨' : '확인하기'}
    </button>
  );

}

export default TogglePractice;
