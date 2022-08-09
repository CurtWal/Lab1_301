import React, { Component } from 'react'
import Goat from './Images/Mountain-Goat.jpg'
import Rhino from './Images/Rhino.jpg'
import HornBeast from './Hornbeast.json'

export default class Main extends Component {
    render() {
        return (
            <div>
                <h2>Mountain Goat</h2>
                <img src={Goat} alt='Goat' title='Goat'></img>
                <p>The Mountain Goat, One of the best climbers in the world.
                    <br></br>Do not Stand infront of them on a mountain or you just might
                    go flying off.</p>

                <h2>Rhino</h2>
                <img src={Rhino} alt='Rhino' title='Rhino'></img>
                <p>The Rhino or also known as The Rhinoceros, are speed machines!
                    <br></br>Capable of running upwards of 30-40 miles per hour.</p>

                {HornBeast.hornBeast.map((item, i) => (
                    <div>
                        <h2 key={i}>{item.title}</h2>
                        <img src={item.image_url} alt={item.keyword} title={item.keyword} width='250px'></img>
                        <p>{item.description} <br></br>Amount of Horns: {item.horns}</p>
                    </div>
                ))}
            </div>
        )
    }
}
