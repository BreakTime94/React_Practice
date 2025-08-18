import React, {useState} from "react";

function SignUp() {
  const[name, setName] = useState('');
  const [gender, setGender] = useState('male');

  const handleSubmit = (e) => {
    alert(`입력한 이름: ${name} , 입력한 성별 ${gender}`);
    e.preventDefault();
  }

  return(
    <form onSubmit={handleSubmit}>
      <label style={{border : "1px solid"}}>
      이름을 입력하세요.
      <input type={"text"} value={name} onChange={ e => {
         setName(e.target.value);
      }}/>
      </label>
      <br/>
      <label>
        <select onChange={e => {
          setGender(e.target.value);
        }}>
          <option value={"male"}> 남자</option>
          <option value={"female"}> 여자</option>
        </select>
      </label>
      <button type={"submit"}>제출</button>
    </form>
  );
}

export default SignUp;