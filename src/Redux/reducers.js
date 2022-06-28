
import { combineReducers } from "redux";
import { ProductsReducer, ProductsReducerEnum } from "./products/products.reducers";
import { UserReducer, UserReducerEnum } from "./user/user.reducer";

export const initialStore = {
    [`${UserReducerEnum}`]: {data: {...JSON.parse(localStorage.getItem('User'))}},
    // [`${ProductsReducerEnum}`]: {},
};

const rootReducers = combineReducers(
    {
        [`${UserReducerEnum}`] : UserReducer,
        [`${ProductsReducerEnum}`]: ProductsReducer,
    }
);

export default rootReducers;