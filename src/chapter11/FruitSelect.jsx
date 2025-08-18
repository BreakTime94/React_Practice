import React, {useState} from "react";

function FruitSelect() {
  const [value, setValue] = useState('grape');

  const handleChange =(event) => {
    setValue(event.target.value);
  }
  const handleSumbit = (event) => {
    alert("님이 선택한 과일은 : " + value);
    event.preventDefault();
    console.log(event.target.elements[0].selectedOptions[0].text);  // 얘는 form 태그 내부의 input select textarea button 만 고려한다. 즉 select 태그다
  }
  return (
      <form onSubmit={handleSumbit}>
        <label>
          과일 선택
          <select value={value} onChange={handleChange}>
            <option value={"apple"}>사과</option>
            <option value={"banana"}>바나나</option>
            <option value={"grape"}>포도</option>
            <option value={"watermelon"}>수박</option>
          </select>
        </label>
        <button type={"submit"}>제출</button>
      </form>
  );
}
export default FruitSelect