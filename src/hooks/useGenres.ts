import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Genres {
  id: number;
  name: string;
}

interface FetchGenresResponse {
  count: number;
  results: Genres[];
}

const useGenres = () => {
  const [genres, setGenres] = useState<Genres[]>([]);
  const [error, setError] = useState("");
  const [isloading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<FetchGenresResponse>("/genres")
      .then((res) => {
        setGenres(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });
    return () => controller.abort();
  }, []);
  return { genres: genres, error: null, isloading: isloading };
};

export default useGenres;
