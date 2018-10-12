import React from 'react';
import PropTypes from "prop-types";
import Button from "./Button.jsx";
var calculator = [{
  "value": [
    ["C", "/", "x", "del"],
    ["7", "8", "9", "-"],
    ["4", "5", "6", "+"],
    ["1", "2", "3", "()"],
    ["0", ".", "+/-", "="]
  ],
  "color": [
    ["#4286f4", "#f48641", "#f48641", "#f4e841"],
    ["#ffffff", "#ffffff", "#ffffff", "#f48641"],
    ["#ffffff", "#ffffff", "#ffffff", "#f48641"],
    ["#ffffff", "#ffffff", "#ffffff", "#f48641"],
    ["#ffffff", "#ffffff", "#f48641", "#4158f4"]
  ]
}]
class PanelBoard extends React.Component {
  renderButton(i) {
    return calculator[0]['value'][i].map((value, j) => <Button key={`button_${i}_${j}`} value={value} color={calculator[0]['color'][i][j]} clickHandler={this.handleClick} />)
  }

  handleClick = buttonName => {
    this.props.clickHandler(buttonName);
  };

  render() {
    const PanelBoardArr = [];
    for (let i = 0; i < calculator[0]['value'].length; i++) {
      PanelBoardArr.push(
        <div key={`calculator_${i}`} id={`calculator_${i}`}>
          {this.renderButton(i)}
        </div>
      )
    }
    return (
      <div>
        {PanelBoardArr}
      </div>
    );
  }
}

PanelBoard.propTypes = {
  clickHandler: PropTypes.func,
};

export default PanelBoard;
