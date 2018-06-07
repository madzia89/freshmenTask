const SAVE_NAME = 'firstStep/SAVE_NAME'
const SAVE_EMAIL = 'firstStep/SAVE_EMAIL'
const SAVE_PHONE_NUMBER = 'firstStep/PHONE_NUMBER'
const SAVE_BIRTH_DAY = 'firstStep/SAVE_BIRTH_DAY'

export const saveName = (nameValue) => ({type: SAVE_NAME, nameValue})
export const saveEmail = (emailValue) => ({type: SAVE_EMAIL, emailValue})
export const savePhoneNumber = (phoneValue) => ({type: SAVE_PHONE_NUMBER, phoneValue})
export const saveBDay = (birthDayValue) => ({type: SAVE_BIRTH_DAY, birthDayValue})

const initialState = {
    names: '',
    email: '',
    phoneNumber: '',
    bDay: '',
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
        case SAVE_BIRTH_DAY:
            return {
                ...state,
                bDay: action.birthDayValue
            }
        default:
            return state
    }
}