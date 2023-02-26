
const SET_CURRENT_STEP = 'SET_CURRENT_STEP'
const SET_FIRST_NAME = 'SET_FIRST_NAME'
const SET_LAST_NAME = 'SET_LAST_NAME'
const SET_GENDER = 'SET_GENDER'
const SET_BIRTHDAY = 'SET_BIRTHDAY'
const SET_EMAIL = 'SET_EMAIL'
const SET_PHONE = 'SET_PHONE'
const SET_COUNTRY = 'SET_COUNTRY'
const SET_CITY = 'SET_CITY'
const SET_WEBSITE = 'SET_WEBSITE'
const SET_PASSWORD = 'SET_PASSWORD'
const SET_SECOND_PASSWORD = 'SET_SECOND_PASSWORD'
const SET_IS_VALID = 'SET_IS_VALID'

const startState = {
    isValid: false,
    currentStep: 1,
    firstName: '',
    lastName: '',
    gender: 'male',
    birthday: '',
    email: '',
    phone: '',
    country: '',
    city: '',
    website: '',
    password: '',
    secondPassword: ''
}

export const mainReducer = (state = startState, action: any) => {
    switch (action.type) {
        case SET_IS_VALID: {
            return {
                ...state,
                isValid: action.payload.status
            }
        }
        case SET_CURRENT_STEP: {
            return {
                ...state,
                currentStep: action.payload.currentStep
            }
        }
        case SET_FIRST_NAME: {
            return {
                ...state,
                firstName: action.payload.firstName
            }
        }
        case SET_LAST_NAME: {
            return {
                ...state,
                lastName: action.payload.lastName
            }
        }
        case SET_GENDER: {
            return {
                ...state,
                gender: action.payload.gender
            }
        }
        case SET_BIRTHDAY: {
            return {
                ...state,
                birthday: action.payload.birthday
            }
        }
        case SET_EMAIL: {
            return {
                ...state,
                email: action.payload.email
            }
        }
        case SET_PHONE: {
            return {
                ...state,
                phone: action.payload.phone
            }
        }
        case SET_COUNTRY: {
            return {
                ...state,
                country: action.payload.country
            }
        }
        case SET_CITY: {
            return {
                ...state,
                city: action.payload.city
            }
        }
        case SET_WEBSITE: {
            return {
                ...state,
                website: action.payload.website
            }
        }
        case SET_PASSWORD: {
            return {
                ...state,
                password: action.payload.password
            }
        }
        case SET_SECOND_PASSWORD: {
            return {
                ...state,
                secondPassword: action.payload.secondPassword
            }
        }
        default:
            return state;
    }
}