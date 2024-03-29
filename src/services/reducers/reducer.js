import {ADD_TO_CART, REMOVE_TO_CART} from "../Constant";

const initialState = {
    cardData : [],
}

export default function cardItems (initialState = null, action) {
    switch(action.type) {
        case ADD_TO_CART :
            console.log('reducer data : ', action);
            return {
                ...initialState,
                cardData : action.data
            }
        default :
            return initialState
    }
}