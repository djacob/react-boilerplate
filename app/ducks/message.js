const initialState = 'Hello World';
export default function message(state = initialState, action) {
    switch (action.type) {
        case 'SET_MESSAGE':
            return action.message;
        default:
            return state;
    }
}

export function setMessage(message) {
    return {
        type: 'SET_MESSAGE',
        message
    };
}