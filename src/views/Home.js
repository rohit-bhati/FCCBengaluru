import React, { Component } from 'react'
import Slider from 'react-slick'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'
import fetch from 'isomorphic-fetch'

import { withStyles, createStyleSheet } from 'material-ui/styles'
import { Grid, Paper, Typography, List } from 'material-ui'
import { ListItem, ListItemText, ListItemIcon } from 'material-ui/List'
import StarIcon from 'material-ui-icons/Star'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const styleSheet = createStyleSheet('Home', {
  root: {
    flexGrow: 1,
    margin: '0 auto',
    width: '90%'
  },
  grid: {
    marginTop: 30
  },
  paper: {
    padding: 20
  }
})

class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      notifications: []
    }
  }

  async componentWillMount () {
    const response = await fetch('http://localhost:3001/api/notifications')
    const notifs = await response.json()
    console.log(notifs)
    this.setState({ notifications: notifs })
  }

  render () {
    const classes = this.props.classes
    const notifs = this.state.notifications
    const images = ['meetup01', 'meetup02', 'meetup03']
    const settings = {
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1
      // centerPadding: '60px'
    }
    return (
      <div className={classes.root}>
        <Helmet title='Home -- FCC Bengaluru' />
        <Slider {...settings}>
          {images.map((image, index) => {
            return (
              <img
                key={index}
                src={
                  process.env.PUBLIC_URL + '/images/carousel/' + image + '.png'
                }
                alt='carousel-images'
              />
            )
          })}
        </Slider>
        <Grid container gutter={24} className={classes.grid}>
          <Grid item xs={12} md={6}>
            <Paper className={classes.paper}>
              <Typography type='headline' align='center'>
                Notifications
              </Typography>
              <List>
                {notifs.map(item => {
                  return (
                    <ListItem key={item._id} button>
                      <ListItemText primary={item.text} />
                      {item.isNewNotif &&
                        <ListItemIcon>
                          <StarIcon />
                        </ListItemIcon>}
                    </ListItem>
                  )
                })}
              </List>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper className={classes.paper}>I am Rohit Bhati</Paper>
          </Grid>
        </Grid>
      </div>
    )
  }
}

Home.PropTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styleSheet)(Home)
