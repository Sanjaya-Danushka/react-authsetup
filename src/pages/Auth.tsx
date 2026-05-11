import { useContext, useState } from "react"
import { useForm } from "react-hook-form"
import { AuthContext } from "../context/AuthContext"

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true)
  const { signUp, login, user } = useContext(AuthContext)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{
    name?: string
    email: string
    password: string
  }>()

  function onSubmit(data: { name?: string; email: string; password: string }) {
    signUp(data.name, data.email, data.password)
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      {/* CARD */}
      <div className="w-full max-w-md rounded-3xl bg-card p-8 text-card-foreground shadow-2xl">
        {/* HEADER */}
        {user && <p>Welcome, {user.name}!</p>}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-extrabold">
            {isLogin ? "Welcome Back 👋" : "Create Account 🚀"}
          </h1>

          <p className="mt-2 text-muted-foreground">
            {isLogin
              ? "Login to continue shopping"
              : "Signup and start exploring amazing products"}
          </p>
        </div>

        {/* TOGGLE */}
        <div className="mb-8 flex rounded-xl bg-muted p-1">
          <button
            type="button"
            onClick={() => setIsLogin(true)}
            className={`w-1/2 rounded-lg py-2 text-sm font-semibold transition ${
              isLogin
                ? "bg-primary text-primary-foreground shadow-md"
                : "text-muted-foreground"
            }`}
          >
            Login
          </button>

          <button
            type="button"
            onClick={() => setIsLogin(false)}
            className={`w-1/2 rounded-lg py-2 text-sm font-semibold transition ${
              !isLogin
                ? "bg-primary text-primary-foreground shadow-md"
                : "text-muted-foreground"
            }`}
          >
            Signup
          </button>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* NAME */}
          {!isLogin && (
            <div>
              <label className="mb-2 block text-sm font-medium">
                Full Name
              </label>

              <input
                type="text"
                placeholder="John Doe"
                className="w-full rounded-xl border border-border bg-background px-4 py-3 transition outline-none focus:ring-2 focus:ring-ring"
                {...register("name", {
                  required: "Name is required",
                })}
              />

              {errors.name && (
                <p className="mt-1 text-sm text-destructive">
                  {errors.name.message}
                </p>
              )}
            </div>
          )}

          {/* EMAIL */}
          <div>
            <label className="mb-2 block text-sm font-medium">Email</label>

            <input
              type="email"
              placeholder="example@email.com"
              className="w-full rounded-xl border border-border bg-background px-4 py-3 transition outline-none focus:ring-2 focus:ring-ring"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
            />

            {errors.email && (
              <p className="mt-1 text-sm text-destructive">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* PASSWORD */}
          <div>
            <label className="mb-2 block text-sm font-medium">Password</label>

            <input
              type="password"
              placeholder="••••••••"
              className="w-full rounded-xl border border-border bg-background px-4 py-3 transition outline-none focus:ring-2 focus:ring-ring"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Minimum 6 characters",
                },
              })}
            />

            {errors.password && (
              <p className="mt-1 text-sm text-destructive">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* FORGOT PASSWORD */}
          {isLogin && (
            <div className="text-right">
              <button
                type="button"
                className="text-sm text-primary hover:underline"
              >
                Forgot Password?
              </button>
            </div>
          )}

          {/* SUBMIT */}
          <button
            type="submit"
            className="w-full rounded-xl bg-primary py-3 font-semibold text-primary-foreground transition hover:opacity-90"
          >
            {isLogin ? "Login" : "Create Account"}
          </button>
        </form>

        {/* FOOTER */}
        <div className="mt-8 text-center text-sm text-muted-foreground">
          {isLogin ? (
            <>
              Don&apos;t have an account?{" "}
              <button
                type="button"
                onClick={() => setIsLogin(false)}
                className="font-semibold text-primary hover:underline"
              >
                Signup
              </button>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <button
                type="button"
                onClick={() => setIsLogin(true)}
                className="font-semibold text-primary hover:underline"
              >
                Login
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Auth
