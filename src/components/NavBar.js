// @flow

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles, createStyleSheet } from 'material-ui/styles'
import { AppBar, Button, IconButton, Toolbar, Avatar } from 'material-ui'
import { NavLink } from 'react-router-dom'

import MenuIcon from 'material-ui-icons/Menu'

import logo from './../images/logo/fccBengaluru.png'
import SideNavBar from './SideNavBar'

const styleSheet = createStyleSheet('NavBar', {
  root: {
    width: '100%'
  },
  flex: {
    marginRight: 'auto'
  },
  navBar: {
    background: '#006400',
    height: 80
  },
  logo: {
    margin: '0 10px',
    width: 70,
    height: 80
  }
})

export class NavBar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      open: false
    }
  }

  handleClose = () => {
    this.setState({ open: false })
  }

  handleOpenDrawer = () => {
    this.setState({ open: true })
  }

  render () {
    const classes = this.props.classes
    return (
      <div>
        <div className={classes.root}>
          <AppBar className={classes.navBar}>
            <Toolbar>
              <IconButton
                color='contrast'
                aria-label='Menu'
                onClick={this.handleOpenDrawer}
              >
                <MenuIcon />
              </IconButton>
              <div className={classes.flex}>
                <NavLink exact to='/'>
                  <Avatar
                    className={classes.logo}
                    src={logo}
                    alt='FCC Bengaluru logo'
                  />
                </NavLink>
              </div>
              <Button color='contrast'>Login</Button>
              <Button color='contrast'>SignUp</Button>
            </Toolbar>
          </AppBar>
        </div>
        <SideNavBar onOpen={this.state.open} onClose={this.handleClose} />
      </div>
    )
  }
}

NavBar.PropTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styleSheet)(NavBar)
