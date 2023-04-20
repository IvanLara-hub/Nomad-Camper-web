import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import AuthContext from "./contexts/AuthContext";
import Login from "./views/Login/Login";
import Profile from "./views/Profile/Profile";
import Campers from "./views/Campers/Campers";
import CamperDetail from "./views/CamperDetail/CamperDetail";
import CamperExtras from "./views/CamperExtras/CamperExtras";
import Budget from "./views/Budget/Budget";
import Home from "./views/Home/Home";
import SentEmail from "./views/SentEmail/SentEmail";
import "./index.css";
import Gallery from "./views/Gallery/Gallery";
import TestimonialPage from "./components/Testimonial/TestimonialPage";
import SignupForm from "./views/Signup/Signup";

function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="">
        <Routes>
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          
          <Route path="/" element={<Home />} />
          <Route path="/campers" element={<Campers />} />
          <Route path="/campers/:slug" element={<CamperDetail />} />
          <Route path="/campers/:slug/extras" element={<CamperExtras />} />
          <Route path="/budget" element={<Budget />} />
          <Route path="/budget/sentemail" element={<SentEmail />} />

          <Route path="/gallery" element={<Gallery />} />
          <Route path="/testimonial" element={<TestimonialPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
