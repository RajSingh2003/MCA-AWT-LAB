import React, { useState } from 'react';
import axios from 'axios';

const MovieSearch = () => {
  const [movieTitle, setMovieTitle] = useState('');
  const [movieData, setMovieData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const API_KEY = '8003e4ad'; // Replace with your TMDb API key
  const API_URL = ' http://www.omdbapi.com/?i=tt3896198&apikey=8003e4ad';

  const fetchMovie = async (title) => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.get(`${API_URL}/search/movie`, {
        params: {
          api_key: API_KEY,
          query: title,
        },
      });
      setMovieData(response.data.results[0]); // Fetch the first movie from the results
    } catch (err) {
      setError('Error fetching movie data');
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    fetchMovie(movieTitle);
  };

  return (
    <div>
      <h1>Movie Search</h1>
      <input
        type="text"
        value={movieTitle}
        onChange={(e) => setMovieTitle(e.target.value)}
        placeholder="Enter movie title"
      />
      <button onClick={handleSearch}>Search</button>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {movieData && (
        <div>
          <h2>{movieData.title}</h2>
          <img
            src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`}
            alt={movieData.title}
          />
          <p>{movieData.overview}</p>
        </div>
      )}
    </div>
  );
};

export default MovieSearch;
