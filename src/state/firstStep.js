const NAME = 'firstStep/NAME'

export const nameField = (nameValue) => ({type: NAME, nameValue})

export const checkNameField = () => (dispatch, getState) => {
    const temporaryNameState = getState().firstStep.temporaryNameField
    const temporaryNameFieldToArray = temporaryNameState.split('')

    if (temporaryNameState !== '') {

        if (temporaryNameFieldToArray.length > 2) {
            const nameInputElement = document.querySelector('input')

            nameInputElement.style.borderWidth = '5px'
            nameInputElement.style.borderColor = 'green'
            return nameInputElement

        }
        else {
            const nameInputElement = document.querySelector('input')

            nameInputElement.style.borderWidth = '5px'
            nameInputElement.style.borderColor = 'red'
            return nameInputElement
        }
    }
    else console.log('ee')
}

const initialState = {
    temporaryNameField: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case NAME :
            return {
                ...state,
                temporaryNameField: action.nameValue
            }
        default:
            return state
    }
}