import { useEffect } from 'react'
import './App.css'
import { Main } from './components/Products'
import { useProducts } from './hooks/getProducts'
import { useFilters } from './hooks/useFilters'
import { Header } from './components/Header'
import { Cart } from './components/Cart'
import { CartProvider } from './context/cart'

function App () {
  const { products, loading, getProducts } = useProducts()
  const { filterProducts } = useFilters()

  const filteredProducts = filterProducts(products)

  useEffect(() => { getProducts() }, [])
  return (
    <>
      {
        loading
          ? <p>Loading...</p>
          : <CartProvider>
              <Header products={products} />
              <Cart />
              <Main products={filteredProducts} />
            </CartProvider>
      }

    </>
  )
}

export default App
