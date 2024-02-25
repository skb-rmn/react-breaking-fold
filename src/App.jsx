import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/Projects"
import Whoops404 from "./pages/Whoops404"
import Header from "./components/Header"


function App() {

  return (
    <div>
      <Header />
      <Router>
        <Routes>
          <Route index element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="*" element={<Whoops404/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
