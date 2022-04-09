import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAllUsers = createAsyncThunk('fetchusers', () => {
  const responce = axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.data);
  return responce;
});

const initialState = {
  users: [],
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers: (state, { payload }) => {
      state.users.push(payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllUsers.fulfilled, (state, { payload }) => {
      state.users = payload;
    });
  },
});

// Action creators are generated for each case reducer function
export const { setUsers } = usersSlice.actions;

export default usersSlice.reducer;
