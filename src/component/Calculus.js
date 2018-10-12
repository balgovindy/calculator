const maxAllowDigit = 15;
const regExp = /([0-9]+([.][0-9]*)?|[.][0-9]+)/g;
const Calculus = (obj, name) => {
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

  if (name == "x") {
    name = "*";
  }

  if (name == 'C') {
    return {
      operation: null
    };
  }

  if (obj.operation && obj.operation.length > maxAllowDigit) {
    return
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



  if (obj.operation && name == "=") {
    if (isTotalDone(obj.operation)) {
      return {
        operation: null
      }
    }
    return {
      operation: (obj.operation + name + operation(obj.operation)).split('=').join('<br/>=')
    }
  }

  if (name == "()" || name == "+/-") {
    return;
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
export default Calculus;