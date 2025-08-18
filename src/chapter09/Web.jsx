//Web.jsx
import React from "react";
import Header from "./Header.jsx";
import Nav from "./Nav.jsx";
import Article from "./Article.jsx";

//함수형 컴포넌트, 첫 글자는 무조건 대문자로, 그래야 React Component로 인식

function Web (props) {
  return (
      // 최상단 element는 반드시 한 개여야 함. ex) 반환 태그가 무조건 한 개여야 함. 그 내부에서 여러개의 태그로 이뤄진 것은 괜찮음
      <div>
        <Header></Header>
        <Nav></Nav>
        <Article></Article>
      </div>
  );
}

//다른 컴포넌트에서 사용할 수 있도록 하기 위한 선언
export default Web;