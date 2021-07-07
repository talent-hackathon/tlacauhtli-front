import {types} from '../types/index';

const initialState = {
  user: {
      email: '',
      logged: false,
  },
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOG_IN:
      return {
        ...state,
        user: {
           email:  action.payload.email,
           logged: true
        }
      };
    case types.LOG_OUT:
        return{
            ...state,
            user: {
                email:  '',
                logged: false
            }
        }
    default:
      return state;
  }
};
