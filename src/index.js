import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      count: [],
    }
  }

  render() {
    return (
      <div>
        <button onClick={() => this.setState({ count: this.state.count.concat(<button> new </button>) })}> Add company </button>
           {this.state.count}
      </div>
    );
  }

}

ReactDOM.render(
  <Main />,
  document.getElementById('root')
);