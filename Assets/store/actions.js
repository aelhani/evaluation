
import { Alert } from 'react-native'

export const mapStateToProps = (state) => {
    return {
        loggedin: state.loggedin
    }
}

export const mapDispatchToProps = (dispatch) => {
    return {
        LOGIN: (user, pass) => {
            if (pass === "password") {
                return dispatch({ type: 'LOGIN', value: { state: true, data: user } })
            } else {
                Alert.alert(
                    'Wrong information',
                    'Please try again',
                    [{ text: 'Dismiss' }],
                    { cancelable: false }
                )
            }
        },
        LOGOUT: () => {
            return dispatch({ type: 'LOGOUT', value: { state: false, data: null } })
        },
    }
}
