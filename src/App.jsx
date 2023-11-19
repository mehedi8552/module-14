import React from 'react';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import HomePage from './Page/Home';
import TeamPage from './Page/Team';
import ServicePage from './Page/Service';
import ProjectPage from './Page/Project';
import TestimonialsPage from './Page/Tastimonial';

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/team' element={<TeamPage/>}/>
        <Route path='/service' element={<ServicePage/>}/>
        <Route path='/project' element={<ProjectPage/>}/>
        <Route path='/testimonials' element={<TestimonialsPage/>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;