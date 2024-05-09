import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/shared/Layout";
import Dashboard from "./components/dashboard";
import FeedbackForm from "./components/FeedbackForm";
import AdminPanel from "./components/adminPanel";
import AdminLogin from './components/AdminLogin';
import UserLogin from './components/UserLogin';
import AdminRegister from './components/AdminRegister';
import UserRegister from './components/UserRegister';
import { Outlet } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="/feedback" element={<FeedbackForm />} />
          <Route path="/adminpanel" element={<AdminPanel />} />
        </Route>
        <Route path="/register" element={<div>This is register page</div>} />
        {/* Define routes for user login and admin login */}
        <Route path="/user-login" element={<UserLogin />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-register" element={<AdminRegister />} />
        <Route path="/user-register" element={<UserRegister />} />

      </Routes>
    </Router>
  );
}

export default App;
