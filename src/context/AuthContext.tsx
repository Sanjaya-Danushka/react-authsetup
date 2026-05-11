import { createContext, useState } from "react"

interface AuthContextType {
  signUp: (
    name: string,
    email: string,
    password: string
  ) => { success: boolean; error?: string }
  login: () => void
  user: User | null
}

type User = {
  name: string
  email: string
  password: string
}

export const AuthContext = createContext<AuthContextType | null>(null)
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)

  function signUp(name: string, email: string, password: string) {
    const users = JSON.parse(localStorage.getItem("users") || "[]") as User[]
    if (users.find((u: { email: string }) => u.email === email)) {
      return { success: false, error: "User already exists" }
    }

    const newUser = {
      name,
      email,
      password,
    }
    users.push(newUser)
    localStorage.setItem("users", JSON.stringify(users))
    setUser(newUser)
    return { success: true }
  }

  function login() {}
  return (
    <AuthContext.Provider value={{ signUp, login, user }}>
      {children}
    </AuthContext.Provider>
  )
}
