import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Home from './routes/Home.jsx'
import Project from './routes/Project.jsx'
import About from './routes/About.jsx'
import Contact from './routes/Contact.jsx'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

const route = createBrowserRouter(createRoutesFromElements(
  <Route>
      <Route path="/" element ={<Home/>}/>
  <Route path="home" element ={<Home/>}/>
  <Route path="About" element={<About/>}/>
  <Route path="Contact" element={<Contact/>}/>
  <Route path="Project" element={<Project/>}/>
  </Route>
)

)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={route}/>
    <App />
  </StrictMode>,
)
