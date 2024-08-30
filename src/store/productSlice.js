import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      id: 1,
      description: "Apple",
    },
    {
      id: 2,
      description: "Banana",
    },
  ],
};

// managing state
const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export default productSlice.reducer;
