// @flow

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

import { withStyles, createStyleSheet } from 'material-ui/styles'
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'

import PeopleIcon from 'material-ui-icons/People'
import HomeIcon from 'material-ui-icons/Home'
import ChatIcon from 'material-ui-icons/Chat'
import BookIcon from 'material-ui-icons/Book'

import './../index.css'

const styleSheet = createStyleSheet('SideBarItems', {
  navLink: {
    textDecoration: 'none'
  },
  list: {
    margin: '2px auto'
  }
})

export class SideBarItems extends Component {
  render () {
    const classes = this.props.classes
    return (
      <div>
        <NavLink
          className={classes.navLink}
          exact
          to='/'
          activeClassName='active'
        >
          <ListItem className={classes.list} button>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText className={classes.navLink} primary='Home' />
          </ListItem>
        </NavLink>
        <NavLink
          className={classes.navLink}
          to='/members'
          activeClassName='active'
        >
          <ListItem className={classes.list} button>
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary='Members' />
          </ListItem>
        </NavLink>
        <NavLink
          className={classes.navLink}
          to='/chat'
          activeClassName='active'
        >
          <ListItem className={classes.list} button>
            <ListItemIcon>
              <ChatIcon />
            </ListItemIcon>
            <ListItemText primary='Chat' />
          </ListItem>
        </NavLink>
        <NavLink
          className={classes.navLink}
          to='/resources'
          activeClassName='active'
        >
          <ListItem className={classes.list} button>
            <ListItemIcon>
              <BookIcon />
            </ListItemIcon>
            <ListItemText primary='Resources' />
          </ListItem>
        </NavLink>
        <NavLink
          className={classes.navLink}
          to='/docs'
          activeClassName='active'
        >
          <ListItem className={classes.list} button>
            <ListItemIcon>
              <BookIcon />
            </ListItemIcon>
            <ListItemText primary='Docs' />
          </ListItem>
        </NavLink>
      </div>
    )
  }
}

SideBarItems.PropTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styleSheet)(SideBarItems)
