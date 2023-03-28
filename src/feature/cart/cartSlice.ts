import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { CartProduct } from "../../models/cart-product.model";

export interface CartState {
    cartProducts: CartProduct[]
    cartModalIsOpen: boolean;
}

const initialState: CartState = {
    cartProducts: [],
    cartModalIsOpen: false
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<CartProduct>) => {
            state.cartProducts = [action.payload, ...state.cartProducts];
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
        },
        removeProduct: (state, action: PayloadAction<CartProduct>) => {
            state.cartProducts = state.cartProducts.filter(item => item.product.id !== action.payload.product.id)
        },
        toggleCartModal: (state) => {
            state.cartModalIsOpen = !state.cartModalIsOpen;
        }
    },
})

// Action creators are generated for each case reducer function
export const { addProduct, removeProduct, toggleCartModal } = cartSlice.actions

export default cartSlice.reducer