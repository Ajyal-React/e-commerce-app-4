import USER_ACTION_TYPES from "./user-actions-types.constant";
import { toast } from 'react-toastify';
export const UserReducer = (state=null, action) => {
    switch(action.type){
        case USER_ACTION_TYPES.USER_LOGIN_SUCCESS:
            return action.payload;

        case USER_ACTION_TYPES.USER_LOGIN_FAILED:
            return null;

        default:
            return state;
    }
}
