import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

import './styles/main.scss'

const IpAdressTracker = () => {
  return <App />
}

ReactDOM.render(<IpAdressTracker />, document.querySelector('#root'))
