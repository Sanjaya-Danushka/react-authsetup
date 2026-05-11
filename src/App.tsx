import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Auth from "./pages/Auth"
import Checkout from "./pages/Checkout"
import Navbar from "./components/default/Navbar"

const App = () => {
  return <div >
    {/* navbar */}
    <Navbar />
    {/* routes */}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/checkout" element={<Checkout />} />   
    </Routes>
  </div>
}

export default App
