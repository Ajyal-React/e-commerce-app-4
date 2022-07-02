import USER_ACTION_TYPES from "./userActionsTypes.constant";

export const UserReducerEnum = "User";

const initialState = {
    data: {},
    token: "",
    isSuccess: false,
    errorMessage: "",
    isLoading: false
};

export const UserReducer = (state=initialState, action) => {
    switch(action.type){
        case USER_ACTION_TYPES.USER_LOGIN_SUCCESS:
            return state = {...state, data: action.payload, token: action?.payload?.token, isSuccess: true, errorMessage: "", isLoading: false};

        case USER_ACTION_TYPES.USER_LOGIN_FAILED:
            return state = {...state, data: {}, token: "", isSuccess: false, errorMessage: "", isLoading: false};
        
            case USER_ACTION_TYPES.USER_LOGOUT_SUCCESS:
            return state = {...state, data: {}, token: "", isSuccess: false, errorMessage: "", isLoading: false};

        case USER_ACTION_TYPES.USER_SIGNUP_SUCCESS:
        return state = {...state, data: action.payload, token: action?.payload?.token, isSuccess: true, errorMessage: "", isLoading: false};

        case USER_ACTION_TYPES.USER_SIGNUP_FAILED:
            return state = {...state, data: {}, token: "", isSuccess: false, errorMessage: "", isLoading: false};

        default:
            return state;
    }
}
