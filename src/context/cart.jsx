import { createContext, useState } from 'react'

// 1 Crear el contexto
export const CartContext = createContext()

// 2 proveer el contexto
export function CartProvider ({ children }) {
  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    const productIndex = cart.findIndex(item => item.id === product.id)

    if (productIndex >= 0) {
      const newCart = structuredClone(cart)
      newCart[productIndex].quantity += 1
      return setCart(newCart)
    }

    return setCart([...cart, { ...product, quantity: 1 }])
  }

  const removeFromCart = (product) => {
    const newCart = structuredClone(cart)
    setCart(newCart.filter(item => item.id !== product.id))
  }

  const removeFromOneCart = (product) => {
    const productIndex = cart.findIndex(item => item.id === product.id)
    if (cart[productIndex].quantity > 1) {
      const newCart = structuredClone(cart)
      newCart[productIndex].quantity -= 1
      return setCart(newCart)
    }

    return removeFromCart(product)
  }
  return (
        <CartContext.Provider value={{
          cart,
          addToCart,
          removeFromCart,
          removeFromOneCart
        }}>
        {children}
        </CartContext.Provider>
  )
}
