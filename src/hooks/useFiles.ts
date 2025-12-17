import { useEffect, useState } from 'react';

export interface File {
  createdAt: string;
  id: number;
  name: string;
  type: string;
  updatedAt: string;
}

interface FilesResponse {
  items: File[];
}

interface UseFilesResult {
  data: File[];
  isLoading: boolean;
  error: string | null;
}

export const useFiles = (): UseFilesResult => {
  const [data, setData] = useState<File[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    setIsLoading(true);

    fetch('/items.json')
      .then(res => {
        if (!res.ok) {
          throw new Error('Failed to fetch items');
        }
        return res.json();
      })
      .then((result: FilesResponse) => {
        if (isMounted) {
          setData(result.items);
          setError(null);
        }
      })
      .catch(() => {
        if (isMounted) {
          setError('Something went wrong while loading items');
        }
      })
      .finally(() => {
        if (isMounted) {
          setIsLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return {
    data,
    isLoading,
    error,
  };
};
