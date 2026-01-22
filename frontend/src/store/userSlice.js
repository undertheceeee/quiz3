import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../services/api';

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get('/users/');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Failed to fetch users');
    }
  }
);

export const fetchUserProfile = createAsyncThunk(
  'users/fetchUserProfile',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get('/users/profile/');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Failed to fetch profile');
    }
  }
);

const initialState = {
  users: [],
  profile: null,
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchUserProfile.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.profile = action.payload;
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { clearError } = userSlice.actions;
export default userSlice.reducer;
