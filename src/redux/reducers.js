
import { combineReducers } from "redux";
import { HomeReducers, initialHomeStates } from "./home/homeReducers/homeReducers";
import { UserReducer, UserReducerEnum } from "./user/user.reducer";

export const initialStore = {
    [`${UserReducerEnum}`]: JSON.parse(localStorage.getItem('User')),
    ...initialHomeStates
};

const rootReducers = combineReducers(
    {
        [`${UserReducerEnum}`] : UserReducer,
        ...HomeReducers
    }
);

export default rootReducers;