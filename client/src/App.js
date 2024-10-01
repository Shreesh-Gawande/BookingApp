import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import React from 'react';
import Home from "./pages/home/Home.jsx";
import List from "./pages/list/List.jsx";
import Hotel from "./pages/hotel/Hotel.jsx";
import Login from "./pages/login/Login.jsx";
import Signin from "./pages/signin/Signin.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<List />} />
        <Route path="/hotels/:id" element={<Hotel />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
