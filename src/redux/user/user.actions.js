import { toast } from 'react-toastify';
import { AxiosPostData } from '../../utils/axios.service.js';
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
            console.log("error:",error.response.data)
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