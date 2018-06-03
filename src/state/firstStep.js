import {nowDate} from '../Components/utils'

const NAME = 'firstStep/NAME'
const LAST_NAME = 'firstStep/LAST_NAME'
const DATE_OF_BIRTH = 'firstStep/DATE_OF_BIRTH'

export const nameField = (nameValue) => ({type: NAME, nameValue})
export const lastNameField = (lastNameValue) => ({type: LAST_NAME, lastNameValue})
export const dateOfBirthField = (dateOfBirthValue) => ({type: DATE_OF_BIRTH, dateOfBirthValue})

export const checkNameField = () => (dispatch, getState) => {
    const temporaryNameState = getState().firstStep.temporaryNameField
    const temporaryNameFieldToArray = temporaryNameState.split('')

    if (temporaryNameState !== '') {
        const nameInputElement = document.getElementById('nameInput')
        nameInputElement.style.borderWidth = '5px'

        if (temporaryNameFieldToArray.length > 2) {
            nameInputElement.style.borderColor = 'green'
            return nameInputElement

        }
        else {
            nameInputElement.style.borderColor = 'red'
            return nameInputElement
        }
    }
    else console.log('ee')
}
export const checkLastNameField = () => (dispatch, getState) => {
    const temporaryLastNameState = getState().firstStep.temporaryLastNameField
    const temporaryLastNameFieldToArray = temporaryLastNameState.split('')

    if (temporaryLastNameState !== '') {
        const lastNameInputElement = document.getElementById('lastNameInput')
        lastNameInputElement.style.borderWidth = '5px'

        if (temporaryLastNameFieldToArray.length > 2) {
            lastNameInputElement.style.borderColor = 'green'
            return lastNameInputElement

        }
        else {
            lastNameInputElement.style.borderColor = 'red'
            return lastNameInputElement
        }
    }
    else console.log('ee')
}
export const checkDateOfBirth = () => (dispatch, getState) => {
    const temporaryDateOfBirthState = getState().firstStep.temporaryDateOfBirthField

    if (temporaryDateOfBirthState !== '') {
        const dateOfBirthInputElement = document.getElementById('dateOfBirthInput')
        dateOfBirthInputElement.style.borderWidth = '5px'

        if (temporaryDateOfBirthState <= nowDate) {
            dateOfBirthInputElement.style.borderColor = 'green'
            return dateOfBirthInputElement

        }
        else {
            dateOfBirthInputElement.style.borderColor = 'red'
            return dateOfBirthInputElement && console.log('you cannot choose a date in the future')
        }
    }
    else console.log('ee')
}

const initialState = {
    temporaryNameField: '',
    temporaryLastNameField: '',
    temporaryDateOfBirthField: '',
}

export default (state = initialState, action) => {
    switch (action.type) {
        case NAME :
            return {
                ...state,
                temporaryNameField: action.nameValue
            }
        case LAST_NAME :
            return {
                ...state,
                temporaryLastNameField: action.lastNameValue
            }
        case DATE_OF_BIRTH :
            return {
                ...state,
                temporaryDateOfBirthField: action.dateOfBirthValue
            }
        default:
            return state
    }
}