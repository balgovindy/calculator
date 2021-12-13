import { Action, operations, initState } from './../Utils/Constant'
import _ from 'lodash';

const reducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case Action.CLEAR:
            return {
                ...state,
                clInput: initState.clInput,
                clResult: initState.clResult
            };
        case Action.CL_INPUT:
            return {
                ...state,
                clResult: initState.clResult,
                clInput: AddInputDigit(state.clInput, payload.text)
            };
        case Action.DELETE:
            return {
                ...state,
                clResult: initState.clResult,
                clInput: DeleteInputDigit(state.clInput)
            }
        case Action.EVALUATE:
            return {
                ...state,
                clResult: Evaluate(state.clInput)
            }
    }
    return state;
}

export default reducer;

function AddInputDigit(prev, inputPayload) {
    const isOperationStarted = operations.indexOf(prev.slice(prev.length - 1)) !== -1;
    const isOperationInput = operations.indexOf(inputPayload) !== -1;

    if ((isOperationInput || inputPayload === '00') && prev === '0') {
        return prev;
    }
    if (isOperationStarted && isOperationInput) {
        return prev;
    }

    if (isOperationStarted && inputPayload === '.') {
        inputPayload = '0'.concat(inputPayload)
    }

    return prev !== '0' || inputPayload === '.' ? prev.concat(inputPayload) : inputPayload;
}

function DeleteInputDigit(input) {
    if (input === '0' || input.length === 1) return '0';
    return input.slice(0, input.length - 1)
}

function tokenize(s) {
    const r = [];
    let token = '';
    for (const character of s) {
        if (operations.indexOf(character) > -1) {
            if (token === '' && character === '-') {
                token = '-';
            } else {
                r.push(parseFloat(token), character);
                token = '';
            }
        } else {
            token += character;
        }
    }
    if (token !== '') {
        r.push(parseFloat(token));
    }
    return r;
}

function Evaluate(tokens) {
    tokens = tokenize(tokens);
    // --- Perform a calculation expressed as an array of operators and numbers
    const operatorPrecedence = [
    { 'x': (a, b) => a * b, '/': (a, b) => a / b },
    { '+': (a, b) => a + b, '−': (a, b) => a - b }];
    let operator;
    for (const operators of operatorPrecedence) {
        const newTokens = [];
        for (const token of tokens) {
            if (token in operators) {
                operator = operators[token];
            } else if (operator) {
                newTokens[newTokens.length - 1] =
                    operator(newTokens[newTokens.length - 1], token);
                operator = null;
            } else {
                newTokens.push(token);
            }
        }
        tokens = newTokens;
    }
    if (tokens.length > 1) {
        console.log('Error: unable to resolve calculation');
        return tokens;
    } else {
        return tokens[0].toString();
    }
}