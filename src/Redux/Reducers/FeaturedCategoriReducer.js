import * as actionTypes from "../Types/FeaturedCategoriTypes";

const FeaturedCategoriReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.FEATURED_CAT:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default FeaturedCategoriReducer;
