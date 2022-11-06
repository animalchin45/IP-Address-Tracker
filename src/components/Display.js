import React from 'react'

function Display({ locationData }) {
  if (!locationData) {
    return (
      <div className='display'>
        <p>Loading...</p>
      </div>
    )
  }

  const { ip, location, isp } = locationData

  return (
    <div className='display'>
      <ul>
        <li>
          <h2>IP Address</h2>
          <p>{ip}</p>
        </li>
        <div className='display__divide'></div>
        <li>
          <h2>Location</h2>
          <p>{`${location.city}, ${location.region}`}</p>
        </li>
        <div className='display__divide'></div>
        <li>
          <h2>Timezone</h2>
          <p>{location.timezone}</p>
        </li>
        <div className='display__divide'></div>
        <li>
          <h2>ISP</h2>
          <p>{isp}</p>
        </li>
      </ul>
    </div>
  )
}

export default Display
