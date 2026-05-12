import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../context/CartContext"
import { ShoppingCart, Plus, Minus, Trash2, ArrowLeft } from "lucide-react"

const Checkout = () => {
  const cartContext = useContext(CartContext)

  if (!cartContext) {
    return <div>Loading...</div>
  }

  const { cart, removeFromCart, updateQuantity, getCartTotal, clearCart } = cartContext

  const handleCheckout = () => {
    alert("Checkout functionality would be implemented here!")
    clearCart()
  }

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-background py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-muted">
              <ShoppingCart className="h-12 w-12 text-muted-foreground" />
            </div>
            <h1 className="mb-4 text-3xl font-bold text-foreground">Your cart is empty</h1>
            <p className="mb-8 text-lg text-muted-foreground">
              Looks like you haven't added any items to your cart yet.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition hover:opacity-90"
            >
              <ArrowLeft className="h-4 w-4" />
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">Shopping Cart</h1>
          <p className="text-muted-foreground">
            {cart.length} {cart.length === 1 ? "item" : "items"} in your cart
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl bg-card border border-border p-6 shadow-sm"
              >
                <div className="flex gap-4">
                  {/* Product Image */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-24 w-24 rounded-lg object-cover"
                  />

                  {/* Product Details */}
                  <div className="flex-1">
                    <h3 className="mb-2 text-lg font-semibold text-foreground">
                      {item.name}
                    </h3>
                    <p className="mb-4 text-sm text-muted-foreground line-clamp-2">
                      {item.description}
                    </p>

                    {/* Quantity Controls */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="rounded-lg border border-border p-2 transition hover:bg-muted"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="w-12 text-center font-semibold">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="rounded-lg border border-border p-2 transition hover:bg-muted"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>

                      <div className="flex items-center gap-4">
                        <p className="text-lg font-bold text-primary">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="rounded-lg p-2 text-destructive transition hover:bg-destructive/10"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="rounded-2xl bg-card border border-border p-6 shadow-sm sticky top-6">
              <h2 className="mb-6 text-xl font-bold text-foreground">Order Summary</h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-semibold">${getCartTotal().toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="font-semibold text-green-600">Free</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tax</span>
                  <span className="font-semibold">${(getCartTotal() * 0.1).toFixed(2)}</span>
                </div>
                <div className="border-t border-border pt-3">
                  <div className="flex justify-between text-lg">
                    <span className="font-bold">Total</span>
                    <span className="font-bold text-primary">
                      ${(getCartTotal() * 1.1).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                className="w-full rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition hover:opacity-90 mb-4"
              >
                Proceed to Checkout
              </button>

              <Link
                to="/"
                className="block w-full rounded-lg border border-border px-6 py-3 text-center font-semibold text-foreground transition hover:bg-muted"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout