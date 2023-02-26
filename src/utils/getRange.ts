import { FIRST_NAME, LAST_NAME, MAX_FIRST_NAME_LENGTH, MAX_LAST_NAME_LENGTH, MIN_FIRST_NAME_LENGTH, MIN_LAST_NAME_LENGTH } from "../data/data"

export const  getRange = (type) => {
    switch (type) {
        case FIRST_NAME: return [MIN_FIRST_NAME_LENGTH, MAX_FIRST_NAME_LENGTH]
        case LAST_NAME: return [MIN_LAST_NAME_LENGTH, MAX_LAST_NAME_LENGTH]
    }
}