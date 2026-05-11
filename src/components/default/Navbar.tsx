import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="border-b border-border bg-background">
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
            to="/checkout"
            className="text-muted-foreground transition hover:text-primary"
          >
            Cart
          </Link>
        </div>

        {/* AUTH BUTTONS */}
        <div className="flex items-center gap-3">
          <Link
            to="/auth"
            className="rounded-md px-4 py-2 text-muted-foreground transition hover:bg-muted hover:text-foreground"
          >
            Login
          </Link>

          <Link
            to="/auth"
            className="rounded-md bg-primary px-4 py-2 text-primary-foreground transition hover:opacity-90"
          >
            Signup
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
