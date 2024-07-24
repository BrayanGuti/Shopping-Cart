import './Products.css'
import { AddToCartIcon, RemoveFromCartIcon } from './Icons'
import { CartContext } from '../context/cart'
import { useContext } from 'react'

export function Main ({ products }) {
  return (
    <main className='products' >

          <Products products={products} />

    </main>
  )
}

function Products ({ products }) {
  const { removeFromCart, cart, addToCart } = useContext(CartContext)

  const checkProductInCart = product => {
    return cart.some(item => item.id === product.id)
  }

  return (
    <ul>
      {
        products.map(product => {
          const productInCart = checkProductInCart(product)
          return (
          <li key={product.id}>
            <img src={product.images[0]} alt={product.title} />
            <h3>{product.title} - ${product.price} </h3>
            <button style={{ backgroundColor: productInCart ? 'red' : 'blue' }} onClick={() => {
              productInCart
                ? removeFromCart(product)
                : addToCart(product)
            }}>
              {
                productInCart
                  ? <RemoveFromCartIcon />
                  : <AddToCartIcon />
              }

            </button>
          </li>
          )
        })
      }
    </ul>
  )
}
