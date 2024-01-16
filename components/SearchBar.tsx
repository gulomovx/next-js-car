'use client'

import { useState } from "react"
import SearchManufacturer from "./SearchManufacturer"


const SearchBar = () => {
    const [manufacturer, setManufacturer]=useState()
    const handeSearch = () => {
        
    }
  return (
      <form className="searchbar" onSubmit={handeSearch}>
          <SearchManufacturer
              manufacturer={manufacturer}
              setManufacturer={setManufacturer}
          />
    </form>
  )
}

export default SearchBar