import React from 'react';
import './slides.styles.scss'
import Carousel from 'react-material-ui-carousel'
import {Paper} from '@material-ui/core'
import slide1 from '../../../assets/slides/slide-1.jpg'
import slide2 from '../../../assets/slides/slide-2.jpg'
import slide3 from '../../../assets/slides/slide-3.jpg'

const SliderLogin: React.FC = () => {
  const items = [
    {
      name: 'Never forget a thing',
      // eslint-disable-next-line max-len
      description: 'From groceries to picking up the kids, we help you remember it all, anytime, anywhere',
      img: slide1,
    },
    {
      name: 'Get anything done',
      description: 'Easily break down your big goals into actionable items',
      img: slide2,
    },
    {
      name: 'Work together',
      // eslint-disable-next-line max-len
      description: 'Get everyone around you always in-sync with shared lists & assigned tasks',
      img: slide3,
    },
  ]

  return (
    <Carousel>
      {
        items.map( (item, i) => <Item key={i} item={item} /> )
      }
    </Carousel>
  )
}

function Item(props: any) {
  return (
    <Paper>
      <div className="slider-login">
        <div className="slider-login__desc">
          <h2 className="slider-login__desc--title">{props.item.name}</h2>
          <p className="slider-login__desc--text">{props.item.description}</p>
        </div>
        <div className="slider-login--image">
          <img src={props.item.img} alt=""/>
        </div>
      </div>
    </Paper>
  )
}

export default SliderLogin
