export const checkPasswordSpecialSymbols = (value, regexp) => {
    const specialSymbols = value.split('').filter(el => !regexp.test(el))
    if (specialSymbols.length < 1) return false
    return true
}