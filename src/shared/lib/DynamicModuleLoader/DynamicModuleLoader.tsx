import { FC, ReactNode, useEffect } from 'react';
import { useStore } from 'react-redux';
import { Reducer } from '@reduxjs/toolkit';
import {
  ReduxStoreWithManager,
  StateSchemaKeys,
} from 'app/providers/StoreProvider/config/StateSchema';
import { useAppDispatch } from '../hooks/useAppDispatch';

export type ReducersList = {
  [name in StateSchemaKeys]?: Reducer;
};

type ReducersListEntry = [StateSchemaKeys, Reducer];

interface DynamicModuleLoaderProps {
  reducers: ReducersList;
  removeAfterUnmount?: boolean;
  children: ReactNode;
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
  const { children, reducers, removeAfterUnmount } = props;

  const store = useStore() as ReduxStoreWithManager;
  const dispatch = useAppDispatch();

  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]: ReducersListEntry) => {
      store.reducerManager.add(name, reducer);
      dispatch({ type: `@INIT ${name} reducer` });
    });

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([name, _]: ReducersListEntry) => {
          store.reducerManager.remove(name);
          dispatch({ type: `@DESTROY ${name} reducer` });
        });
      }
    };
  }, []);

  return <>{children}</>;
};
