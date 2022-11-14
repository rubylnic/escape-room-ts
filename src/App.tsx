import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Choose from "./pages/Choose";
import HomePage from "./pages/HomePage";
import QuestPage from "./pages/QuestPage";
import Quests from "./pages/Quests";
import './App.scss';
import { useAppSelector } from "./store/hooks";
import ModalCity from "./modals/ModalCity";
import ModalQuestion from "./modals/ModalQuestion";
import { useEffect, useState } from "react";
import SuccessfulPayment from "./pages/SuccessfulPayment";
import ModalResponse from "./modals/ModalResponse";
import Modal from "./modals/Modal";


function App() {
  const [formResponse, setFormResponse] = useState('')
  const [showPopupResponse, setShowPopupResponse] = useState(false)

  useEffect(() => {
    if (formResponse) {
      setShowPopupResponse(true);
      setTimeout(() => {
        setShowPopupResponse(false);
      }, 2000);
    }

  }, [formResponse])

  const modal = useAppSelector((state) => state.modal.value);
  const ifOpened = useAppSelector((state) => state.modal.ifOpened);
  const background = useAppSelector((state) => state.background.value);

  return (
    <Router>
      <div className={`background-container ${background}`}>
        <Header />
        <main className="main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/escape-room-ts" element={<HomePage />} />
            <Route path="/escape-room-ts/choose" element={<Choose />} />
            <Route path="/escape-room-ts/quest-item" element={<QuestPage />} />
            <Route path="/escape-room-ts/quests" element={<Quests />} />
            <Route path="/escape-room-ts/payment" element={<SuccessfulPayment />} />
          </Routes>
        </main>
        <Footer />
        {modal == "city" && ifOpened ? <ModalCity /> : ''}
        {modal == "question" && ifOpened ? <ModalQuestion setFormResponse={setFormResponse} /> : ''}
        {showPopupResponse ? <Modal type='response' title={formResponse}></Modal> : ''}
      </div>
    </Router>

  );
}

export default App;
