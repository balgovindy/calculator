import React from 'react'

const CalculatorButton = (props) => {
    const { text, className, dispatch, actionType, displayText } = props;
    return (
        <button className={className} onClick={() => dispatch({ type: actionType, payload: { text } })}>{text}</button>
    )
}

export default CalculatorButton
