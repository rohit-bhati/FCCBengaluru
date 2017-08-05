// @flow

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import fetch from 'isomorphic-fetch'
import { Helmet } from 'react-helmet'
import { withStyles, createStyleSheet } from 'material-ui/styles'
import { Grid, Card, Typography, Chip } from 'material-ui'
import { CardMedia, CardContent } from 'material-ui/Card'

const styleSheet = createStyleSheet('Members', theme => ({
  root: {
    flexGrow: 1,
    width: '90%',
    margin: '0 auto'
  },
  image: {
    width: '100%',
    height: 300
  },
  chip: {
    margin: theme.spacing.unit
  },
  row: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  gridItem: {
    display: 'flex',
    flex: 1
  }
}))

export class Members extends Component {
  constructor (props) {
    super(props)
    this.state = {
      membersData: []
    }
  }

  async componentWillMount () {
    const apiUrl = 'http://localhost:3001/api/members'
    const response = await fetch(apiUrl)
    const members = await response.json()
    console.log(members)
    this.setState({ membersData: members })
  }

  render () {
    const classes = this.props.classes
    return (
      <div className={classes.root}>
        <Helmet title='Members -- FCC Bengaluru' />
        <h1>Members</h1>
        <Grid container style={{ display: 'flex' }} gutter={24}>
          {this.state.membersData.map(member => {
            return (
              <Grid
                key={member._id}
                item
                className={classes.gridItem}
                xs={12}
                sm={6}
                md={3}
              >
                <Card>
                  <CardMedia>
                    <img
                      className={classes.image}
                      src='http://via.placeholder.com/500x450'
                      alt='member_image'
                    />
                  </CardMedia>
                  <CardContent>
                    <Typography type='headline' component='h2'>
                      {member.name}
                    </Typography>
                    <Typography type='subheading'>
                      {member.email}
                    </Typography>
                    <Typography type='caption'>
                      {member.age} years old
                    </Typography>
                    <div className={classes.row}>
                      {member.strongFields.map((field, index) => {
                        return (
                          <Chip
                            key={index}
                            label={field}
                            className={classes.chip}
                          />
                        )
                      })}
                    </div>
                  </CardContent>
                </Card>
              </Grid>
            )
          })}
        </Grid>
      </div>
    )
  }
}

Members.PropTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styleSheet)(Members)
