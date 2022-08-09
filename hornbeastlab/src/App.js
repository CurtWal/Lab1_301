import React, { Component } from 'react'
import Footer from './Components /Footer'
import Header from './Components /Header'
import Main from './Components /Main'

export default class App extends Component {
  
  render() {
    return (
      <div>
        <Header/>
        <Main/>
        <Footer/>
      </div>
    )
  }
}

