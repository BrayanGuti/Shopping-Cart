import { FiltersContext } from '../context/filters'
import { useContext } from 'react'

export function useFilters () {
  const { filters, setFilters } = useContext(FiltersContext)

  const filterProducts = (products) => {
    return products.filter(product => {
      return (
        product.price >= filters.price &&
            (
              filters.category === 'all' ||
                product.category === filters.category
            )
      )
    })
  }

  return { filters, setFilters, filterProducts }
}
