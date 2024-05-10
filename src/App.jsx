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
import AdminDashboard from './components/AdminDashboard';
import LayoutAdmin from './components/shared/LayoutAdmin';
import AdminFeedbackForm from './components/AdminFeedbackForm';
import AddCollege from './components/add-college';
import AddDepartment from './components/add-department';
import AverageFeedback from './components/average-feedback';
import AdminSettings from './components/adminsetting';
import AdminLogout from './components/adminlogout';

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
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/adminfeedback" element={<AdminFeedbackForm />} />
        <Route path="/adminanalysis"element={<AdminPanel/>}/>
        <Route path="/add-college"element={<AddCollege/>}/>
        <Route path="/add-department"element={<AddDepartment/>}/>
        <Route path="/average-feedback"element={<AverageFeedback/>}/>
        <Route path="/admin-setting"element={<AdminSettings/>}/>
        <Route path="/admin-logout"element={<AdminLogout/>}/>




      </Routes>
    </Router>
  );
}

export default App;
