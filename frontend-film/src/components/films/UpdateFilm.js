import React, { useState, useEffect } from 'react';
import { Form, Button, Card, Row, Col } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../../api/axiosConfig';

const UpdateFilm = ({ getFilms }) => {
  const { id } = useParams();
  const navigate = useNavigate();
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

  useEffect(() => {
    const fetchFilm = async () => {
      try {
        const response = await api.get(`/api/films/${id}`);
        setFilm(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchFilm();
  }, [id]);

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
      await api.put(`/api/films/edit/${id}`, film);
      getFilms();
      navigate('/films');
    } catch (error) {
      console.error('There was an error updating the film!', error);
    }
  };

  return (
    <Card className="m-3">
      <Card.Header as="h5">Update Film</Card.Header>
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md={6}>
              <Form.Group>
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" name="title" value={film.title} onChange={handleChange} />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label>Image</Form.Label>
                <Form.Control type="text" name="image" value={film.image} onChange={handleChange} />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <Form.Group>
                <Form.Label>Background</Form.Label>
                <Form.Control type="text" name="background" value={film.background} onChange={handleChange} />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <Form.Group>
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={3} name="description" value={film.description} onChange={handleChange} />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Form.Group>
                <Form.Label>Type</Form.Label>
                <Form.Control type="text" name="type" value={film.type} onChange={handleChange} />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label>Genre</Form.Label>
                <Form.Control type="text" name="genre" value={film.genre} onChange={handleChange} />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Form.Group>
                <Form.Label>Release Date</Form.Label>
                <Form.Control type="date" name="release_date" value={film.release_date} onChange={handleChange} />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label>Number Available</Form.Label>
                <Form.Control type="number" name="num_available" value={film.num_available} onChange={handleChange} />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Form.Group>
                <Form.Label>Number Total</Form.Label>
                <Form.Control type="number" name="num_total" value={film.num_total} onChange={handleChange} />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label>Status</Form.Label>
                <Form.Control type="text" name="status" value={film.status} onChange={handleChange} />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Form.Group>
                <Form.Label>Duration</Form.Label>
                <Form.Control type="text" name="duration" value={film.duration} onChange={handleChange} />
              </Form.Group>
            </Col>
          </Row>
          <Button variant="outline-info" type="submit">Update</Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default UpdateFilm;
