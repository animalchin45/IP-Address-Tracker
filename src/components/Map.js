import React from 'react'
import GoogleMapReact from 'google-map-react'

import LocationPin from './LocationPin'

const KEY = process.env.GOOGLE_MAPS_KEY

function Map({ locationData }) {
  if (!locationData) {
    return (
      <div className='map'>
        <p>Loading...</p>
      </div>
    )
  }

  const { location } = locationData

  return (
    <div id='map' className='map'>
      <GoogleMapReact
        bootstrapURLKeys={{ key: KEY }}
        center={location}
        defaultZoom={10}
      >
        <LocationPin />
      </GoogleMapReact>
    </div>
  )
}

export default Map
