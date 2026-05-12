import { Link } from "react-router-dom"
import { useContext } from "react"
import { ShoppingCart, Moon, Sun } from "lucide-react"
import { AuthContext } from "../../context/AuthContext"
import { CartContext } from "../../context/CartContext"
import { ThemeContext } from "../../context/ThemeContext"

const Navbar = () => {
  const authContext = useContext(AuthContext)
  const cartContext = useContext(CartContext)
  const themeContext = useContext(ThemeContext)
  
  if (!authContext) {
    return null
  }

  const { user, logout } = authContext
  const cartItemsCount = cartContext ? cartContext.getCartItemsCount() : 0
  const { isDark, toggleTheme } = themeContext || { isDark: false, toggleTheme: () => {} }

  const handleLogout = () => {
    logout()
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-white/10 backdrop-blur-xl transition-all duration-300">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* LOGO */}
        <Link className="text-2xl font-bold text-primary" to="/">
          ShopHub
        </Link>

        {/* CENTER LINKS */}
        <div className="flex items-center gap-6">
          <Link
            to="/"
            className="text-muted-foreground transition hover:text-primary"
          >
            Home
          </Link>

          <Link
            to="/products"
            className="text-muted-foreground transition hover:text-primary"
          >
            Products
          </Link>

          <Link
            to="/about"
            className="text-muted-foreground transition hover:text-primary"
          >
            About
          </Link>

          <Link
            to="/contact"
            className="text-muted-foreground transition hover:text-primary"
          >
            Contact
          </Link>

          <Link
            to="/checkout"
            className="relative flex items-center gap-2 text-muted-foreground transition hover:text-primary"
          >
            <ShoppingCart className="h-5 w-5" />
            Cart
            {cartItemsCount > 0 && (
              <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                {cartItemsCount}
              </span>
            )}
          </Link>
        </div>

        {/* THEME TOGGLE */}
        <button
          onClick={toggleTheme}
          className="rounded-lg p-2 text-muted-foreground transition hover:bg-muted hover:text-foreground"
        >
          {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </button>

        {/* AUTH SECTION */}
        <div className="flex items-center gap-3">
          {user ? (
            <>
              {/* USER INFO */}
              <div className="flex items-center gap-3">
                <div className="text-sm">
                  <p className="text-muted-foreground">Welcome,</p>
                  <p className="font-semibold text-foreground">{user.name}</p>
                </div>
                
                {/* USER AVATAR */}
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  {user.name.charAt(0).toUpperCase()}
                </div>
              </div>

              {/* LOGOUT BUTTON */}
              <button
                onClick={handleLogout}
                className="rounded-md border border-border px-4 py-2 text-muted-foreground transition hover:bg-muted hover:text-foreground"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              {/* LOGIN BUTTON */}
              <Link
                to="/auth"
                className="rounded-md px-4 py-2 text-muted-foreground transition hover:bg-muted hover:text-foreground"
              >
                Login
              </Link>

              {/* SIGNUP BUTTON */}
              <Link
                to="/auth"
                className="rounded-md bg-primary px-4 py-2 text-primary-foreground transition hover:opacity-90"
              >
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
