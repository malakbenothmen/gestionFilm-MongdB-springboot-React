import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';
import api from '../../api/axiosConfig';

const FilmDetail = () => {
  const { id } = useParams();
  const [film, setFilm] = useState(null);

  const getFilmDetail = async (id) => {
    try {
      const response = await api.get(`/api/films/${id}`);
      setFilm(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getFilmDetail(id);
  }, [id]);

  if (!film) {
    return <div>Loading...</div>;
  }
  return (
    <Container className="mt-5">
      <Row>
        <Col md={4}>
          <Card style={{ width: '350px', height: '400px' }}>
            <Card.Img variant="top" src={film.image} alt={film.title} />
          </Card>
        </Col>
        <Col md={8}>
          <Card style={{ backgroundColor: '#222', color: '#fff', height: '400px' }}>
            <Card.Body>
              <Card.Title style={{ marginTop: '10px', height: '40px' }}><strong>{film.title}</strong></Card.Title>
              <Card.Text >
                <strong>Description:</strong> </Card.Text>
                <Card.Text>{film.description}
              </Card.Text>
              <Row>
                <Col md={6}>
                  <Card.Text><strong>Genre:</strong> {film.genre}</Card.Text>
                  <Card.Text><strong>Type:</strong> {film.type}</Card.Text>
                  <Card.Text><strong>Release Date:</strong> {new Date(film.release_date).toLocaleDateString()}</Card.Text>
                </Col>
                <Col md={6}>
                  <Card.Text><strong>Status:</strong> {film.status}</Card.Text>
                  <Card.Text><strong>Duration:</strong> {film.duration}</Card.Text>
                  <Card.Text><strong>Number Available:</strong> {film.num_available}</Card.Text>
                  <Card.Text><strong>Number Total:</strong> {film.num_total}</Card.Text>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default FilmDetail;
