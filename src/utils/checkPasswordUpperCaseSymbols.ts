import { MIN_PASSWORD_UPPER_CASE_SYMBOLS } from "../data/data"

export const checkPasswordUpperCaseSymbols = (value) => {
    const upperCaseSymbols = value.split('').filter(el => el === el.toUpperCase() && /^[a-zа-яА-ЯЁё]+$/i.test(el))
    if (upperCaseSymbols.length < MIN_PASSWORD_UPPER_CASE_SYMBOLS) {
        return false
    }
    return true
}