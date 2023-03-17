import {
  AnyAction,
  CombinedState,
  Dispatch,
  EnhancedStore,
  Reducer,
  ReducersMapObject,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { ProfileSchema } from 'entities/Profile';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUsername';
import { NavigateFunction } from 'react-router-dom';

export interface StateSchema {
  user: UserSchema;

  // Async reducers
  loginForm?: LoginSchema;
  profile?: ProfileSchema;
}

export type StateSchemaKeys = keyof StateSchema;

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;

  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;

  add: (key: StateSchemaKeys, reducer: Reducer) => void;

  remove: (key: StateSchemaKeys) => void;
}

export interface ThunkExtraArg {
  api: AxiosInstance;
  navigate?: NavigateFunction;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  dispatch?: Dispatch;
}
