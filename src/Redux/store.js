import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducers, { initialStore } from "./reducers";
import ReduxPromise from "redux-promise";

const middleWare = [thunk];

const Store = createStore(
    rootReducers,
    initialStore,
    composeWithDevTools(
        applyMiddleware(...middleWare,ReduxPromise)
    )
);


export default Store;
