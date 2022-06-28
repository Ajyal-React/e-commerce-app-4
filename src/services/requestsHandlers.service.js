import { AxiosGetData, AxiosPostData } from "./axios.service";

export const GetRequestHandler = async (endPoint, params={}) => {
    try {
        const response = await AxiosGetData(endPoint,params);
        return { data: response.data, error: { isError: false, errorMessage: "" } };
    } catch (error) {
        const errorMsg = (error?.response?.data?.message) || error.message || error.toString();
        return { isError: true, errorMessage: errorMsg };
    }
}

export const PostRequestHandler = async (endPoint, body={}) => {
    try {
        const response = await AxiosPostData(endPoint, body);
        return { isSuccess: true, successMsg: response.data.message};
    } catch (error) {
        const errorMsg = (error?.response?.data?.message) || error.message || error.toString();
        return { isError: true, errorMessage: errorMsg };
    }
}

const RequestsHandlersService = {
    GetRequestHandler,
    PostRequestHandler,
};

export default RequestsHandlersService;