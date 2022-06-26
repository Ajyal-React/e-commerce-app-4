import { FeaturedProductsReducer } from "./featuredProducts.reducer";

export const FeaturedProductsReducerEnum = "FeaturedProducts";

export const initialHomeStates = {
    [`${FeaturedProductsReducerEnum}`]: [],
};

export const HomeReducers = {
    [`${FeaturedProductsReducerEnum}`] : FeaturedProductsReducer,
};