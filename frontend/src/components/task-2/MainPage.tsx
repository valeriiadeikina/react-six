import React from 'react';
import { Data } from './Data';
import { Error } from './Error';
import { Loading } from './Loading';

export function App(): React.JSX.Element {
  return (
    <>
      <Data />
      <Error />
      <Loading />
    </>
  );
}
