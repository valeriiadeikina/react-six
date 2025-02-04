import type React from 'react';
import { useJsonFetch } from './useJsonFetch';
import { errorUrl } from './helper';
import styles from './main-page-styles.module.css';

export const Error = (): React.JSX.Element => {
  const [data, loading, error] = useJsonFetch({ url: errorUrl });
  return (
    <div className={styles.container}>
      <h1>Error component</h1>
      {loading && <div>Загрузка...</div>}
      {data && <div>{data}</div>}
      {error && <div>Ошибка: {error}</div>}
    </div>
  );
};
