import _ from 'lodash';

const INTEGER_FORMATTER = new Intl.NumberFormat("en-us", {
    maximumFractionDigits: 0
})

export const NUMBER_FORMATTER = (operand) => {
    if (_.isEmpty(operand)) return;

    const [integer, decimal] = operand.split`.`;

    const formattedInteger = INTEGER_FORMATTER.format(integer);

    return _.isEmpty(decimal) ? formattedInteger : `${formattedInteger}.${decimal}`
}

export const EQUATION_FORMATTER = (equation) => {
    return equation
}