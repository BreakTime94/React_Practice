import React from "react";

function NumberList(props) {
  const numbers = props.numbers;
  //const {numbers} = props;
  //리스트를 표시할 때 반드시 키 값이 있어야 한다. 키 값은 중복될 수 없다.
  const listItems = numbers.map((n) =>
    <li key={n}>{n}</li>
  );
  return(
    <ul>{listItems}</ul>
  );
}

export default NumberList