import PRODUCTS_ACTIONS_TYPES from "./products.actions.types";

const initialState = {
    featuredProducts: {
        data: [],
        errorMessage: "",
        isSuccess: false,
        isLoading: false
    },
    offers: {
        data: [],
        errorMessage: "",
        isSuccess: false,
        isLoading: false
    },

    trendingProducts: {
        data: [],
        errorMessage: "",
        isSuccess: false,
        isLoading: false
    },
    featuredCategories: {
        data: [],
        errorMessage: "",
        isSuccess: false,
        isLoading: false
    },
    selectedProduct: {
        data: {},
        errorMessage: "",
        isSuccess: false,
        isLoading: false
    },
}
export const ProductsReducer = (state=initialState, action) => {
    switch(action.type){
        //offers
        case PRODUCTS_ACTIONS_TYPES.START_OFFER:
            return state = {...state, offers: {data: [], isSuccess: false, isLoading: true, errorMessage: "" }};

        case PRODUCTS_ACTIONS_TYPES.GET_OFFERS_SUCCESS:
            return state = {...state, offers: {data: action.payload, isSuccess: true, isLoading: false, errorMessage: "" }};

        case PRODUCTS_ACTIONS_TYPES.GET_OFFERS_FAILED:
            return state = {...state, offers: {errorMessage: action.payload, data: [], isSuccess: false, isLoading: false}};

        //featured products
        case PRODUCTS_ACTIONS_TYPES.START_FEATURED_PRODUCTS:
            return state = {...state, featuredProducts: {data: [], isSuccess: false, isLoading: true, errorMessage: "" }};

        case PRODUCTS_ACTIONS_TYPES.GET_FEATURED_PRODUCTS_SUCCESS:
            return state = {...state, featuredProducts: {data: action.payload, isSuccess: true, isLoading: false, errorMessage: "" }};

        case PRODUCTS_ACTIONS_TYPES.GET_FEATURED_PRODUCTS_FAILED:
            return state = {...state, featuredProducts: {errorMessage: action.payload, data: [], isSuccess: false, isLoading: false}};

        //trending products
        case PRODUCTS_ACTIONS_TYPES.START_TRENDING_PRODUCTS:
            return state = {...state, trendingProducts: {data: [], isSuccess: false, isLoading: true, errorMessage: "" }};

        case PRODUCTS_ACTIONS_TYPES.GET_TRENDING_PRODUCTS_SUCCESS:
            return state = {...state, trendingProducts: {data: action.payload, isSuccess: true,isLoading: false, errorMessage: "" }};

        case PRODUCTS_ACTIONS_TYPES.GET_TRENDING_PRODUCTS_FAILED:
            return state = {...state, trendingProducts: {errorMessage: action.payload, data: [], isSuccess: false, isLoading: false}};

        //featured Categories
        case PRODUCTS_ACTIONS_TYPES.START_FEATURED_CATEGORIES:
            return state = {...state, featuredCategories: {data: [], isSuccess: false, isLoading: true, errorMessage: "" }};

        case PRODUCTS_ACTIONS_TYPES.GET_FEATURED_CATEGORIES_SUCCESS:
            return state = {...state, featuredCategories: {...state.featuredCategories, data: action.payload, isSuccess: true,isLoading: false, errorMessage: "" }};

        case PRODUCTS_ACTIONS_TYPES.GET_FEATURED_CATEGORIES_FAILED:
            return state = {...state, featuredCategories: {...state.featuredCategories, errorMessage: action.payload, data: [], isSuccess: false, isLoading: false}};

        default:
            return state;
    }
}
