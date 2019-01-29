
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
                    'Informations incorrectes',
                    'Veuillez vérifier vos informations et réessayer',
                    [{ text: 'Fermer' }],
                    { cancelable: false }
                )
            }
        },
        LOGOUT: () => {
            return dispatch({ type: 'LOGOUT', value: { state: false, data: null } })
        },
    }
}
