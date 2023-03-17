import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { loginFormReducer } from 'features/AuthByUsername/model';
import { profileReducer } from 'entities/Profile';
import { ReducersList } from 'shared/lib';

const defaultAsyncReducers: ReducersList = {
  loginForm: loginFormReducer,
  profile: profileReducer,
};

export const StoreDecorator =
  (state: DeepPartial<StateSchema>, asyncReducers?: ReducersList) =>
  (StoryComponent: Story) =>
    (
      <StoreProvider
        initialState={state}
        asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
      >
        <StoryComponent />
      </StoreProvider>
    );
