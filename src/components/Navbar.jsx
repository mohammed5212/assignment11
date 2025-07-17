import { useNavigate, NavLink } from 'react-router-dom';
import { useState } from 'react';
import {
  Navbar,
  Nav,
  Container,
  Form,
  Button,
  Alert,
} from 'react-bootstrap';

const NavigationBar = () => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState('');
  const [error, setError] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();

    const idNum = parseInt(userId.trim());

    if (!userId || isNaN(idNum) || idNum < 1 || idNum > 10) {
      setError('Please enter a valid user ID between 1 and 10');
      return;
    }

    setError('');
    navigate(`/user/${idNum}`);
    setUserId('');
  };

  return (
    <>
      <Navbar expand="lg" style={{ backgroundColor: '#1a1a40' }} variant="dark">
        <Container>
          <Navbar.Brand href="/" className="text-warning">My App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink to="/" className="nav-link text-light">Home</NavLink>
              <NavLink to="/about" className="nav-link text-light">About</NavLink>
              <NavLink to="/contact" className="nav-link text-light">Contact</NavLink>
            </Nav>

            <Form className="d-flex" onSubmit={handleSearch}>
              <Form.Control
                type="text"
                placeholder="User ID (1–10)"
                className="me-2"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                style={{
                  backgroundColor: '#f0f0f0',
                  border: '1px solid #ccc',
                  width: '130px',
                }}
              />
              <Button variant="warning" type="submit">
                Go
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {error && (
        <Alert
          variant="danger"
          className="text-center rounded-0 mb-0"
          onClose={() => setError('')}
          dismissible
        >
          {error}
        </Alert>
      )}
    </>
  );
};

export default NavigationBar;