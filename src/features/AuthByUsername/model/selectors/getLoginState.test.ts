import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginState } from './getLoginState';

describe('getLoginState.test', () => {
  test('should return loginForm', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        username: '',
        password: '',
        isLoading: false,
        error: 'error',
      },
    };
    expect(getLoginState(state as StateSchema)).toEqual(state.loginForm);
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {},
    };
    expect(getLoginState(state as StateSchema)).toEqual(undefined);
  });
});
