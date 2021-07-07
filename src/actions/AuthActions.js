import {types} from '../types/index'

export const authLogin = (user) => {
    return{
        type: types.LOG_IN,
        payload: user
    }
}