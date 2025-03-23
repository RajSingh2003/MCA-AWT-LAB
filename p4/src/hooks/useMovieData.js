// src/hooks/useMovieData.js
import { useState, useEffect } from 'react';
import axios from 'axios';

// Replace with your actual API key
const API_KEY = 'YOUR_API_KEY';
const API_URL = 'https://api.themoviedb.org/3';

export const useMovieData = (query = '', genre = 'popular') => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(
          `${API_URL}/movie/${genre}`, {
            params: {
              api_key: API_KEY,
              query,
            },
          }
        );
        setMovies(response.data.results);
      } catch (err) {
        setError('Error fetching movies');
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [query, genre]);

  return { movies, loading, error };
};
