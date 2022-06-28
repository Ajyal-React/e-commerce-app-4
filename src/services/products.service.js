import RequestsHandlersService from "./requestsHandlers.service";

export const ProductsBaseApiEndPoint = "/products";

export const GetOffers = (params={}) => {
    return RequestsHandlersService.GetRequestHandler(ProductsBaseApiEndPoint + "/offers", params);
};

export const GetFeaturedProducts = (params={}) => {
    return RequestsHandlersService.GetRequestHandler(ProductsBaseApiEndPoint + "/featured-products", params);
};
  
export const GetFeaturedCategories = (params={}) => {
    return RequestsHandlersService.GetRequestHandler(ProductsBaseApiEndPoint + "/featured-categories", params);
};

export const GetTrendingProducts = (params={}) => {
    return RequestsHandlersService.GetRequestHandler(ProductsBaseApiEndPoint + "/trending-products", params);
};