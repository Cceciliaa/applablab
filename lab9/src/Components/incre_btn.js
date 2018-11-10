import React, { Component } from 'react';

class Incre_btn extends React.Component {

    constructor() {
        super();
        this.state = { incre:1 }
        this.incre = this.incre.bind(this);
    }

    incre = (e) => {
        e.preventDefault();
        this.props.handlerFromP(this.state.incre);
    }

    render() {
        return(
            <form onClick={this.incre}>
            <button type="submit" class="btn btn-primar" id='ic'>Increase</button>
            </form>
        )
    }
}

export default Incre_btn;