import { About1, About2, About3, About4}  from "../../pages"
import { Navbar, Header } from "../"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"

const App = () => {
  return (
    <div>
       
         <Router>
         <Header/>
        <Routes>
        <Route path="/" element={<Navbar/>} />
        
            <Route path="/development1" element={<About1/>} />
            <Route path="/development2" element={<About2 />} />
            <Route path="/development3" element={<About3 />} />
            <Route path="/development4" element={<About4 />} />
        </Routes>
      
      </Router>
    </div>
  )
}

export default App