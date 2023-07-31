import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './components/AboutPage/About';
import Donate from './components/DonatePage/Donate';
import Events from './components/EventsPage/Events';
import Faq from './components/FAQPage/Faq';
import Members from './components/MembersPage/Members';
import Home from './components/HomePage/Home';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/members" element={<Members />} />
      <Route path="/events" element={<Events />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/donate" element={<Donate />} />
    </Routes>
  );
};

export default AppRoutes;
