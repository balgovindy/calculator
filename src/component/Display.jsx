import React from "react";
import PropTypes from "prop-types";
import '../style.css'

class Display extends React.Component {
  render() {
    return (
      <div className="calculator_display">
        <div className="calculator_display_content" dangerouslySetInnerHTML={{ __html: this.props.value }} />
      </div>
    );
  }
}

Display.propTypes = {
  value: PropTypes.string,
};

export default Display;
