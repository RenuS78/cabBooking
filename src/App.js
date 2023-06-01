import "./App.css";
import LoginPage from "./pages/LoginPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "bootstrap-icons/font/bootstrap-icons.css";
import SoloImagesPage from "./pages/SoloImagesPage";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const logFunc = (x, callHome) => {
    setIsLoggedIn(x);
    setTimeout(() => {
      callHome();
    }, 0);
  };

  return (
    <div>
      <BrowserRouter>
        {isLoggedIn ? (
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route Path="/solo" element={<SoloImagesPage />} />
            {/* <Route path="/collection" element={<CollectorFilterImagesPage />} /> */}
          </Routes>
        ) : (
          <LoginPage logFunc={logFunc} />
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
