import { FIRST_NAME, LAST_NAME } from "../data/data"
import { isFilled } from "./isFilled"
import { isValidLength } from "./isValidLength"
import { isValidSymbols } from "./isValidSymbols"
import { isValidUpperCaseCount } from "./isValidUpperCaseCount"
import { isСapitalized } from "./isСapitalized"


export const isValid = (value, type) => {
    switch (type) {
        case LAST_NAME:
        case FIRST_NAME: {
            if (!isFilled(value)) {
                return false
            }
            if (!isValidLength(value, type)) {
                return false
            }
            if (!isValidSymbols(value, /^[a-zа-яА-ЯЁё]+$/i)) {
                return false
            }
            if (!isСapitalized(value)) {
                return false
            }
            if (!isValidUpperCaseCount(value)) {
                return false
            }
            return true
        }
    }
}