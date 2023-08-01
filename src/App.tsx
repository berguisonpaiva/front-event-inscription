import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { Inscritions } from "./pages/Incriptions"
import { Header } from "./components/Header"


function App() {
  return (
    <div>
    <Header />
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
