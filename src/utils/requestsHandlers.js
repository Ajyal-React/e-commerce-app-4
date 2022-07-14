import axios from "axios";
import { TokenSelector } from "../Redux/user/user.selectors";

const BaseUrl = "https://omar-tech-store.herokuapp.com/api";

const config = {
    headers: { Authorization:  `Bearer ${TokenSelector}`}
};

const GetRequestHandler = async (endPoint, params={}) => {
    try {
        const response = await axios.get(BaseUrl+endPoint, {config, params});
        return { responseData: response.data };
    } catch (error) {
        const errorMsg = (error?.response?.data?.message) || error.message || error.toString();
        return { errorMsg: errorMsg };
    }
}

const PostRequestHandler = async (endPoint, body={}) => {
    try {
        const response = await axios.post(BaseUrl+endPoint, body, {config});
        return  { responseData: response.data};
    } catch (error) {
        const errorMsg = (error?.response?.data?.message) || error.message || error.toString();
        return { errorMessage: errorMsg };
    }
}

const RequestsHandlersService = {
    GetRequestHandler,
    PostRequestHandler,
};

export default RequestsHandlersService;