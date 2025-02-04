import type React from 'react';
import { useJsonFetch } from './useJsonFetch';
import { loadingUrl } from './helper';
import styles from './main-page-styles.module.css';

export const Loading = (): React.JSX.Element => {
  const [data, loading, error] = useJsonFetch({ url: loadingUrl });
  return (
    <div className={styles.container}>
      <h1>Loading component</h1>
      {loading && <div>Загрузка...</div>}
      {data && <div>{data}</div>}
      {error && <div>Ошибка: {error}</div>}
    </div>
  );
};
