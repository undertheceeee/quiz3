import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../services/api';

export const fetchServices = createAsyncThunk(
  'services/fetchServices',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get('/services/');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Failed to fetch services');
    }
  }
);

export const fetchServiceById = createAsyncThunk(
  'services/fetchServiceById',
  async (id, { rejectWithValue }) => {
    try {
      const response = await api.get(`/services/${id}/`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Failed to fetch service');
    }
  }
);

const initialState = {
  services: [],
  selectedService: null,
  isLoading: false,
  error: null,
};

const serviceSlice = createSlice({
  name: 'services',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    clearSelectedService: (state) => {
      state.selectedService = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchServices.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchServices.fulfilled, (state, action) => {
        state.isLoading = false;
        state.services = action.payload;
      })
      .addCase(fetchServices.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchServiceById.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchServiceById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.selectedService = action.payload;
      })
      .addCase(fetchServiceById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { clearError, clearSelectedService } = serviceSlice.actions;
export default serviceSlice.reducer;
