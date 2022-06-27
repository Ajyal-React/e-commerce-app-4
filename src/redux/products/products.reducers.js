import PRODUCTS_ACTIONS_TYPES from "./products.actions.types";

export const ProductsReducerEnum = "Products";
const initialState = {
    isLoading: false,
    featuredProducts: {
        data:[],
        error: {
            isError: false, 
            errorMessage: ""
        },
    },
    offers: {
        data:[],
        error: {
            isError: false, 
            errorMessage: ""
        },
    }
}
export const ProductsReducer = (state=initialState, action) => {
    switch(action.type){
        case PRODUCTS_ACTIONS_TYPES.GET_OFFERS_SUCCESS:
            return state = {...state, isLoading: false, offers: {...state.offers ,...action.payload}};

        case PRODUCTS_ACTIONS_TYPES.GET_OFFERS_FAILED:
            return state = {...state, isLoading: false, offers: {...state.offers ,...action.payload}};

        case PRODUCTS_ACTIONS_TYPES.GET_FEATURED_PRODUCTS_SUCCESS:
            return state = {...state, isLoading: false, featuredProducts: {...state.featuredProducts, ...action.payload}};

        case PRODUCTS_ACTIONS_TYPES.GET_FEATURED_PRODUCTS_FAILED:
            return state = {...state, isLoading: false, featuredProducts: {...state.featuredProducts, ...action.payload}};

        case PRODUCTS_ACTIONS_TYPES.RELOADING:
            return state = {...state, isLoading: true};
        default:
            return state;
    }
}
