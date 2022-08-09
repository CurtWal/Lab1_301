import React, { Component } from 'react'
import Footer from './Components /Footer'
import Header from './Components /Header'
import Main from './Components /Main'


export default class App extends Component {
  
  render() {
    return (
      <div>
        <Header/>
        <Main name="Mountain Goat" paragraph='The Mountain Goat, One of the best climbers in the world.
                    Do not Stand infront of them on a mountain or you just might
                    go flying off.' name2='Rhino' paragraph2='The Rhino or also known as The Rhinoceros, are speed machines!
                    Capable of running upwards of 30-40 miles per hour.'/>
        <Footer/>
      </div>
    )
  }
}

