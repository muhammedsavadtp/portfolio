import React from 'react'
import { Routes, Route } from "react-router";
import About from '../components/about/About';
import Header from '../components/header/Header'
import Home from '../components/home/Home'
import LatestPortfolio from '../components/latestportfolio/LatestPortfolio';
import Service from '../components/service/Service';

const PageRoutes = () => {
  return (
      <Routes>
          <Route path="/" element={<Header />} >
              <Route index element={<Home />} />
              <Route path='about' element={<About />} />
              <Route path='service' element={<Service />} />
              <Route path='portfolio' element={<LatestPortfolio />} />
          </Route>
      
    </Routes>
  )
}

export default PageRoutes
