import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
import JobListing from './Components/JobListing';
import Blog from './Components/Blog';
import './App.css';
import { Route, Routes } from 'react-router-dom';

function App() {
  // let component;
  // console.log(window.location);
  // switch (window.location.pathname) {
  //   case '/':
  //     component = <Home />;
  //     break;

  //   case '/home':
  //     component = <Home />;
  //     break;
  //   case '/aboutus':
  //     component = <AboutUs />;
  //     break;

  //   case '/joblisting':
  //     component = <JobListing />;
  //     break;
  //   case '/blog':
  //     component = <Blog />;
  //     break;
  // }

  return (
    <>
      <Navbar />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
        className="container"
      >
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/joblisting" element={<JobListing />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
