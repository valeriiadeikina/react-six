import { useEffect, useState } from 'react';

type useJsonFetchProps = {
  url: string;
  opts?: RequestInit;
};

export const useJsonFetch = ({
  url,
  opts,
}: useJsonFetchProps): [data: string, loading: boolean, error: string] => {
  const [data, setData] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchRequest = async (): Promise<void> => {
      setLoading(true);
      setError('');
      try {
        const response = await fetch(url, opts);
        const jsonData = (await response.json()) as { status: string };
        setData(jsonData.status);
      } catch (e) {
        console.log(e);
        setError(String(e));
      } finally {
        setLoading(false);
      }
    };
    void fetchRequest();
  }, [url, opts]);
  return [data, loading, error];
};
