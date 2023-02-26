
const SET_CURRENT_STEP = 'SET_CURRENT_STEP'


const startState = {
    currentStep: 1,
}

export const mainReducer = (state = startState, action: any) => {
    switch (action.type) {
        case SET_CURRENT_STEP: {
            return {
                ...state,
                currentStep: action.payload.currentStep
            }
        }
        default:
            return state;
    }
}