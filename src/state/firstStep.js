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
    const ifBlankSpaces = temporaryNameFieldToArray.filter(e => e === ' ')
    const nameInputElement = document.getElementById('nameInput')
    const hyphenIsNotLast = (temporaryNameFieldToArray[temporaryNameFieldToArray.length - 1] !== '-')


    if (ifBlankSpaces.length <= 0) {
        if (((temporaryNameFieldToArray.length > 2) &&
            temporaryNameState.search(/[^a-zA-Z-]+/) === -1) &&
            hyphenIsNotLast) {
            nameInputElement.style.borderColor = 'green'
            return nameInputElement

        }
        else {
            nameInputElement.style.borderColor = 'red'
            return nameInputElement
        }
    }
    else {
        nameInputElement.style.borderColor = 'red'
        return nameInputElement
    }
}
export const checkLastNameField = () => (dispatch, getState) => {
    const temporaryLastNameState = getState().firstStep.temporaryLastNameField
    const temporaryLastNameFieldToArray = temporaryLastNameState.split('')
    const ifBlankSpaces = temporaryLastNameFieldToArray.filter(e => e === ' ')
    const lastNameInputElement = document.getElementById('lastNameInput')
    const hyphenIsNotLast = (temporaryLastNameFieldToArray[temporaryLastNameFieldToArray.length - 1] !== '-')


    if (ifBlankSpaces.length <= 0) {

        if (((temporaryLastNameFieldToArray.length > 2) &&
            (temporaryLastNameState.search(/[^a-zA-Z-]+/) === -1)) &&
            (hyphenIsNotLast)) {
            lastNameInputElement.style.borderColor = 'green'
            return lastNameInputElement

        }
        else {
            lastNameInputElement.style.borderColor = 'red'
            return lastNameInputElement
        }
    }
    else {
        lastNameInputElement.style.borderColor = 'red'
        return lastNameInputElement
    }
}
export const checkDateOfBirth = () => (dispatch, getState) => {
    const temporaryDateOfBirthState = getState().firstStep.temporaryDateOfBirthField
    const dateOfBirthInputElement = document.getElementById('dateOfBirthInput')

    if (temporaryDateOfBirthState !== '') {
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
    else {
        dateOfBirthInputElement.style.borderColor = 'red'
    }
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