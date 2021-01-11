import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class HelloWorld extends React.Component {
  render() {
    return (
      <div>
        I can show you the world {this.props.name}
      </div>
    );
  }
}

ReactDOM.render(
  <HelloWorld name = "Vineeth" />,
  document.getElementById('root')
);