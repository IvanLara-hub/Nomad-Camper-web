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

function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="container my-3">
        <Routes>
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
        </Routes>
      </div>
    </div>
  );
}

export default App;
