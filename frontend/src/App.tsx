import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Navbhar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
import PlayList from "./components/PlayList/PlayList";
import HomePage from "./pages/Homepage";
import Secured from "./pages/Securedpage";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import keycloak from "./Keycloak";
import PrivateRoute from "./helpers/PrivateRoute";
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <ReactKeycloakProvider authClient={keycloak}>
      <div className="relative-flex">
        <div className="flex-col">
          <Router>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route path="/playlist" element={<PlayList />} />

              {<Route path="/secured" element={<Secured />} />}
            </Routes>
          </Router>
        </div>
      </div>
    </ReactKeycloakProvider>
  );
}

export default App;
