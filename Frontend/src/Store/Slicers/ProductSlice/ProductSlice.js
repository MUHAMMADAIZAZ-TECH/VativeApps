import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getProduct,
  getProducts,
  addProducts,
  deleteProducts,
  updateProducts,
} from "../../product.apis";

const initialState = {
  message: null,
  loading: false,
  List: [],
  Product: {},
  error: null,
  isSuccess: false,
};
const userSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {
    resetuserstates: (state) => (state = initialState),
  },
  extraReducers: (builder) => {
    builder
      .addCase(GetProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.isSuccess = false;
      })
      .addCase(GetProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.List = action.payload.Products;
        state.message = action.payload.message;
        state.isSuccess = false;
      })
      .addCase(GetProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.isSuccess = false;
      });
    builder
      .addCase(GetProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.isSuccess = false;
      })
      .addCase(GetProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
        state.Product = action.payload.Product;
        state.isSuccess = true;
      })
      .addCase(GetProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.isSuccess = false;
      });
    builder
      .addCase(AddProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.isSuccess = false;
      })
      .addCase(AddProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
        state.List = action.payload.List;
        state.isSuccess = true;
      })
      .addCase(AddProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.isSuccess = false;
      });
    builder
      .addCase(DeleteProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.isSuccess = false;
      })
      .addCase(DeleteProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
        state.List = action.payload.UpdatedList;
        state.isSuccess = true;
      })
      .addCase(DeleteProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.isSuccess = false;
      });
    builder
      .addCase(UpdateProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.isSuccess = false;
      })
      .addCase(UpdateProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
        state.List = action.payload.UpdatedList;
        state.isSuccess = true;
      })
      .addCase(UpdateProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.isSuccess = false;
      });
  },
});
export const GetProduct = createAsyncThunk("items/getProduct", async (id) => {
  const response = await getProduct(id);
  return response.data;
});
export const GetProducts = createAsyncThunk("items/getProducts", async () => {
  const response = await getProducts();
  return response.data;
});
export const AddProducts = createAsyncThunk(
  "items/AddProducts",
  async (state) => {
    const response = await addProducts(state);
    return response.data;
  }
);
export const DeleteProducts = createAsyncThunk(
  "items/deleteProducts",
  async (id) => {
    const response = await deleteProducts(id);
    return response.data;
  }
);
export const UpdateProducts = createAsyncThunk(
  "items/UpdateProducts",
  async (id) => {
    const response = await updateProducts(id);
    return response.data;
  }
);

export const { resetuserstates } = userSlice.actions;
export default userSlice.reducer;
