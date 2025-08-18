import React, {useState} from "react";

function RequestForm(props) {
  const [value, setValue] = useState('요청사항을 입력하세요.');
  const [value2 , setValue2] = useState('기타사항을 입력하세요.');

  const handleChange = (event) => {
    console.log(event.target.name);
    setValue(event.target.value)
  }

  const handleChangeName = (event) => {
    setValue2(event.target.value)
  }


  const handleSubmit = (event) => {
    console.log(event.target);
    alert('입력 요청한 사항 : ' + value + 'value2 : ' + value2);
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        요청사항:
        <textarea value={value} onChange={handleChange} placeholder={"요청사항을 입력하세요"}/>
        <br/>
        기타사항:
        <input value={value2} onChange={handleChangeName}/>
      </label>
      <button type={"submit"}></button>
    </form>
  );
}
export default RequestForm