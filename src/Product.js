import React, { Component } from 'react';
import Card from './Card'

const cards = ['A','B','C','D','E','F']

class Product extends Component {

  constructor(props){
    super(props)
    this.state = {
      cards: cards
    }
  }

  addClicked = e => {
    console.log("Add was clicked !!")
    console.log(this.textInput.value)
    cards.push(this.textInput.value)
    this.setState({ card: cards})
  //     newArray.push("new value");   
  //     this.setState({arr:newArray})
  }


  render() {
    return (
        <div className="container" >
        <input class="input is" type="text" placeholder="Text input" ref={(input) => this.textInput = input}/>
        <a class="button is-primary" onClick={ e => this.addClicked(e)} >Add</a>
        <div class="columns" style={{ display: 'flex', flexFlow: 'row wrap' }} >        
            {cards.map(card => (
                <div class="column is-three-quarters-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd" >                
                <Card name={card}/>
                </div>
            ))}
            
        </div>
        </div>
    )
  }
}

export default Product;
