import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchIphone16 = createAsyncThunk(
  'iphone16/fetchIphone16',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('https://6832bc87c3f2222a8cb354a1.mockapi.io/MyFirstAPI');
      if (!response.ok) {
        throw new Error('iPhone 16 маалыматтарын алууда ката кетти');
      }
      const data = await response.json();
      console.log('iPhone 16 API Response:', data); // Дебаг үчүн
      return data;
    } catch (error) {
      console.error('API Error:', error.message);
      return rejectWithValue(error.message);
    }
  }
);

const iphone16Slice = createSlice({
  name: 'iPhone16',
  initialState: {
    products: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchIphone16.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchIphone16.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchIphone16.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default iphone16Slice.reducer;