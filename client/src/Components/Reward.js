import React, { Component } from 'react';
import './style.css';

class Reward extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      apiResponse: '',
    };
  }

  componentDidMount() {
    this.fetchReward();
  }

  fetchReward() {
    fetch('http://localhost:8000/joke')
        .then(res => res.text())
        .then(res => this.setState({ apiResponse: res }));
  }

  render () {
    return (
      this.props.playerScore >= 3 ?
      <h4 className='reward'>{this.state.apiResponse}</h4>:
      <h4 className='noReward'>You Lost! No reward this time.</h4>
    );
  }
}

export default Reward;
