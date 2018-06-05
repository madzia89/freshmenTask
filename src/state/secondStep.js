const SAVE_CITY = 'firstStep/SAVE_CITY'
const SAVE_STREET = 'firstStep/SAVE_STREET'
const SAVE_ZIP_CODE = 'firstStep/SAVE_ZIP_CODE'

export const saveCity = (cityValue) => ({type: SAVE_CITY, cityValue})
export const saveStreet = (streetValue) => ({type: SAVE_STREET, streetValue})
export const saveZipCode = (zipCodeValue) => ({type: SAVE_ZIP_CODE, zipCodeValue})

const initialState = {
    city: '',
    street: '',
    zipCode: ''
}

export default (state = initialState, action) => {

    switch (action.type) {
        case SAVE_CITY:
            return {
                ...state,
                city: action.cityValue
            }
        case SAVE_STREET:
            return {
                ...state,
                street: action.streetValue
            }
        case SAVE_ZIP_CODE:
            return {
                ...state,
                zipCode: action.zipCodeValue
            }
        default:
            return state
    }
}