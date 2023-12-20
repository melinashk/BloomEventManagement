import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Login from '../pages/forms/login';
import Signup from '../pages/forms/Signup';
import OrganizerDashboard from '../pages/OrganizerDashBoard';
import HomePage from '../pages/home';
import MyEvents from '../pages/MyEvents';
import CreateEventForm from '../pages/forms/createEventForm';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/' element={<HomePage />}/>
        <Route path='/dashboard' element={<OrganizerDashboard/>} />
        <Route path='/myevents' element={<MyEvents />} />
        <Route path='/createEvent' element={<CreateEventForm />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router