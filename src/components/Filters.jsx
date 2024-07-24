import { useId } from 'react'
import { useFilters } from '../hooks/useFilters'
import './Filters.css'

export function Filters ({ products }) {
  const { filters, setFilters } = useFilters()
  const price = useId()
  const category = useId()

  const handlePriceChange = (event) => {
    const newFilter = { ...filters, price: Number(event.target.value) }
    setFilters(newFilter)
  }

  const handleCategoryChange = (event) => {
    const newFilter = { ...filters, category: event.target.value }
    setFilters(newFilter)
  }

  return (
        <section>
            <div className='price-filter'>
                <label htmlFor={price}>Minimun Price</label>
                <div>
                  <input onChange={handlePriceChange} type="range" id={price} value={filters.price} max={1000} min={0} />
                  <span>${filters.price}</span>
                </div>
            </div>

            <div className='category-filter'>
              <label htmlFor={category}>Cartegory</label>
              <select onChange={handleCategoryChange} name="" id={category}>
                <Categories products={products} />
              </select>
            </div>
        </section>
  )
}

function Categories ({ products }) {
  const categories = [...new Set(products.map(product => product.category))]
  return (
    <>
      <option value="all">All</option>
      {
        categories.map(category => (
          <option key={category} value={category}>{category}</option>
        ))
      }
  </>
  )
}
