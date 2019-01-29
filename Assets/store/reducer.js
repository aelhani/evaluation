
const initialState = {
    loggedin: {
        state: false,
        data: null
    },
}

const reducerLogin = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN": {
            const newState = { ...state }
            newState.loggedin = action.value
            return newState
        }
        case 'LOGOUT': {
            const newState = { ...state }
            newState.loggedin = action.value
            return newState
        }
        default: {
            const newState = { ...state }
            return newState
        }
    }
}

export default reducerLogin