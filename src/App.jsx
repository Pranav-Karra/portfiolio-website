import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Analytics } from "@vercel/analytics/react"
import './App.css' //delete line

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
      <Analytics />
    </>
  )
}

export default App
