import React, { Component } from 'react';
import './App.css';

import Incre_btn from './Components/incre_btn';
import Decre_btn from './Components/decre_btn';

class App extends Component {
  constructor() {
    super();
    this.state = { counter:0 }
    this.handlerFromP = this.handlerFromP.bind(this);
  }

  handlerFromP = (data) => {
    this.setState({ counter: this.state.counter + data });
  }

  render() {
    return (
      <div>
        <center>
        <h1 id='title'>My counter: {this.state.counter}</h1>
        <div class="jumbotron">
        <div>
          <Incre_btn counter={this.state.counter} handlerFromP={this.handlerFromP}/>
        </div>
        <br />
        <div>
          <Decre_btn counter={this.state.counter} handlerFromP={this.handlerFromP}/>
        </div>
        </div>
        </center>
      </div>
    );
  }
}

export default App;
