
import { combineReducers } from "redux";
import { ProductsReducer, ProductsReducerEnum } from "./products/products.reducers";
import { UserReducer, UserReducerEnum } from "./user/user.reducer";

const UserInitialState = {
    data: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : {},
    token: localStorage.getItem('token') && localStorage.getItem('token'),
    isSuccess: false,
    errorMessage: "",
    isLoading: false
};

export const initialStore = {
    User: {...UserInitialState},
};


const rootReducers = combineReducers(
    {
        User : UserReducer,
        Products: ProductsReducer,
    }
);

export default rootReducers;