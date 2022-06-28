import RequestsHandlersService from "./requestsHandlers.service";

export const ProductsBaseApiEndPoint = "/products";

export const Login = (params={}) => {
    return RequestsHandlersService.GetRequestHandler(ProductsBaseApiEndPoint + "/offers", params);
};