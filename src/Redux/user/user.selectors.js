import { useSelector } from "react-redux";
import { UserReducerEnum } from "./user.reducer";

export function UserStateSelector (){
    return useSelector(state => state[UserReducerEnum]?.data);
}

export function AuthorizationSelector (){
    return useSelector(state => `Bearer ${state[UserReducerEnum]?.data.token}`);
}
