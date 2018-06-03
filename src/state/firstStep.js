import {nowDate, searchPolishSignsAndHyphen, ifBlankSpaces, hyphenIsNotLast} from '../Components/utils'

const NAME = 'firstStep/NAME'
const LAST_NAME = 'firstStep/LAST_NAME'
const DATE_OF_BIRTH = 'firstStep/DATE_OF_BIRTH'
const SUBMIT_FIRST_STEP = 'firstStep/SUBMIT_FIRST_STEP'

export const nameField = (nameValue) => ({type: NAME, nameValue})
export const lastNameField = (lastNameValue) => ({type: LAST_NAME, lastNameValue})
export const dateOfBirthField = (dateOfBirthValue) => ({type: DATE_OF_BIRTH, dateOfBirthValue})
export const submitFirstStep = () => ({type: SUBMIT_FIRST_STEP})

export const checkNameField = () => (dispatch, getState) => {
    const temporaryNameState = getState().firstStep.temporaryNameField
    const temporaryNameFieldToArray = temporaryNameState.split('')
    const nameBlankSpaces = ifBlankSpaces(temporaryNameFieldToArray)
    const nameInputElement = document.getElementById('nameInput')


    if (nameBlankSpaces.length <= 0) {
        if (temporaryNameFieldToArray.length > 2 &&
            searchPolishSignsAndHyphen(temporaryNameState) &&
            hyphenIsNotLast(temporaryNameFieldToArray)) {
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
    const lastNameBlankSpaces = ifBlankSpaces(temporaryLastNameFieldToArray)
    const lastNameInputElement = document.getElementById('lastNameInput')


    if (lastNameBlankSpaces.length <= 0) {

        if (temporaryLastNameFieldToArray.length > 2 &&
            searchPolishSignsAndHyphen(temporaryLastNameState) &&
            hyphenIsNotLast(temporaryLastNameFieldToArray)) {
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
    actualState: {}
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
        case SUBMIT_FIRST_STEP :
            return {
                ...state,
                name: state.temporaryNameField,
                lastName: state.temporaryLastNameField,
                dateOfBirth: state.temporaryDateOfBirthField,
            }
        default:
            return state
    }
}