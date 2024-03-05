// custom hook to help me fetch data from the API using axios with error and loadnig handling
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useApiData<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null | unknown>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data.posts) as T;
      } catch (error) {
        setError(error as Error | string | unknown);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  type ReturnType = {
    data: T | null;
    setData: React.Dispatch<React.SetStateAction<T | null>>;
    error: Error | null;
    loading: boolean;
  };

  return { data, setData, error, loading } as ReturnType;
}
