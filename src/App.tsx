import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Auth from "./pages/Auth"
import Checkout from "./pages/Checkout"
import Navbar from "./components/default/Navbar"
import ProtectedRoute from "./components/ProtectedRoute"
import { AuthProvider } from "./context/AuthContext"

const App = () => {
  return (
    <AuthProvider>
      <div>
        {/* navbar */}
        <Navbar />
        {/* routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route 
            path="/checkout" 
            element={
              <ProtectedRoute>
                <Checkout />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </div>
    </AuthProvider>
  )
}

export default App
