import React from "react";

function checkMail(props) {
  const unreadMessages = props.unreadMessages;
  unreadMessages.forEach( m => {
    console.log(m)
      }
  )
}

function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  console.log(unreadMessages);
  console.log(unreadMessages.length);
  return (
      <div>
        <h1>안녕하세요</h1>
        {unreadMessages.length > 0 &&
        <h2>
          현재 {unreadMessages.length} 개의 읽지 않은 메세지가 있소.
        </h2>}
        <button onClick={checkMail}>메일이 뭐가 있는지 콘솔로 확인하시오</button>
      </div>
  )
}
export default Mailbox;