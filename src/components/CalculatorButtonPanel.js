import React from 'react'
import CalculatorButton from './CalculatorButton'
import { ButtonValues } from './../Utils/Constant'

const CalculatorButtonPanel = (props) => {
    return (
        <div className='cl-pannel-board'>
            {
                ButtonValues.map((btn, index) => <CalculatorButton key={index} {...btn} {...props} />)
            }
        </div>
    )
}

export default CalculatorButtonPanel
