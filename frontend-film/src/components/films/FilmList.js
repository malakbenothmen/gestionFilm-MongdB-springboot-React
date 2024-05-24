import React from 'react';
import { Link } from 'react-router-dom';
import { Table, Button } from 'react-bootstrap';

import api from '../../api/axiosConfig';
import './film.css';

const FilmList = ({ films, getFilms }) => {

  const deleteFilm = async (id) => {
    try {
      await api.delete(`/api/films/delete/${id}`);
      getFilms();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="film-list-container m-3">
      <h2>Film List</h2>
      <div className="table-responsive">
        <Table className="film-table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Genre</th>
              <th>Release Date</th>
              <th>Duration</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {films && films.length > 0 ? (
              films.map((film) => (
                <tr key={film.id}>
                  <td>
                    <img src={film.image} alt={film.title} className="film-image" />
                  </td>
                  <td>{film.title}</td>
                  <td>{film.genre}</td>
                  <td>{new Date(film.release_date).toLocaleDateString()}</td>
                  <td>{film.duration}</td>
                  <td>
                    <Link to={`/update-film/${film.id}`} className="btn btn-warning mr-2">Update</Link>
                    <Button variant="danger" onClick={() => deleteFilm(film.id)}>Delete</Button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6">No films available</td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
    </div>
  );
};





export default FilmList;
