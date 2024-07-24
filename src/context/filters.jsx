import { createContext, useState } from 'react'

// 1 crear el contexto
export const FiltersContext = createContext()

// 2 consumir el contexto
export function FiltersProvider ({ children }) {
  const [filters, setFilters] = useState({
    price: 0,
    category: 'all'
  })
  return (
        <FiltersContext.Provider value={{
          filters,
          setFilters
        }}>
        {children}
        </FiltersContext.Provider>
  )
}
