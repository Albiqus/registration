export const checkPasswordNumbers = (value) => {
    const numbers = value.split('').filter(el => !isNaN(+el))
    if (numbers.length === 0) return false
    return true
}