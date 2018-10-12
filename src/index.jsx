import React from 'react';
import ReactDOM from 'react-dom';
import Display from "./component/Display.jsx"
import PanelBoard from "./component/PanelBoard.jsx"
import Calculus from "./component/Calculus"
import './style.css'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      operation: null
    }
  }

  handleClick = buttonName => {
    this.setState(Calculus(this.state, buttonName));
  };

  render() {
    return (
      <div className="calculatorApp">
        <Display value={this.state.operation || "0"} />
        <PanelBoard clickHandler={this.handleClick} />
      </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('app'))