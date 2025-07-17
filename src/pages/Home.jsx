import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';

const Home = () => {
  return (
    <div style={{ backgroundColor: '#f0f2f5', minHeight: '100vh' }}>
      <Container className="py-5">
        <Row className="text-center mb-5">
          <Col>
            <h1 className="display-4">Welcome to TechNova Solutions</h1>
            <p className="lead">
              Empowering businesses with cutting-edge digital solutions.
            </p>
            <Button variant="primary" size="lg">
              Learn More
            </Button>
          </Col>
        </Row>

        <Row className="text-center mb-4 ,text-colo">
          <Col>
           <h2 style={{ color: '#007bff' }}>Our Services</h2>
          </Col>
        </Row>

        <Row className="g-4">
          {[ 
            {
              title: "Web Development",
              text: "Responsive and scalable websites tailored for your business."
            },
            {
              title: "Mobile Apps",
              text: "iOS & Android apps designed to enhance user experience and engagement."
            },
            {
              title: "Cloud Solutions",
              text: "Cloud migration, architecture, and security for modern enterprises."
            }
          ]?.map((service, index) => (
            <Col md={4} key={index}>
              <Card style={{ height: '100%', backgroundColor: '#ffffff', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                <Card.Body className="d-flex flex-column justify-content-between">
                  <div>
                    <Card.Title>{service.title}</Card.Title>
                    <Card.Text>{service.text}</Card.Text>
                  </div>
                  <Button variant="outline-primary" className="mt-3">Explore</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <Row className="text-center mt-5">
          <Col>
            <h3>Why Choose Us?</h3>
            <p>
              With 10+ years of experience and a team of dedicated professionals,
              TechNova helps you turn ideas into reality.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;