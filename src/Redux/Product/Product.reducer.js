import {PRODUCTTYPE} from "./PRODUCTTYPE";

export const ProductReducer = (state= {products:[],offers:{}}
    ,action) => {
    switch (action.type){
        case PRODUCTTYPE.OFFERPRODUCT_SUCCSS:
            return state= {...state,offers:action.payload};

        case PRODUCTTYPE.OFFERPRODUCT_FAILD:
            return state;

        case PRODUCTTYPE.TRENDINGPRODUCT_SUCCSS:
            return state= {...state,products:action.payload};
        case PRODUCTTYPE.TRENDINGPRODUCT_FAILD:
            return state;

        default:
            return state
    }
}

