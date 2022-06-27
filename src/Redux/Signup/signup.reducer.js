import {USERSIGNUPTYPE} from "./USERSIGNUPTYPE";

export const signupReducer = (state=null, action) =>{

    switch(action.type){
        case USERSIGNUPTYPE.SIGNUP_SUCCSESS:
            return action.payload;

        case USERSIGNUPTYPE.SIGNUP_FAILED:
            return null;

        default:
            return state;
    }
}