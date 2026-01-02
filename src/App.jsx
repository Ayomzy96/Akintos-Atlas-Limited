import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css'
import { createBrowserRouter, Route, RouterProvider } from 'react-router'
import { createRoutesFromElements } from 'react-router'
import LayoutOne from './layout/LayoutOne'
import Home from './pages/Home'
// Property listings removed — site focuses on consultancy and projects
import Contact from './pages/Contact';
import About from './pages/About';
import Details from './pages/Details';
import Services from './pages/Services';
import Projects from './pages/Projects';
import JoinUs from './pages/JoinUs';
import Updates from './pages/Updates';

const App = () => {

  const myRoute = createBrowserRouter(createRoutesFromElements(
    <Route>
      <Route path='/' element={<LayoutOne />}>
        <Route index element={<Home />} />
  {/* Property route removed — use /projects and /services for consultancy content */}
  <Route path='/contact' element={<Contact />} />
  <Route path='/about' element={<About />} />
  <Route path='/updates' element={<Updates />} />
  <Route path='/services' element={<Services />} />
  <Route path='/projects' element={<Projects />} />
  <Route path='/join-us' element={<JoinUs />} />
  <Route path='/details' element={<Details />} />
      </Route>
    </Route>
  ))

  return (
    <RouterProvider router={myRoute} />
  )
}

export default App