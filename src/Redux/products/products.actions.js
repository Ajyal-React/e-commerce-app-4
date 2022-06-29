import RequestsHandlersService from "../../utils/requestsHandlers";
import PRODUCTS_ACTIONS_TYPES from "./products.actions.types.js";

export const GetOffers = () => {
    return async (dispatch) => {
        try {
            dispatch({
                type: PRODUCTS_ACTIONS_TYPES.START_OFFER
            });
            const response = await RequestsHandlersService.GetRequestHandler("/products/offers");
            dispatch(GetOffersSuccess(response));
        } catch (error) {
            dispatch(GetOffersFailed(error));
        }
    }  
}

export const GetOffersSuccess = (response) => {
    return({
        type: PRODUCTS_ACTIONS_TYPES.GET_OFFERS_SUCCESS,
        payload: response.responseData
    })
}

export const GetOffersFailed = (error) => {
    return({
        type: PRODUCTS_ACTIONS_TYPES.GET_OFFERS_FAILED,
        payload: error.errorMsg
    })
}



export const GetFeaturedProducts = () => {
    return async (dispatch) => {
        try {
            dispatch({
                type: PRODUCTS_ACTIONS_TYPES.START_FEATURED_PRODUCTS
            });
            const res = await RequestsHandlersService.GetRequestHandler("/products/featured-products");
            dispatch(GetFeaturedProductsSuccess(res));
        } catch (error) {
            dispatch(GetFeaturedProductsFailed(error));
        }
    };
};

export const GetFeaturedProductsSuccess = (response) => {
    return ({
        type: PRODUCTS_ACTIONS_TYPES.GET_FEATURED_PRODUCTS_SUCCESS,
        payload: response.responseData,
    })
}

export const GetFeaturedProductsFailed = (error) => {
    return ({
        type: PRODUCTS_ACTIONS_TYPES.GET_FEATURED_PRODUCTS_FAILED,
        payload: error,
    })
}


export const GetTrendingProducts = () => {
    return async (dispatch) => {
        try {
            dispatch({
                type: PRODUCTS_ACTIONS_TYPES.START_TRENDING_PRODUCTS
            });
            const response = await RequestsHandlersService.GetRequestHandler("/products/trending-products");
            dispatch(GetTrendingProductsSuccess(response));
        } catch (error) {
            dispatch(GetTrendingProductsFailed(error));
        }
    }  
}

export const GetTrendingProductsSuccess = (response) => {
    return({
        type: PRODUCTS_ACTIONS_TYPES.GET_TRENDING_PRODUCTS_SUCCESS,
        payload: response.responseData,
    })
}

export const GetTrendingProductsFailed = (error) => {
    return({
        type: PRODUCTS_ACTIONS_TYPES.GET_TRENDING_PRODUCTS_FAILED,
        payload: error,
    })
}

export const GetFeaturedCategories = () => {
    return async (dispatch) => {
        try {
            dispatch({
                type: PRODUCTS_ACTIONS_TYPES.START_FEATURED_CATEGORIES
            });
            const response = await RequestsHandlersService.GetRequestHandler("/products/trending-products");
            dispatch(GetFeaturedCategoriesSuccess(response));
        } catch (error) {
            dispatch(GetFeaturedCategoriesFailed(error));
        }
    }  
}

export const GetFeaturedCategoriesSuccess = (response) => {
    return({
        type: PRODUCTS_ACTIONS_TYPES.GET_FEATURED_CATEGORIES_SUCCESS,
        payload: response.responseData,
    })
}

export const GetFeaturedCategoriesFailed = (error) => {
    return({
        type: PRODUCTS_ACTIONS_TYPES.GET_FEATURED_CATEGORIES_FAILED,
        payload: error,
    })
}