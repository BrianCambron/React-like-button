import React, { Component } from 'react';
import './App.css';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      plural: 'Likes',
    }
      this.handleClick = this.handleClick.bind(this);
  }
handleClick(){
  let newCount = this.state.count + 1
  if (newCount === 1){
    this.setState({plural: "Like"})
  } else{
    this.setState({plural: 'Likes'})
  }
  this.setState({count: newCount})
}
render(){
  return(
  <div className="container">
  <button className="counterBtn"onClick={this.handleClick}>{this.state.count} {this.state.plural}</button>
  </div>
)
}
}

export default App;
