import axios from 'axios'
import {
    FREEBIE_LIST_REQUEST,
    FREEBIE_LIST_SUCCESS,
    FREEBIE_LIST_FAIL,

} from '../constants/freebieConstants'

export const listFreebies = () => async (dispatch) => {
    try{
        dispatch({type:FREEBIE_LIST_REQUEST})
        
        const { data } = await axios.get('/api/freebies/')

        dispatch({
            type: FREEBIE_LIST_SUCCESS,
            payload: data
        })

        }catch(error){
            dispatch({
                type: FREEBIE_LIST_FAIL,
                payload: error.response && error.response.data.message
                ? error.response.data.message
                :error.message,
            })
        
    }
}