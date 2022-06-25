import axios from 'axios';
import { environment } from './../../environments/environment.js';
import USER_ACTION_TYPES from './user-actions-types.constant';

export const Login = (values) => {
    const UserBaseUrl = environment.baseUrl + "/users";
    return async (dispatch) => {
        try {
            const response = await axios.post(UserBaseUrl+"/login", values);
            localStorage.setItem('User',JSON.stringify(response.data))
            dispatch({
                type: USER_ACTION_TYPES.USER_LOGIN_SUCCESS,
                payload: response.data
            });
        } catch (error) {
            // console.log("error:",error.response.data)
            dispatch({
                type: USER_ACTION_TYPES.USER_LOGIN_FAILED,
                payload: error.response.data
            })
        }
    }  
}