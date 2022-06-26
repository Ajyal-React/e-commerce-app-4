import { useSelector } from "react-redux";
import { UserReducerEnum } from "./user.reducer";

export function UserStateSelector (){
    return useSelector(state => state[UserReducerEnum]);
}

export function AuthorizationSelector (){
    return useSelector(state => `Bearer ${state[UserReducerEnum]['token']}`);
}
