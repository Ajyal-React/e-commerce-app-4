import axios from "axios";
import * as productsService from "../../services/products.service";
import PRODUCTS_ACTIONS_TYPES from "./products.actions.types";

export const GetOffers = () => {
    return async (dispatch) => {
        try {
            dispatch(Reloading());
            const response = await productsService.GetOffers();
            dispatch(GetOffersSuccess(response));
        } catch (error) {
            dispatch(GetOffersFailed(error));
        }
    }  
}

export const GetOffersSuccess = (response) => {
    return({
        type: PRODUCTS_ACTIONS_TYPES.GET_OFFERS_SUCCESS,
        payload: response.data[0]
    })
}

export const GetOffersFailed = (error) => {
    return({
        type: PRODUCTS_ACTIONS_TYPES.GET_OFFERS_FAILED,
        payload: error
    })
}



export const GetFeaturedProducts = () => {
    return async (dispatch) => {
        try {
            dispatch(Reloading())
            const res = await productsService.GetFeaturedProducts();
            dispatch(GetFeaturedProductsSuccess(res));
        } catch (error) {
            dispatch(GetFeaturedProductsFailed(error));
        }
    };
};

export const GetFeaturedProductsSuccess = (response) => {
    return ({
        type: PRODUCTS_ACTIONS_TYPES.GET_FEATURED_PRODUCTS_SUCCESS,
        payload: {
            data: response?.data,
            error: response?.error
        }
    })
}

export const GetFeaturedProductsFailed = (error) => {
    return ({
        type: PRODUCTS_ACTIONS_TYPES.GET_FEATURED_PRODUCTS_FAILED,
        payload: {
            error: error,
        },
    })
}

export const Reloading = () => {
    return({
        type: PRODUCTS_ACTIONS_TYPES.RELOADING,
    })
}


export const GetTrendingProducts = () => {
    return async (dispatch) => {
        try {
            dispatch(Reloading());
            const response = await productsService.GetTrendingProducts();
            dispatch(GetTrendingProductsSuccess(response));
        } catch (error) {
            dispatch(GetTrendingProductsFailed(error));
        }
    }  
}

export const GetTrendingProductsSuccess = (response) => {
    return({
        type: PRODUCTS_ACTIONS_TYPES.GET_TRENDING_PRODUCTS_SUCCESS,
        payload: response.data,
    })
}

export const GetTrendingProductsFailed = (error) => {
    return({
        type: PRODUCTS_ACTIONS_TYPES.GET_TRENDING_PRODUCTS_FAILED,
        payload: error,
    })
}