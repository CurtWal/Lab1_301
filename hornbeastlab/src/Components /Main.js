import React, { Component } from 'react'
import Goat from './Images/Mountain-Goat.jpg'
import Rhino from './Images/Rhino.jpg'
import HornBeast from './Hornbeast.json'

export default class Main extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.name}</h2>
                <img src={Goat} alt='Goat' title='Goat'></img>
                <p>{this.props.paragraph}</p>

                <h2>{this.props.name2}</h2>
                <img src={Rhino} alt='Rhino' title='Rhino'></img>
                <p>{this.props.paragraph2}</p>

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
