const NAME = 'firstStep/NAME'

export const nameField = (nameValue) => ({type: NAME, nameValue})

const initialState = {
    firstStep: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case NAME :
            return {
                ...state,
                firstStep: action.nameValue
            }
        default:
            return state
    }
}