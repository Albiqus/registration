import { MAX_UPPER_CASE_SYMBOLS } from "../data/data"

export const isValidUpperCaseCount = (value) => {
    const upperCaseSymbols = value.split('').filter(el => el === el.toUpperCase())
    if (upperCaseSymbols.length > MAX_UPPER_CASE_SYMBOLS) {
        return false
    }
    return true
}