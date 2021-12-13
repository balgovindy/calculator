export const Action = {
    CL_INPUT: 'CL_INPUT',
    DELETE: 'DELETE',
    CLEAR: 'CLEAR',
    EVALUATE: 'EVALUATE'
}

export const ButtonValues = [
    {
        text: "C",
        className: '',
        actionType: Action.CLEAR
    },
    {
        text: "/",
        className: '',
        actionType: Action.CL_INPUT
    },
    {
        text: "x",
        className: '',
        actionType: Action.CL_INPUT
    },
    {
        text: "Del",
        className: '',
        actionType: Action.DELETE
    },
    {
        text: "7",
        className: '',
        actionType: Action.CL_INPUT
    },
    {
        text: "8",
        className: '',
        actionType: Action.CL_INPUT
    },
    {
        text: "9",
        className: '',
        actionType: Action.CL_INPUT
    },
    {
        text: "−",
        className: '',
        actionType: Action.CL_INPUT
    },
    {
        text: "4",
        className: '',
        actionType: Action.CL_INPUT
    },
    {
        text: "5",
        className: '',
        actionType: Action.CL_INPUT
    },
    {
        text: "6",
        className: '',
        actionType: Action.CL_INPUT
    },
    {
        text: "+",
        className: '',
        actionType: Action.CL_INPUT
    },
    {
        text: "1",
        className: '',
        actionType: Action.CL_INPUT
    },
    {
        text: "2",
        className: '',
        actionType: Action.CL_INPUT
    },
    {
        text: "3",
        className: '',
        actionType: Action.CL_INPUT
    },
    {
        text: "=",
        className: 'cl-column-spn-2',
        actionType: Action.EVALUATE
    },
    {
        text: "0",
        className: '',
        actionType: Action.CL_INPUT
    },
    {
        text: ".",
        className: '',
        actionType: Action.CL_INPUT
    },
    {
        text: "00",
        className: '',
        actionType: Action.CL_INPUT
    },
]

export const initState = {
    clInput: '0',
    clResult: null
}


export const operations = ['+', '−', '/', 'x', '%']
