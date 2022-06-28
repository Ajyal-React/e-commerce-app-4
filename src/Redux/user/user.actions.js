import axios from 'axios';
import { toast } from 'react-toastify';
import { AxiosPostData } from '../../services/axios.service.js';
import USER_ACTION_TYPES from './userActionsTypes.constant';

export const Login = (values) => {
    const UserBaseUrl = "/users";
    return async (dispatch) => {
        try {
            const response = await AxiosPostData(UserBaseUrl+"/login", values);
            localStorage.setItem('User',JSON.stringify(response.data));
            toast.success("تم تسجيل الدخول بنجاح.", {theme: 'colored'});
            dispatch({
                type: USER_ACTION_TYPES.USER_LOGIN_SUCCESS,
                payload: response.data
            });
        } catch (error) {
            // console.log("error:",error.response.data)
            toast.error(error.response.data.message, {theme: 'colored'});
            dispatch({
                type: USER_ACTION_TYPES.USER_LOGIN_FAILED,
                payload: error.response.data
            })
        }
    }  
}

export const Logout = () => {
    
    localStorage.removeItem('User');
    return ({
        type: USER_ACTION_TYPES.USER_LOGOUT_SUCCESS
    });

}

export const SignUp =  (data) => {
    return async (dispatch) => {
       try {
           const res = await axios.post("https://omar-tech-store.herokuapp.com/api/users/signup", data);
           localStorage.setItem('signup',JSON.stringify(res.data))
        //    console.log('action response',res);
            dispatch({
               type: USER_ACTION_TYPES.USER_SIGNUP_SUCCESS,
               payload: res.data
           });
       }catch (error){
        //    console.log("action response",error);
            dispatch({
               type:USER_ACTION_TYPES.USER_SIGNUP_FAILED,
               payload: error.res.data
           })
       }

    }

}
