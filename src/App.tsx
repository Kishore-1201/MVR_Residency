import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Rooms } from './pages/Rooms';
import { BanquetHalls } from './pages/BanquetHalls';
import { TravelServices } from './pages/TravelServices';
import { RoomDetails } from './pages/RoomDetails';
import { BanquetDetails } from './pages/BanquetDetails';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="rooms" element={<Rooms />} />
          <Route path="rooms/:id" element={<RoomDetails />} />
          <Route path="banquet-halls" element={<BanquetHalls />} />
          <Route path="banquet-halls/:id" element={<BanquetDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;