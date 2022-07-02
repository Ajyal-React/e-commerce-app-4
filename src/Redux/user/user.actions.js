import axios from 'axios';
import { toast } from 'react-toastify';
import USER_ACTION_TYPES from './userActionsTypes.constant';

export const Login = (values) => {
    const UserBaseUrl = "/users";
    return async (dispatch) => {
        try {
            
            dispatch({
                type: USER_ACTION_TYPES.USER_LOGIN_START,
            });
            
            const response = await axios.post("https://omar-tech-store.herokuapp.com/api"+UserBaseUrl+"/login", values);
            localStorage.setItem('user',JSON.stringify(response.data))
            localStorage.setItem('user_token',response.data.token)

            toast.success("تم تسجيل الدخول بنجاح.", {theme: 'colored'});
            dispatch({
                type: USER_ACTION_TYPES.USER_LOGIN_SUCCESS,
                payload: response.data
            });
        } catch (error) {
            const errorMsg = (error?.response?.data?.message) || error.message || error.toString();
            toast.error(errorMsg, {theme: 'colored'});
            dispatch({
                type: USER_ACTION_TYPES.USER_LOGIN_FAILED,
                payload: {errorMsg}
            })
        }
    }  
}

export const Logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('user_token');

    return ({
        type: USER_ACTION_TYPES.USER_LOGOUT_SUCCESS
    });

}

export const SignUp =  (data) => {
    return async (dispatch) => {
        try {
            dispatch({
                type: USER_ACTION_TYPES.USER_SIGNUP_START,
            });
           
            const res = await axios.post("https://omar-tech-store.herokuapp.com/api/users/signup", data);
            localStorage.setItem('user',JSON.stringify(res.data))
            localStorage.setItem('user_token',res.data.token)
            toast.success("تم إنشاء حساب بنجاح.", {theme: 'colored'});
            dispatch({
               type: USER_ACTION_TYPES.USER_SIGNUP_SUCCESS,
               payload: res.data
            });
        }catch (error){
            const errorMsg = (error?.response?.data?.message) || error.message || error.toString();
            toast.error(errorMsg, {theme: 'colored'});
            dispatch({
                type: USER_ACTION_TYPES.USER_LOGIN_FAILED,
                payload: {errorMsg}
            })
        }

    }

}
