import React from 'react'
import { EQUATION_FORMATTER, NUMBER_FORMATTER } from './../Utils/Formatter';

const CalculatorScreen = ({ equation, result }) => {
    return (
        <div className='cl-screen'>
            <div className='cl-input'>{EQUATION_FORMATTER(equation)}</div>
            <div className='cl-result'>{NUMBER_FORMATTER(result)}</div>
        </div>
    )
}

export default CalculatorScreen
