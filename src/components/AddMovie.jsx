// src/components/AddMovie.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddMovie.css';

const AddMovie = ({ addMovie }) => {
  const navigate = useNavigate();
  const [movie, setMovie] = useState({
    title: '',
    director: '',
    genre: '',
    releaseYear: '',
    synopsis: '',
    posterUrl: '',
  });

  const handleChange = (e) => {
    setMovie({ ...movie, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!movie.title || !movie.director || !movie.genre || !movie.releaseYear || !movie.posterUrl) {
      alert('Please fill out all required fields.');
      return;
    }
    addMovie(movie);
    navigate('/'); // Redirect to home after adding movie
  };

  return (
    <div className="add-movie-container">
      <h2>Add New Movie</h2>
      <form className="add-movie-form" onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Movie Title" value={movie.title} onChange={handleChange} required />
        <input type="text" name="director" placeholder="Director" value={movie.director} onChange={handleChange} required />
        <select name="genre" value={movie.genre} onChange={handleChange} required>
          <option value="">Select Genre</option>
          <option value="Action">Action</option>
          <option value="Drama">Drama</option>
          <option value="Comedy">Comedy</option>
        </select>
        <input type="number" name="releaseYear" placeholder="Release Year" value={movie.releaseYear} onChange={handleChange} required />
        <textarea name="synopsis" placeholder="Synopsis" value={movie.synopsis} onChange={handleChange} required />
        <input type="text" name="posterUrl" placeholder="Poster Image URL" value={movie.posterUrl} onChange={handleChange} required />

        <div className="form-buttons">
          <button type="button" onClick={() => navigate('/')}>❌ Cancel</button>
          <button type="submit">✅ Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddMovie;
