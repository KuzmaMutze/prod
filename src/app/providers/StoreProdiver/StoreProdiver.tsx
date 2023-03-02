import React from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from './config/store';

export const StoreProdiver: React.FC = () => {
  const store = createReduxStore();

  return <Provider store={store}></Provider>;
};
