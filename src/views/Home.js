import React, { Component } from 'react'
import Slider from 'react-slick'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'
import { withStyles, createStyleSheet } from 'material-ui/styles'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const styleSheet = createStyleSheet('Home', {
  container: {
    width: '90%',
    margin: '0 auto'
  }
})
class Home extends Component {
  render () {
    const classes = this.props.classes
    const images = [
      'meetup01',
      'meetup02',
      'meetup03',
      'meetup04',
      'meetup05',
      'meetup06',
      'meetup07'
    ]
    const settings = {
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1
      // centerPadding: '60px'
    }
    return (
      <div className={classes.container}>
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
      </div>
    )
  }
}

Home.PropTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styleSheet)(Home)
