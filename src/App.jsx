import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { useEffect } from "react";
import "./App.scss";
import { AuthenticationProvider, useAuthentication } from "./components/AuthenticationContext/AuthenticationContext.jsx";
import Cookies from "js-cookie";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute.jsx";
import Home from "./pages/Home/Home.jsx";
import axios from "axios";

import NotFound from "./pages/NotFound/NotFound.jsx";
import BookCommentPage from "./pages/BookCommentsPage/BookCommentsPage.jsx";
import LogInPage from "./pages/LogInPage/LogInPage.jsx";
import SignUpPage from "./pages/SignUpPage/SignUpPage.jsx";
import Landing from "./pages/Landing/Landing.jsx";
import CreateBookTalePage from "./pages/CreateBookTalePage/CreateBookTalePage.jsx";

function App() {
  return (
    <AuthenticationProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
           <Route
            path="/login"
            element={<LogInPage />}
          />
          <Route path="/signup" element={<SignUpPage /> }/>
          <Route
            path="/home"
            element={
                <Home />
            }
          />
         
          <Route
            path="/create-booktale"
            element={
  
                <CreateBookTalePage />

            }
          />
          <Route
            path="/booktale/:qrCodeId"
            element={<BookCommentPage />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthenticationProvider>
  );
}

export default App;
