import React from "react";

import { BrowserRouter, Routes, Route, Router } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import Homepage from "./pages/Homepage/Homepage";
import NotFound from "./components/NotFound/NotFound";
import Signin from "./pages/Auth/pages/Signin/Signin";
import Signup from "./pages/Auth/pages/Signup/Signup";
import UserInfo from "./pages/UserInfo/UserInfo";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Homepage />} />

        {/* Public routes */}
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/sign-up" element={<Signup />} />

        {/* User information */}
        <Route path="users" element={<UserInfo />} />
      </Route>
    </Routes>
  );
}

export default App;
