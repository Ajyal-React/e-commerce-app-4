import USER_ACTION_TYPES from "./userActionsTypes.constant";

export const UserReducerEnum = "User";

export const UserReducer = (state={data:{}}, action) => {
    switch(action.type){
        case USER_ACTION_TYPES.USER_LOGIN_SUCCESS:
            return action.payload;

        case USER_ACTION_TYPES.USER_LOGIN_FAILED:
            return null;

        case USER_ACTION_TYPES.USER_LOGOUT_SUCCESS:
            return null;

        case USER_ACTION_TYPES.USER_SIGNUP_SUCCESS:
        return action.payload;

        case USER_ACTION_TYPES.USER_SIGNUP_FAILED:
            return null;

        default:
            return state;
    }
}
