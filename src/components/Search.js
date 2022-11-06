import React, { useState } from 'react'

import { location } from '../hooks/location'
import { validateIpAddress } from '../hooks/validateIpAddress'

import IconArow from '../img/icon-arrow.svg'

function Search({ setLocationData }) {
  const [search, setSearch] = useState('')

  // search form onChange
  const onChange = (e) => {
    setSearch(e.target.value)
  }

  // search form onSubmit
  const onSubmit = async (e) => {
    e.preventDefault()

    const searchType = validateIpAddress(search)

    const data = await location(search, searchType)

    setLocationData(data)
  }

  return (
    <div>
      <form onSubmit={onSubmit} className='search'>
        <input
          onChange={onChange}
          placeholder='Search for any IP address or domain'
        ></input>
        <button type='submit'>
          <IconArow />
        </button>
      </form>
    </div>
  )
}

export default Search
