import { getRange } from "./getRange"

export const isValidLength = (value, type) => {
    const [min, max] = getRange(type)
    if (value.length < min || value.length > max) {
        return false
    }
    return true
}