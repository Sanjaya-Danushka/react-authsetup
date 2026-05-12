import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"

interface ProtectedRouteProps {
  children: React.ReactNode
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const authContext = useContext(AuthContext)

  if (!authContext) {
    return null
  }

  const { user } = authContext

  if (!user) {
    return <Navigate to="/auth" replace />
  }

  return <>{children}</>
}

export default ProtectedRoute
