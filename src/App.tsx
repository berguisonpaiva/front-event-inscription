import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { Inscritions } from "./pages/Incriptions"


function App() {
  return (
    <div>
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />         
          <Route path="/iscritions/:id" element={<Inscritions />} />         
        </Routes>
      </BrowserRouter>
    </div>
  
  )
}

export default App
