import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Toggle from "./chapter08/Toggle.jsx";
import TogglePractice from "./chapter08/practice/TogglePractice.jsx";
import ConfirmButton from "./chapter08/ConfirmButton.jsx";
import LoginControl from "./chapter09/LoginControl.jsx";
import Mailbox from "./chapter09/Mailbox.jsx";
import MainPage from "./chapter09/MainPage.jsx";
import LandingPage from "./chapter09/LandingPage.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LandingPage />
  </StrictMode>,
)
