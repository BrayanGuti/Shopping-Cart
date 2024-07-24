import { Filters } from './Filters.jsx'

export function Header ({ products }) {
  return (
        <header>
            <h1> PODUCTS 🛒</h1>
            <Filters products={products} />
        </header>
  )
}
