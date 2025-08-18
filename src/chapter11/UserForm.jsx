import React, {useRef}from "react";

function UserForm(props) {
  const nameRef = useRef(null);

  const handleSubmit = (e) => {
    console.log(nameRef);
    alert("이름 : " + nameRef.current.value);
    e.preventDefault();
  }

  return(
      <form onSubmit={handleSubmit}>
        <label>
          이름 :
          <input name={"name"} ref={nameRef} />
        </label>
        <button type={"submit"}>제출</button>
      </form>
  );
}

export default UserForm