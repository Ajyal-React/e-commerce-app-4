import { AxiosGetData } from '../../utils/axios.service.js';
import Home_ACTIONS_TYPES from './homeActionsTypes.constant.js';

export const GetFeaturedProducts = () => {
    const HomeBaseEndPoint = "/products";
    return async (dispatch) => {
        try {
            const response = await AxiosGetData(HomeBaseEndPoint+"/featured-products");
            
            dispatch({
                type: Home_ACTIONS_TYPES.GET_FEATURED_PRODUCTS_SUCCESS,
                payload: response.data
            });

        } catch (error) {
            console.log("error:",error.response.data)
            // dispatch({
            //     type: Home_ACTIONS_TYPES.GET_FEATURED_PRODUCTS_FAILED,
            //     payload: error.response.data
            // })
        }
    }  
}