import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from 'react-router-dom';

import Home from './features/home/Home.jsx'
import Layout from './layoutpage/Layout.jsx';
import LoginPage from './pages/auth/LoginPage.jsx';
import RegisterPage from './pages/auth/RegisterPage.jsx';
import OtpverifyPage from './pages/auth/OtpverifyPage.jsx';
import BookingPage from './pages/BookingPage.jsx';
import EmployeeDash from './features/dashboard/employee/EmployeeDash.jsx';


const router = createBrowserRouter(
  createRoutesFromElements(
  <Route> 

      <Route path='/login' element={<LoginPage/>} />
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/otpverify' element={<OtpverifyPage />} />

    <Route path="/" element={<Layout/>}>
       <Route path='' element={<Home/>}  />
       <Route path='/invitelists' element={<BookingPage/>}  />
       {/* <Route path='about' element={<About />} /> */}
        {/* <Route path='posts' element={<Post />} />
        <Route path='contact' element={<Contact />} /> */}
    </Route>

    <Route path='/employeedashboard' element={<EmployeeDash/>} >  

    </Route>


  </Route>
  )
);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
