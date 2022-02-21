import {
    FREEBIE_LIST_REQUEST,
    FREEBIE_LIST_SUCCESS,
    FREEBIE_LIST_FAIL,

    FREEBIE_DETAILS_REQUEST,
    FREEBIE_DETAILS_SUCCESS,
    FREEBIE_DETAILS_FAIL
} from '../constants/freebieConstants'

export const freebieListReducer = (state = {freebies:[]}, action) => {
    switch(action.type){
        case FREEBIE_LIST_REQUEST:
            return {loading:true, freebies:[]}

        case FREEBIE_LIST_SUCCESS:
            return {loading:false, freebies: action.payload}
        
        case FREEBIE_LIST_SUCCESS:
            return {loading:false, error: action.payload}

        default:
            return state    
    }
}

export const freebieDetailsReducer = (state = {freebie: {reviews: []}}, action) => {
    switch(action.type){
        case FREEBIE_DETAILS_REQUEST:
            return {...state, loading:true }

        case FREEBIE_DETAILS_SUCCESS:
            return {loading:false, freebie: action.payload}
        
        case FREEBIE_DETAILS_SUCCESS:
            return {loading:false, error: action.payload}

        default:
            return state    
    }
}