import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState: IProduct = {
    _Id: "",
    img_src: "",
    fileKey: "",
    name: "",
    price: "",
    category: "",
}

export const productSlice = createSlice({
    name: "productSlice",
    initialState,
    reducers:{
        setProduct: (state, action: PayloadAction<IProduct>) =>{
            return action.payload
        },
    }
})

export const {setProduct} = productSlice.actions
export default productSlice.reducer