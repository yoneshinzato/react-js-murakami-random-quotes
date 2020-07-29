import React, { Component } from 'react';

import './estilo.css'


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      phrase: '^^'
    }

    this.phrases = ['If you only read the books that everyone else is reading, you can only think what everyone else is thinking.', 'Memories warm you up from the inside. But they also tear you apart.', 'I think you still love me, but we can’t escape the fact that I’m not enough for you. I knew this was going to happen. So I’m not blaming you for falling in love with another woman. I’m not angry, either. I should be, but I’m not. I just feel pain. A lot of pain. I thought I could imagine how much this would hurt, but I was wrong.', 'Pain is inevitable. Suffering is optional.', 'If you remember me, then I don\'t care if everyone else forgets.', 'Whatever it is you\'re seeking won\'t come in the form you\'re expecting.', 'What happens when people open their hearts? They get better.', 'Why do people have to be this lonely? What\'s the point of it all? Millions of people in this world, all of them yearning, looking to others to satisfy them, yet isolating themselves. Why? Was the earth put here just to nourish human loneliness?', 'Nobody likes being alone that much. I don\'t go out of my way to make friends, that\'s all. It just leads to disappointment.', 'No matter how much suffering you went through, you never wanted to let go of those memories.', 'Look at the rain long enough, with no thoughts in your head, and you gradually feel your body falling loose, shaking free of the world of reality. Rain has the power to hypnotize.', 'What I think is this: You should give up looking for lost cats and start searching for the other half of your shadow.', 'She was the kind of person who took care of things by herself. She’d never ask anybody for advice or help. It wasn’t a matter of pride, I think. She just did what seemed natural to her.', 'Remove everything pointless from an imperfect life and it’d lose even its imperfection.' ]
  }

  clickBtn = ( ) => {
    let state = this.state
    let randomNumber = Math.floor(Math.random() * this.phrases.length)
    state.phrase = '"' + this.phrases[randomNumber] + '"'
    this.setState(state)
  }


  render(){
    return (
      <div className="container">
       <img className="img" src={require('./assets/murakami.jpeg')} />
       <Botao nome="Click for Quote" actionBtn={this.clickBtn} />
       <h2>Murakami Quote:</h2>
        <h4>{this.state.phrase}</h4>
       
      </div>
    );
  }
}

class Botao extends Component {
  render() {
    return(
      <div>
        <button onClick={this.props.actionBtn}>{this.props.nome}</button>
      </div>
    )
  }
}

export default App;
