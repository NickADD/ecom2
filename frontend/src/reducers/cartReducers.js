import { CART_ADD_ITEM } from '../constants/cartConstants'

export const cartReducer = (state = { cartItems:[] }, action) => {
    switch(action.type){
        case CART_ADD_ITEM:
            const item = action.payload
            const existItem = state.cartItems.find(x => x.freebie === item.freebie)

            if(existItem){
                return{
                    ...state,
                    cartItems: state.cartItems.map(x =>
                        x.freebie === existItem.freebie ? item : x
                        )
                }

            }else{
                return{
                    ...state,
                    cartItems:{...state.cartItems, item}
                }
            }

        default:
            return state
    }
}

