// @flow

import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { withStyles, createStyleSheet } from 'material-ui/styles'
import { Drawer, List } from 'material-ui'

import SideBarItems from './SideBarItems'

const styleSheet = createStyleSheet('SideNavBar', {
  list: {
    width: 200,
    flex: 'initial'
  }
})

export class SideNavBar extends Component {
  render () {
    const classes = this.props.classes
    return (
      <div>
        <Drawer
          open={this.props.onOpen}
          onClick={this.props.onClose}
          onRequestClose={this.props.onClose}
        >
          <List id='sideBarList' className={classes.list}>
            <SideBarItems />
          </List>
        </Drawer>
      </div>
    )
  }
}

SideNavBar.PropTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styleSheet)(SideNavBar)
