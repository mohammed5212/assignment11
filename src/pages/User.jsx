import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Spinner, Container, Card } from 'react-bootstrap';

const User = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error('User not found');
        return res.json();
      })
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setUser(null);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="text-center my-5">
        <Spinner animation="border" variant="info" />
        <p className="text-muted">Loading user data...</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="alert alert-danger text-center my-5">
        User not found.
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: '#f0f9ff', minHeight: '100vh', padding: '40px 0' }}>
      <Container>
        <Card className="mx-auto shadow" style={{ maxWidth: '600px', backgroundColor: '#ffffffcc' }}>
          <Card.Body>
            <h2 className="text-center text-primary mb-4">User Profile</h2>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <strong>Name:</strong> {user.name}
              </li>
              <li className="list-group-item">
                <strong>Email:</strong> {user.email}
              </li>
              <li className="list-group-item">
                <strong>Phone:</strong> {user.phone}
              </li>
              <li className="list-group-item">
                <strong>Username:</strong> {user.username}
              </li>
              <li className="list-group-item">
                <strong>Company:</strong> {user.company.name}
              </li>
              <li className="list-group-item">
                <strong>Website:</strong> {user.website}
              </li>
            </ul>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default User;