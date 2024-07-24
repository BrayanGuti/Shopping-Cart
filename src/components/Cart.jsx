import { useId, useContext } from 'react'
import { CartIcon } from './Icons'
import { CartContext } from '../context/cart'
import './Cart.css'

export function Cart () {
  const { cart, removeFromOneCart, addToCart } = useContext(CartContext)
  const CartCheckBox = useId()

  return (
        <>
            <label className='cart-button' htmlFor={CartCheckBox}>
                <CartIcon />
            </label>
            <input type='checkbox' id={CartCheckBox} hidden />

            <aside className='cart'>
                <ul>
                    {cart.map(product => (
                        <li key={product.id}>
                            <img src={product.images[0]} alt={product.title} />
                            <div>
                                <h2>{product.title}</h2>
                                <p>{product.price}</p>
                                <button onClick={() => addToCart(product)}>
                                    +
                                </button>

                                <button onClick={() => removeFromOneCart(product)}>
                                    -
                                </button>

                                <p>
                                    quantity: {product.quantity}
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>

            </aside>

        </>
  )
}
