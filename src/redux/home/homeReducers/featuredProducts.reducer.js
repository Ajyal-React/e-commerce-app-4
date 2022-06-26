import Home_ACTIONS_TYPES from "../homeActionsTypes.constant";

export const FeaturedProductsReducer = (state=[], action) => {
    switch(action.type){
        case Home_ACTIONS_TYPES.GET_FEATURED_PRODUCTS_SUCCESS:
            return action.payload;

        case Home_ACTIONS_TYPES.GET_FEATURED_PRODUCTS_FAILED:
            return [];

        default:
            return state;
    }
}
