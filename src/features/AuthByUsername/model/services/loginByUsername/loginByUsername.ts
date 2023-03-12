import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, userActions } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';

interface LoginByUsername {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<User, LoginByUsername>(
  'login/loginByUsername',
  async ({ username, password }, thunkAPI) => {
    try {
      const res = await axios.post<User>('http://localhost:8080/login', {
        username,
        password,
      });

      if (!res.data) {
        throw new Error();
      }

      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(res.data));
      thunkAPI.dispatch(userActions.setAuthData(res.data));

      return res.data;
    } catch (e) {
      console.log(e);
      return thunkAPI.rejectWithValue('error');
    }
  }
);
