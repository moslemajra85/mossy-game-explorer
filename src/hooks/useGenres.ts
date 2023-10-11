import { useEffect, useState } from 'react';
import apiClient from '../components/services/api-client';
import { CanceledError } from 'axios';

interface Genre {
  id: number;
  name: string;
}

interface FetchGenresResponse {
  count: number;
  results: Genre[];
}

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<FetchGenresResponse>('/genres', { signal: controller.signal })
      .then((res) => setGenres(res.data.results))
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
      });

    return () => {
      controller.abort();
    };
  }, []);

  return {genres, error, isLoading};
};

export default useGenres;
