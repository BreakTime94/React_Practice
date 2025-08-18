import React from "react";

const students = [
  {
    id: 1,
    name :"Inje",
  },
  {
    id: 2,
    name: "Steve",
  },
  {
    id: 3,
    name: "Bill",
  },
  {
    id: 4,
    name: "Jeff",
  },
];

//화살표 함수를 다시 한 번 보자

// 1. 표준형 : (param) => {return ~~~;}
const sum = (num1, num2) => {
  let sum = num1 + num2;
  return sum;
}
// 2. 파라미터가 1개: param => {return ~~~;} () 생략 가능

// 3. 리턴문 1개만 존재 : (param) => ~~~~; return과 {} 생략 가능

const sum2 = (num1, num2) => num1 + num2 ;

function AttendanceBook(props) {
  return(
      <ul>
        {students.map((s) => {
          return <li key={s.id}>{s.name}</li>
        })}
      </ul>
  )
}
export default AttendanceBook