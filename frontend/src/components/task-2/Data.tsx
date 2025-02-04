import type React from 'react';
import { useJsonFetch } from './useJsonFetch';
import { dataUrl } from './helper';
import styles from './main-page-styles.module.css';

export const Data = (): React.JSX.Element => {
  const [data, loading, error] = useJsonFetch({ url: dataUrl });
  return (
    <div className={styles.container}>
      <h1>Data component</h1>
      {loading && <div>Загрузка...</div>}
      {data && <div>{data}</div>}
      {error && <div>Ошибка: {error}</div>}
    </div>
  );
};
