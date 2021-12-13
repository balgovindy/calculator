import React, { useReducer } from "react";
import CalculatorScreen from './components/CalculatorScreen'
import CalculatorButtonPanel from './components/CalculatorButtonPanel'
import { initState } from './Utils/Constant'
import reducer from './reducer'
import './App.css';

const App = () => {
    const [state, dispatch] = useReducer(reducer, initState);
    const { clInput, clResult } = state;
    return (
        <div className="main-wrapper">
            <div className="cl-wrapper">
                <CalculatorScreen equation={clInput} result={clResult} />
                <CalculatorButtonPanel dispatch={dispatch} />
            </div>
        </div>
    )
}

export default App;