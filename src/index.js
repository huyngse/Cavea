import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import Loader from "./Components/Loading/index.jsx";
import Index from "./view/index";
import Login from "./view/Login/login_page.jsx";

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
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
