import { legacy_createStore, combineReducers } from "redux";
import { inputDataReducer } from "./inputDataReducer";
import { stepsReducer } from "./stepsReducer";



let reducers = combineReducers({
    inputData: inputDataReducer,
    steps: stepsReducer,
})

let store = legacy_createStore(reducers)

export { store }
export type RootState = ReturnType < typeof store.getState >