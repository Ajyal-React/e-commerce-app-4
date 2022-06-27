import axios from "axios";
import {USERSIGNUPTYPE} from './USERSIGNUPTYPE.js'

export const signup =  (data) => {
    return async (dispatch) => {
       try {
           const res = await axios.post("https://omar-tech-store.herokuapp.com/api/users/signup", data);
           localStorage.setItem('signup',JSON.stringify(res.data))
           console.log('action response',res);
            dispatch({
               type: USERSIGNUPTYPE.SIGNUP_SUCCSESS,
               payload: res.data
           });
       }catch (error){
           console.log("action response",error);
            dispatch({
               type:USERSIGNUPTYPE.SIGNUP_FAILED,
               payload: error.res.data
           })
       }

    }

}
