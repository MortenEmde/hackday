import React, { Component } from 'react';
import './style.css';

class Reward extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      apiResponse: '',
      spinner: 'Loading...'
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
      this.state.apiResponse !== '' ?
      <h4 className='reward'>{this.state.apiResponse}</h4>:
      <div>{this.state.spinner}</div>
    );
  }
}

// class Reward extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       spinner: 'Loading...',
//       data: null
//     };
//   }

//   componentDidMount(){
//     this.fetchData();
//   }

//   fetchData = () => {
//     fetch('http://localhost:8000/joke')
//       .then(data => {
//         console.log(data);
//         return data
//     })
//   }

//   render() {
//     return (
//     <div>
//       <h5>Joke here</h5>
//       <h5>{this.state.data}</h5>
//     </div>
//     )
//   }
// }

export default Reward;
