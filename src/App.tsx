import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Header } from "./components/Header"
import { Home } from "./pages/Home"
import { IncriptionPage } from "./pages/IncriptionPage"



export default function App() {
  return (
    <div>
    <Header />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inscriptions/:id" element={<IncriptionPage />} />
      </Routes>
    </BrowserRouter>
  </div>
  
  
  )
}

