import React from 'react';
import './App.css'
import { Route, Routes } from "react-router-dom";
import  Login from "./components/Login";
import  Form from "./components/Form";
import  Home from "./components/Home";
import  ProtectedRoute from "./components/ProtectedRoute";

import { AuthProvider } from "./context/AuthContext";

export default function App() {
  return (
    <div className="bg-gray-500 text-black h-screen flex text-white">
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="/register" element={<Form />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

