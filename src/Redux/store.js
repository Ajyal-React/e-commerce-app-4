import { createStore, combineReducers, applyMiddleware } from "redux";
import CategoriesReducer from "./Reducers/FeaturedCategoriReducer";
import thunk from "redux-thunk";
const middleware = [thunk];

const allReducer = combineReducers({
    CategoriesReducer: CategoriesReducer
});

const store = createStore(allReducer, {}, applyMiddleware(...middleware));

export default store;
