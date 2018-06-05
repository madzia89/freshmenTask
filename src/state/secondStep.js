const SAVE_CITY = 'secondStep/SAVE_CITY'
const SAVE_STREET = 'secondStep/SAVE_STREET'
const SAVE_HOME_NUMBER = 'secondStep/SAVE_HOME_NUMBER'
const SAVE_ZIP_CODE = 'secondStep/SAVE_ZIP_CODE'

export const saveCity = (cityValue) => ({type: SAVE_CITY, cityValue})
export const saveStreet = (streetValue) => ({type: SAVE_STREET, streetValue})
export const saveHomeNumber = (homeNumberValue) => ({type: SAVE_HOME_NUMBER, homeNumberValue})
export const saveZipCode = (zipCodeValue) => ({type: SAVE_ZIP_CODE, zipCodeValue})

const initialState = {
    city: '',
    street: '',
    homeNumber: '',
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
        case SAVE_HOME_NUMBER:
            return {
                ...state,
                homeNumber: action.homeNumberValue
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