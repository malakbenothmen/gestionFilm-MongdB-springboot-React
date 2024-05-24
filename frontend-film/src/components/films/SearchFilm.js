import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import api from '../../api/axiosConfig';
import './film.css';

const SearchFilm = () => {
  const [searchTitle, setSearchTitle] = useState('');
  const [films, setFilms] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await api.get(`/api/films/search/title/${searchTitle}`);
      setFilms(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container className="mt-5">
      <Row className="mb-3 justify-content-center">
        <Col md={6}>
          <Form onSubmit={handleSearch}>
            <Form.Group controlId="formSearchTitle">
              <Form.Label>Search by Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter film title"
                value={searchTitle}
                onChange={(e) => setSearchTitle(e.target.value)}
                style={{ backgroundColor: '#333', color: '#fff' }} 
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-2">
              Search
            </Button>
          </Form>
        </Col>
      </Row>
      <Row>
        {films.length > 0 ? (
          films.map((film) => (
            <Col key={film.id} md={4} sm={6} xs={12} className="mb-3">
              <Card style={{ width: '250px' }}> {}
                <Card.Img variant="top" src={film.image} />
                <Card.Body>
                  <Card.Title>{film.title}</Card.Title>
                  <Card.Text className="card-description">{film.description}</Card.Text>

                  <Button href={`/film/${film.id}`} variant="info">Details</Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <Col>
            <p>No films found</p>
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default SearchFilm;
