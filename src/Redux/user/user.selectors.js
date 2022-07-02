import { useSelector } from "react-redux";

export function UserStateSelector (){
    return useSelector(state => state?.User?.data);
}
    
export function TokenSelector (){
    return useSelector(state => state?.User?.token);
}

export function AutherizationSelector (){
    return useSelector(state => `Bearer ${state?.User?.token}`);
}
