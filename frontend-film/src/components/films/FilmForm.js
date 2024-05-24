import React, { useState } from 'react';
import { Form, Button, Card, Row, Col } from 'react-bootstrap';
import api from '../../api/axiosConfig';
import './film.css';

const FilmForm = ({ getFilms }) => {
  const [film, setFilm] = useState({
    title: '',
    image: '',
    background: '',
    description: '',
    type: '',
    genre: '',
    release_date: '',
    num_available: 0,
    num_total: 0,
    status: '',
    duration: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilm({
      ...film,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/api/films', film);
      console.log('Film added successfully:', response.data);
      setFilm({
        title: '',
        image: '',
        background: '',
        description: '',
        type: '',
        genre: '',
        release_date: '',
        num_available: 0,
        num_total: 0,
        status: '',
        duration: ''
      });
      getFilms();
    } catch (error) {
      console.error('There was an error adding the film!', error);
    }
  };

  return (
    <div className="form-container">
      <Card className="form-card">
        <Card.Header as="h5">Add New Film</Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    type="text"
                    name="title"
                    value={film.title}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Image</Form.Label>
                  <Form.Control
                    type="text"
                    name="image"
                    value={film.image}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <Form.Group>
                  <Form.Label>Background</Form.Label>
                  <Form.Control
                    type="text"
                    name="background"
                    value={film.background}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <Form.Group>
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="description"
                    value={film.description}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Type</Form.Label>
                  <Form.Control
                    type="text"
                    name="type"
                    value={film.type}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Genre</Form.Label>
                  <Form.Control
                    type="text"
                    name="genre"
                    value={film.genre}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Release Date</Form.Label>
                  <Form.Control
                    type="date"
                    name="release_date"
                    value={film.release_date}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Number Available</Form.Label>
                  <Form.Control
                    type="number"
                    name="num_available"
                    value={film.num_available}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Number Total</Form.Label>
                  <Form.Control
                    type="number"
                    name="num_total"
                    value={film.num_total}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Status</Form.Label>
                  <Form.Control
                    type="text"
                    name="status"
                    value={film.status}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Duration</Form.Label>
                  <Form.Control
                    type="text"
                    name="duration"
                    value={film.duration}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Button variant="outline-info" type="submit">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};
export default FilmForm;