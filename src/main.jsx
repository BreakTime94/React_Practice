import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Toggle from "./chapter08/Toggle.jsx";
import TogglePractice from "./chapter08/practice/TogglePractice.jsx";
import ConfirmButton from "./chapter08/ConfirmButton.jsx";
import LoginControl from "./chapter09/LoginControl.jsx";
import Mailbox from "./chapter09/Mailbox.jsx";
import MainPage from "./chapter09/MainPage.jsx";
import LandingPage from "./chapter09/LandingPage.jsx";
import Web from "./chapter09/Web.jsx";
import NumberList from "./chapter10/NumberList.jsx";
import AttendanceBook from "./chapter10/AttendanceBook.jsx";
import NameForm from "./chapter11/NameForm.jsx";
import RequestForm from "./chapter11/RequestForm.jsx";
import FruitSelect from "./chapter11/FruitSelect.jsx";
import Reservation from "./chapter11/Reservation.jsx";
import SignUp from "./chapter11/SignUp.jsx";
import UserForm from "./chapter11/UserForm.jsx";
import TemperatureInput from "./chapter12/TemperatureInput.jsx";
import Calculator from "./chapter12/Calculator.jsx";
import WelcomeDialog from "./chapter13/WelcomeDialog.jsx";
import Dialog from "./chapter13/Dialog.jsx";
import WelcomeDialog1 from "./chapter13/WelcomeDialog1.jsx";
import SignUpDialog from "./chapter13/SignUpDialog.jsx";
import ProfileCard from "./chapter13/ProfileCard.jsx";

// const numbers = [1, 2, 3, 4, 5];
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProfileCard/>
  </StrictMode>,
)
