import { useCallback, useState } from 'react'

async function fetchProducts () {
  const response = await fetch('https://dummyjson.com/products')
  const { products } = await response.json()
  return products
}

export function useProducts () {
  const [loading, setLoading] = useState(false)
  const [products, setProducts] = useState([])

  const getProducts = useCallback(async () => {
    try {
      setLoading(true)
      const products = await fetchProducts()
      setProducts(products)
    } catch (error) {
      throw new Error('Error fetching products')
    } finally {
      setLoading(false)
    }
  })

  return { setProducts, products, getProducts, loading }
}
