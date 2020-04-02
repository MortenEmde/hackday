import React from 'react';
import './style.css';

// function Reward() {
//   return (
//     <div>
//       <h4>How's it going?</h4>
//     </div>
//   );
// }

class Reward extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      spinner: 'Loading...',
      data: null
    };
  }

  componentDidMount(){
    this.fetchData();
  }

  fetchData = () => {
    fetch('http://localhost:8000/joke')
      .then(data => {
        console.log(data);
        return data
    })
  }

  render() {
    return (
    <div>
      <h5>Joke here</h5>
      <h5>{this.state.data}</h5>
    </div>
    )
  }
}

export default Reward;
