import { BrowserRouter,Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import Navbar from "./Pages/Navbar"
import About from "./Pages/About"
import Skill from "./Pages/Skill"
import Project from "./Pages/Project"
import Contact from "./Pages/Contact"
export default function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
     <Route element={<Navbar/>}>
          <Route index element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/skill" element={<Skill/>}/>
          <Route path="/project" element={<Project/>}/>
          <Route path="/#contact-id" element={<Contact/>}/>

        
          </Route>

        </Routes></BrowserRouter>

        </div>

)
}