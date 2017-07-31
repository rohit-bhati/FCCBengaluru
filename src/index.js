import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker'

import './index.css'

import { NavBar } from './components'
import Routes from './components/Routes'

const RouterComp = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes />
      </div>
    </Router>
  )
}

ReactDOM.render(<RouterComp />, document.getElementById('root'))
registerServiceWorker()
