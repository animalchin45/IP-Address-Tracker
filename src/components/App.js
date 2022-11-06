import React, { useState, useEffect } from 'react'

import { location } from '../hooks/location'

import Search from './Search'
import Display from './Display'
import Map from './Map'

import { background } from '../img'

function App() {
  // location state
  const [locationData, setLocationData] = useState(null)

  // useEffect for initial map
  useEffect(async () => {
    const data = await location('timobrien.dev')
    setLocationData(data)
  }, [])

  return (
    <main>
      <header style={{ backgroundImage: `url(${background})` }}>
        <h1>IP Address Tracker</h1>
        <Search setLocationData={setLocationData} />
        <Display locationData={locationData} />
      </header>
      <section>
        <Map locationData={locationData} />
      </section>
    </main>
  )
}

export default App
