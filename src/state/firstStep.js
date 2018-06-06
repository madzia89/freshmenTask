const SAVE_NAME = 'firstStep/SAVE_NAME'
const SAVE_EMAIL = 'firstStep/SAVE_EMAIL'
const SAVE_PHONE_NUMBER = 'firstStep/PHONE_NUMBER'

export const saveName = (nameValue) => ({type: SAVE_NAME, nameValue})
export const saveEmail = (emailValue) => ({type: SAVE_EMAIL, emailValue})
export const savePhoneNumber = (phoneValue) => ({type: SAVE_PHONE_NUMBER, phoneValue})

const initialState = {
    names: '',
    email: '',
    phoneNumber: '',
}

export default (state = initialState, action) => {

    switch (action.type) {
        case SAVE_NAME:
            return {
                ...state,
                names: action.nameValue
            }
        case SAVE_EMAIL:
            return {
                ...state,
                email: action.emailValue
            }
        case SAVE_PHONE_NUMBER:
            return {
                ...state,
                phoneNumber: action.phoneValue
            }
        default:
            return state
    }
}