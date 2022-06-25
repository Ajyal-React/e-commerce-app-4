
import { combineReducers } from "redux";
import { UserReducer } from "./user/user.reducer";


export const UserReducerEnum = "User";

export const initialStore = {
    [`${UserReducerEnum}`]: JSON.parse(localStorage.getItem('User')),
};

const rootReducers = combineReducers(
    {
        [`${UserReducerEnum}`] : UserReducer,
    }
);

export default rootReducers;