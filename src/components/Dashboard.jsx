// src/components/Dashboard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MovieCard from './MovieCard';
import './Dashboard.css';

const Dashboard = ({ movies }) => {
  const navigate = useNavigate();

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Movie Collection</h1>
        <button className="add-movie-button" onClick={() => navigate('/add-movie')}>
          ➕ Add Movie
        </button>
      </header>
      <div className="movie-list">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
