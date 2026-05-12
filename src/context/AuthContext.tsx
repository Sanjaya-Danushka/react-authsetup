import { createContext, useState, useEffect } from "react"

type User = {
  name: string
  email: string
  password: string
}

interface AuthContextType {
  signUp: (
    name: string,
    email: string,
    password: string
  ) => { success: boolean; error?: string }

  login: (
    email: string,
    password: string
  ) => {
    success: boolean
    error?: string
  }

  logout: () => void

  user: User | null
}

export const AuthContext = createContext<AuthContextType | null>(null)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const currentUserEmail = localStorage.getItem("currentUserEmail")
    if (currentUserEmail) {
      const users = JSON.parse(localStorage.getItem("users") || "[]") as User[]
      const currentUser = users.find((u) => u.email === currentUserEmail)
      if (currentUser) {
        setUser(currentUser)
      }
    }
  }, [])

  function signUp(name: string, email: string, password: string) {
    const users = JSON.parse(localStorage.getItem("users") || "[]") as User[]

    const existingUser = users.find((u) => u.email === email)

    if (existingUser) {
      return {
        success: false,
        error: "User already exists",
      }
    }

    const newUser: User = {
      name,
      email,
      password,
    }

    users.push(newUser)

    localStorage.setItem("users", JSON.stringify(users))
    localStorage.setItem("currentUserEmail", email)

    setUser(newUser)

    return { success: true }
  }

  function login(email: string, password: string) {
    const users = JSON.parse(localStorage.getItem("users") || "[]") as User[]

    const existingUser = users.find(
      (u) => u.email === email && u.password === password
    )

    if (!existingUser) {
      return {
        success: false,
        error: "Invalid email or password",
      }
    }

    localStorage.setItem("currentUserEmail", existingUser.email)

    setUser(existingUser)

    return { success: true }
  }

  function logout() {
    localStorage.removeItem("currentUserEmail")
    setUser(null)
  }

  return (
    <AuthContext.Provider
      value={{
        signUp,
        login,
        logout,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
