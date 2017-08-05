import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import Home from './../views/Home'
import Members from './../views/Members'
import Docs from './../views/Docs'
import Chat from './../views/Chat'
import Resources from './../views/Resources'

export class Routes extends Component {
  render () {
    return (
      <div className='bodyMargin'>
        <Route exact path='/' component={Home} />
        <Route path='/Members' component={Members} />
        <Route path='/Chat' component={Chat} />
        <Route path='/Resources' component={Resources} />
        <Route path='/Docs' component={Docs} />
      </div>
    )
  }
}

export default Routes
