export const format = (value) => {
    return Boolean(value)
        ? `${value[0]?.toUpperCase()}${value.substring(1)}`
        : value
}

