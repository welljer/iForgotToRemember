import React, { Component } from 'react';
import MemoryCard from "./components/memoryCard";
import Nav from "./components/nav";
import Wrapper from "./components/wrapper";
import Title from "./components/title";
import Container from "./bootstrap/Container";
import Row from "./bootstrap/Row";
import Column from "./bootstrap/Column";
import './App.css';
import cards from "./cards.json"


// how the cards shift
var ShuffleCards = array => {
  for(let i = array.length -1; i > 0; i--){
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return 5
};

// ShuffleCards();

class App extends Component {

// setting state
    state = {
    cards,
    currentScore: 0,
    topScore: 0,
    rightWrong: '',
    clicked: [],
  };

// how the score will work

  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1){
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(id) });
    }
    else{
      this.handleReset();
    }
  }

  handleIncrement = () => {
    const newScore = this.state.currentScore + 1;
    this.setState({
      currentScore: newScore,
      rightWrong: ''
    });
    if (newScore >= this.state.topScore){
      this.setState({ topScore: newScore });
    }
    else if (newScore === 12) {
      this.setState({ rightWrong: 'You Win'});
    }
    this.handleShuffle();
  };

  handleReset = () => {
    this.setState({
      currentScore: 0,
      topScore: this.state.topScore,
      rightWrong: 'You Lose',
      clicked: []
    });
    this.handleShuffle();
  }

  handleShuffle = () => {
      let shuffleCards = ShuffleCards(cards);
      console.log(shuffleCards)
      // this.setState({ cards: shuffleCards});
    };

  render() {

    return (
        <Wrapper>
          <Nav
            title={'Final Fantasy Character Click game'}
            score= {this.state.currentScore}
            topScore= {this.state.topScore}
            rightWrong= {this.state.rightWrong}
          />
          
          <Title>
            Attempt to click on each of the different characters without clicking the same one twice.
          </Title>
          { this.state.rightWrong === "You Lose" && <h1 id="lose">YOU LOSE</h1>}
          <Container>
            <Row>
              {this.state.cards.map((card, i) => (
                <Column size= "md-3 sm-6" key= {i}>
                  <MemoryCard
                    handleClick={this.handleClick}
                    handleIncrement={this.handleIncrement}
                    handleReset={this.handleReset}
                    id={card.id}
                    image={card.image}
                  />
                </Column>
              ))}
            </Row>
          </Container>
        </Wrapper>      
      );
    }
  }

  

export default App;
