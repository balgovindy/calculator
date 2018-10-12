import React from 'react';
import PropTypes from 'prop-types';
import '../style.css'

class Button extends React.Component {
  handleClick = () => {
    this.props.clickHandler(this.props.value);
  };

  render() {
    return (
      <button className="calculatorButton" onClick={this.handleClick} style={{ background: this.props.color }}>{this.props.value}</button>
    );
  }
}

Button.PropTypes = {
  value: PropTypes.string,
  clickHandler: PropTypes.func,
  color: PropTypes.string
}

export default Button;