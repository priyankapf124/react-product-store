import { createSlice } from "@reduxjs/toolkit";

let ProductReducerSlice = createSlice({
  name: "productSlice",
  initialState: {
    productList: [],
    newProduct: {
      product_category: "Electronics",
      product_name: "Dell Mouse",
      product_price: "999",
      product_desc: "Optical",
      product_rating: "4",
      product_rating_count: "123",
      image: "/images/img.png",
    },
    editProduct: {
      product_category: "",
      product_name: "",
      product_price: "",
      product_desc: "",
      product_rating: "",
      product_rating_count: "",
      image: "/images/img.png",
    },
  },
  reducers: {
    insertNewProduct: (state) => {
      state.productList = [...state.productList, { ...state.newProduct }];
      state.newProduct = {
        product_category: "",
        product_name: "",
        product_price: "",
        product_desc: "",
        product_rating: "",
        product_rating_count: "",
      };
    },
    updateInputChange: (state, action) => {
      let { value, name } = action.payload;
      state.newProduct[name] = value;
    },
    updateEditInputChange: (state, action) => {
      let { value, name } = action.payload;
      state.editProduct[name] = value;
    },
    removeProduct: (state, action) => {
      let { id } = action.payload;
      state.productList.splice(id, 1); // remove product with array index
      // splice(index,delCount)
    },
    setEditProduct: (state, action) => {
      let { id } = action.payload;
      state.editProduct = { ...state.productList[id] }; // create new object copy
    },
    makeUpdateProduct: (state, action) => {
      let { id } = action.payload;
      state.productList[id] = { ...state.editProduct }; // create and set new object copy
    },
    updateProductList: (state, action) => {
      let { list } = action.payload;
      state.productList = [...state.productList, ...list];
    },
  },
});

export default ProductReducerSlice.reducer;
export const {
  updateInputChange,
  insertNewProduct,
  removeProduct,
  setEditProduct,
  updateEditInputChange,
  makeUpdateProduct,
  updateProductList,
} = ProductReducerSlice.actions;
