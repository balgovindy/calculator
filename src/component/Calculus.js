const maxAllowDigit = 12;
const regExp = /([0-9]+([.][0-9]*)?|[.][0-9]+)/g;
const Calculus = (obj, name) => {
  //if request for square of number
  if (typeof name === 'object') {
    name = 'square'
  }

  //if no operation expression  exist and user try to get square ,square root and try to evaluate
  if (!obj.operation && name == ('square' || '=' || '√')) {
    return;
  }

  // request for delete expression
  if (name == "del") {
    if (isTotalDone(obj.operation)) {
      return {
        operation: null
      }
    }
    if (!obj.operation) {
      return {
        operation: null
      }
    }
    return {
      operation: obj.operation.substring(0, obj.operation.length - 1)
    }
  }

  // if multiply request convert into * to evaluate the expression
  if (name == "x") {
    name = "*";
  }

  // if there is call of reset
  if (name == 'C') {
    return {
      operation: null
    };
  }


  if (obj.operation && name !== ('square' || '=' || '√') && obj.operation.length > maxAllowDigit) {
    return;
  }


  if (!obj.operation && name == "0") {
    return {
      operation: "0"
    };
  } else if (obj.operation && name == "0") {
    if (dotOperation(obj.operation)) {
      return
    }
  }



  if (obj.operation) {
    if (name === '=') {
      if (isTotalDone(obj.operation)) {
        return {
          operation: null
        }
      }
      return {
        operation: (obj.operation + name + operation(obj.operation)).split('=').join('<br/>=')
      }
    }
    if (name == 'square') {
      return {
        operation: (obj.operation + name + exponetialOperation(obj.operation)).split('square').join('<br/>=')
      }
    }

    if (name == '√') {
      return {
        operation: (obj.operation + name + exponetialOperation(obj.operation, 0.5)).split('√').join('<br/>=')
      }
    }
  }

  if (name == ".") {
    if (obj.operation) {
      if (divisionOperation(obj.operation)) {
        return {};
      } else {
        return {
          operation: obj.operation + name
        };
      }
    }
    return {
      operation: "0."
    };
  }

  if (obj.operation) {
    if (isTotalDone(obj.operation)) {
      obj.operation = ""
    }
    return {
      operation: obj.operation + name
    };
  }

  return {
    operation: name
  }
}

const isTotalDone = oprationString => /\=/.test(oprationString);
const operation = oprStr => {
  try {
    let _result = eval(oprStr);
    if (/\./.test(_result)) {
      _result = Number(_result.toFixed(maxAllowDigit));
    }
    return _result;
  } catch (error) {
    return "Error";
  }
}

const divisionOperation = oprationString => {
  oprationString = oprationString.match(regExp);
  return oprationString[oprationString.length - 1].includes('.')
}

const dotOperation = oprationString => {
  oprationString = oprationString.match(regExp);
  if (!oprationString) return;
  if (oprationString[oprationString.length - 1].includes('.')) {
    return;
  }
  return !eval(oprationString[oprationString.length - 1]);
}

const exponetialOperation = (oprstr, pow = 2) => {
  try {
    let _result = eval(oprstr) ** pow;
    if (/\./.test(_result)) {
      _result = Number(_result.toFixed(maxAllowDigit));
    }
    return _result;
  } catch (error) {
    return "Error";
  }
}
export default Calculus;