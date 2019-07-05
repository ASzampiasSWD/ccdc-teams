import React, { Component } from 'react';

class Home extends Component{
    render(){
        return(
        <p className="App-intro">
          Hello {this.props.name}
        </p>
        )
    }
} 

export default Home;