import { CITY, COUNTRY, EMAIL, FIRST_NAME, LAST_NAME, WEBSITE } from "../data/data"

export const format = (value, type) => {
    switch (type) {
        case FIRST_NAME: 
        case LAST_NAME:
        case COUNTRY:
        case CITY: return Boolean(value)
            ? `${value[0]?.toUpperCase()}${value.substring(1)}`
            : value
        case EMAIL:
        case WEBSITE: {
            return value.split('').filter(el => el !== ' ').join('')
        }
    }
  
}

