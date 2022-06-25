import { useSelector } from "react-redux";
import {UserReducerEnum} from "./reducers";

export function UserStateSelector (){
    return useSelector(state => state[UserReducerEnum]);
}