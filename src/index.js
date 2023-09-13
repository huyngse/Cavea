import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import Loader from "./Components/Loader/index.jsx";
import Index from "./view/index";
import Login from "./view/log-in/login_page";
import Signup from "./view/sign-up/signup_page";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => {
      clearTimeout(loadingTimeout); // Xóa timeout nếu component bị unmount
    };
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={isLoading ? <Loader /> : <Index />} />
        <Route
          path="/login-page"
          element={isLoading ? <Loader /> : <Login />}
        />
        <Route path="/sign-up" element={isLoading ? <Loader /> : <Signup />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
