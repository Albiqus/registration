import { CITY, COUNTRY, EMAIL, FIRST_NAME, LAST_NAME, PASSWORD, PHONE } from "../data/data"
import { checkPasswordNumbers } from "./checkPasswordNumbers"
import { checkPasswordSpecialSymbols } from "./checkPasswordSpecialSymbols"
import { checkPasswordUpperCaseSymbols } from "./checkPasswordUpperCaseSymbols"
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
        case EMAIL: {
            if (!isFilled(value)) {
                return false
            }
            return true
        }
        case PHONE: {
            const phoneValue = value.split('').filter(el => !isNaN(+el) && el !== ' ')
            if (!isFilled(value)) {
                return false
            }
            if (!isValidLength(phoneValue, type)) {
                return false
            }
            return true
        }
        case PASSWORD: {
            if (!isValidLength(value, type)) {
                return false
            }
            if (!checkPasswordUpperCaseSymbols(value)) {
                return false
            }
            if (!checkPasswordNumbers(value)) {
                return false
            }
            if (!checkPasswordSpecialSymbols(value, /^[a-zа-яА-ЯЁё0-9]+$/i)) {
                return false
            }
            return true
        }
        case COUNTRY: {
            if (value.length === 0) {
                return true
            }
            if (!isValidSymbols(value, /^[a-zа-яА-ЯЁё]+$/i)) {
                return false
            }
            if (!isValidLength(value, type)) {
                return false
            }
            if (!isValidUpperCaseCount(value)) {
                return false
            }
            return true
        }
        case CITY: {
            if (value.length === 0) {
                return true
            }
            if (!isValidSymbols(value, /^[a-zа-яА-ЯЁё]+$/i)) {
                return false
            }
            if (!isValidLength(value, type)) {
                return false
            }
            if (!isValidUpperCaseCount(value)) {
                return false
            }
            return true
        }
    }
}