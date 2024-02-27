import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/Projects"
import Whoops404 from "./pages/Whoops404"
import Header from "./components/Header/Header"
import Project from "./components/Project"
import AnimatedBG from "./components/AnimatedBG/AnimatedBG"


function App() {

  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route index element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          {/* <Route path="/projects" element={<Projects/>} /> */}
          <Route path="/projects">
          <Route index element={<Projects />} />
            <Route path=":id" element={<Project />} />
          </Route>
          <Route path="*" element={<Whoops404/>} />
        </Routes>
      </Router>
      <AnimatedBG />
    </div>
  )
}

export default App
