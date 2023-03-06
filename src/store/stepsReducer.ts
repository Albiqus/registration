
const SET_CURRENT_STEP = 'SET_CURRENT_STEP'
const ADD_VALID_STEP = 'ADD_VALID_STEP'
const DELETE_VALID_STEP = 'DELETE_VALID_STEP'
const SET_IS_SUBMIT_DATA = 'SET_IS_SUBMIT_DATA'

const startState = {
    validSteps: [],
    currentStep: 1,
    isSubmitData: false,
}

export const stepsReducer = (state = startState, action: any) => {
    switch (action.type) {
        case ADD_VALID_STEP: {
            const newValidSteps = state.validSteps.includes(action.payload.step) 
                ? [...state.validSteps]
                : [...state.validSteps, action.payload.step]
            return {
                ...state,
                validSteps: newValidSteps
            }
        }    
        case DELETE_VALID_STEP: {
            return {
                ...state,
                validSteps: [...state.validSteps.filter(el => el !== action.payload.step)]
            }
        }      
        case SET_CURRENT_STEP: {
            return {
                ...state,
                currentStep: action.payload.currentStep
            }
        }
        case SET_IS_SUBMIT_DATA: {
            return {
                ...state,
                isSubmitData: true
            }
        }
        default:
            return state;
    }
}