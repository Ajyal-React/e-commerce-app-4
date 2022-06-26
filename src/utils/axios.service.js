import axios from "axios";
import { environment } from "../environments/environment";
import { AuthorizationSelector } from "../redux/user/user.selectors";

export const BaseUrl = environment.baseUrl;


export const config = {
    headers: { Authorization:  AuthorizationSelector}
};

export const AxiosGetData = (endPoint) => {
    return axios.get(BaseUrl+endPoint, {config});
}

export const AxiosPostData = (endPoint, body) => {
    return axios.post(BaseUrl+endPoint, !!body?body:{}, {config});
}