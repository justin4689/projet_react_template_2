import "./App.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import DashboardLayout from "./layout/DashboardLayout";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import UserList from "./pages/UserList";
import UserCreatePage from "./pages/UserCreatePage";
import { UserDetailsPage } from "./pages/UserDetailsPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route index path="/login"  element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<UserList />} /> 
            <Route path="user-create" element={<UserCreatePage/>} />
            <Route path="user-details" element={<UserDetailsPage/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
