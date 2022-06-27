import * as actionTypes from "../Types/FeaturedCategoriTypes";
import axios from "axios";

export const FeaturedCategori = (user) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(
        "https://omar-tech-store.herokuapp.com/api/products/featured-categories"
      );
      dispatch({
        type: actionTypes.FEATURED_CAT,
        payload: {
          data: res.data,
          isSuccuss: true,
        },
      });
    } catch (error) {
      
    }
  };
};
