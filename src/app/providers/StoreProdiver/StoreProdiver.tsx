import { DeepPartial } from '@reduxjs/toolkit';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { StateSchema } from './config/StateSchema';
import { createReduxStore } from './config/store';

interface StoreProviderProps {
  children?: ReactNode;
  initialState?: DeepPartial<StateSchema>;
}

export const StoreProdiver = (props: StoreProviderProps) => {
  const { children, initialState } = props;
  const store = createReduxStore(initialState as StateSchema);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore TODO: FIX
  return <Provider store={store}>{children}</Provider>;
};