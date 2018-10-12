import React, { Component } from 'react';
import Navbar from "./Navbar"
import Card from "./Card"

// different states the cards can be in
const CardState = {
  HIDING: 0,
  SHOWING: 1,
  MATCHING: 2
};

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

class MemoryGame extends Component {
  constructor(props){
    super(props);
    let cards = [
      {id: 0, cardState: CardState.HIDING, backgroundColor: "red"},
      {id: 1, cardState: CardState.HIDING, backgroundColor: "red"},
      {id: 2, cardState: CardState.HIDING, backgroundColor: "orange"},
      {id: 3, cardState: CardState.HIDING, backgroundColor: "orange"},
      {id: 4, cardState: CardState.HIDING, backgroundColor: "yellow"},
      {id: 5, cardState: CardState.HIDING, backgroundColor: "yellow"},
      {id: 6, cardState: CardState.HIDING, backgroundColor: "green"},
      {id: 7, cardState: CardState.HIDING, backgroundColor: "green"},
      {id: 8, cardState: CardState.HIDING, backgroundColor: "blue"},
      {id: 9, cardState: CardState.HIDING, backgroundColor: "blue"},
      {id: 10, cardState: CardState.HIDING, backgroundColor: "purple"},
      {id: 11, cardState: CardState.HIDING, backgroundColor: "purple"},
      {id: 12, cardState: CardState.HIDING, backgroundColor: "black"},
      {id: 13, cardState: CardState.HIDING, backgroundColor: "black"},
      {id: 14, cardState: CardState.HIDING, backgroundColor: "teal"},
      {id: 15, cardState: CardState.HIDING, backgroundColor: "teal"},
    ];
    cards = shuffle(cards);
    this.state = {
      cards,
      noClick: false
    };
    this.toggleCard = this.toggleCard.bind(this);
    this.handleNewGame = this.handleNewGame.bind(this);
  }

  toggleCard(id){
    // manage which cards to be hidden/showing
    const mapCardState = (cards, idToChange, newCardState) => {
      return cards.map(c => {
        if (idToChange.includes(c.id)){
          return {
            ...c,
            cardState: newCardState
          };
        }
        return c;
      });
    };  // end mapCardState
    
    const foundCard = this.state.cards.find(c => c.id === id);
    
    // do nothing on click is noClick is enabled
    if (this.state.noClick || foundCard.cardState !== CardState.HIDING){
      return;
    }
    
    let noClick = false;
    let cards = mapCardState(this.state.cards, [id], CardState.SHOWING);
    const showingCards = cards.filter(c => c.cardState === CardState.SHOWING );
    const ids = showingCards.map(c => c.id);
    
    // showing two matching cards...
    if (showingCards.length === 2 && 
        showingCards[0].backgroundColor === showingCards[1].backgroundColor){
      cards = mapCardState(cards, ids, CardState.MATCHING);
    } 
    // showing two cards, not matching...
    else if (showingCards.length === 2){
      let hidingCards = mapCardState(cards, ids, CardState.HIDING);
      // disallow clicking while showing colors selected
      noClick = true;
      this.setState({cards, noClick}, () => {
        setTimeout(() => {
          this.setState({cards: hidingCards, noClick: false});
        }, 1000);
      });
      
      return;
    }
    this.setState({cards, noClick});
  }
  
  handleNewGame(){
    let cards = this.state.cards.map(c => ({
      ...c,
      cardState: CardState.HIDING
    }));
    cards = shuffle(cards);
    this.setState({cards});
  }
  
  render() {
    const cards = this.state.cards.map( (c, index) => {
      return <Card 
        key={c.id} 
        showing={c.cardState !== CardState.HIDING}
        onClick={() => this.toggleCard(c.id)}
        backgroundColor = {c.backgroundColor}
      />
    })
    return (
      <div className="MemoryGame">
        <Navbar onNewGame={this.handleNewGame} />
        {cards}
      </div>
    );
  }
}

export default MemoryGame;