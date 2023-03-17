import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { User, userActions } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/constants/localstorage';

interface LoginByUsername {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<
  User,
  LoginByUsername,
  ThunkConfig<string>
>('login/loginByUsername', async ({ username, password }, thunkAPI) => {
  try {
    const res = await thunkAPI.extra.api.post<User>('/login', {
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
});
