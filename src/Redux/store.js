import {combineReducers, createStore,applyMiddleware} from 'redux';
import {signupReducer} from './Signup/signup.reducer'
import thunk from 'redux-thunk'
import {ProductReducer} from "./Product/Product.reducer";

const middleware = [thunk]
const rootReducer = combineReducers({
    ProductReducer,signupReducer
})
const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
)

export default store;