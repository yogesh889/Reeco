import { createSlice } from "@reduxjs/toolkit";

/**
 * The initial state of the product slice.
 */
const initialState = {
  product: [],
};

/**
 * The product slice that contains the product state and reducers.
 */
export const productSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setProduct: (state, action) => {
      state.product = action.payload;
    },

    /**
     * Updates the status of a product.
     */
    updateStatus: (state, action) => {
      const index = state.product.findIndex(
        (item) => item.id === action.payload.id
      );

      if (index !== -1) {
        state.product[index].status = action.payload.status;
      }
    },
  },
});

export const { updateStatus, setProduct } = productSlice.actions;

export default productSlice.reducer;
