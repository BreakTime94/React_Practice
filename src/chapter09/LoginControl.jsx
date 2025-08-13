import React, {useState} from "react";
import LogoutButton from "./LogoutButton.jsx";
import LoginButton from "./LoginButton.jsx";
import Greeting from "./Greeting.jsx";

function LoginControl() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => {
    setIsLoggedIn(true);
  }

  const handledLogoutClick = () => {
    setIsLoggedIn(false);
  }

  let button;

  if(isLoggedIn) {
    button = <LogoutButton onClick={handledLogoutClick}/>;
  } else {
    button = <LoginButton onClick={handleLoginClick}/>
  }

  return (
      <div>
        <Greeting isLoggedIn ={isLoggedIn}/>
        {button}
      </div>
  )
}
export default LoginControl;