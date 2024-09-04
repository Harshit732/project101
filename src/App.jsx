import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Popup from "./Components/Popup";
import {Route,Routes,BrowserRouter} from "react-router-dom";




function App() {
  

  return (
    <>
      <Navbar/>
      
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Hero/>}/>
          <Route path="/popup/:name" element={<Popup/>}/>
        </Routes>
      </BrowserRouter>

      
    </>
  )
}

export default App
