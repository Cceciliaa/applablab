import React, { Component } from 'react';

class Decre_btn extends React.Component {

    constructor() {
        super();
        this.state = { decre:-1 }
        this.decre = this.decre.bind(this);
    }

    decre = (e) => {
        e.preventDefault();
        this.props.handlerFromP(this.state.decre);
    }

    render() {
        return(
      
            <button type="submit" class="btn btn-primar" id='de' onClick={this.decre}>Decrease</button>
          
        )
    }
    

}

export default Decre_btn;