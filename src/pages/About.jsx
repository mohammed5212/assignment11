import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const About = () => {
  return (
    <div className="bg-light py-5">
      <Container>
        <Row className="mb-5 text-center">
          <Col>
            <h1 className="display-4 text-primary">About Our Company</h1>
            <p className="lead text-muted">
              We create high-quality digital experiences for modern businesses.
            </p>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col md={6}>
            <h3>Our Mission</h3>
            <p>
              Our mission is to deliver reliable, scalable, and cutting-edge solutions
              that empower businesses and enhance everyday digital interactions.
            </p>
          </Col>
          <Col md={6}>
            <h3>Our Vision</h3>
            <p>
              We envision a world where technology drives progress and brings people closer
              to the future they imagine. We aim to be the catalyst for that transformation.
            </p>
          </Col>
        </Row>

        <Row className="text-center">
          <Col md={4}>
            <Card className="shadow-sm border-0 h-100">
              <Card.Body>
                <i className="bi bi-lightning-charge-fill fs-1 text-warning"></i>
                <h5 className="mt-3">Fast Performance</h5>
                <p className="text-muted">We ensure lightning-fast loading times and responsiveness.</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="shadow-sm border-0 h-100">
              <Card.Body>
                <i className="bi bi-shield-check fs-1 text-success"></i>
                <h5 className="mt-3">Secure & Reliable</h5>
                <p className="text-muted">We prioritize security and data integrity in every project.</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="shadow-sm border-0 h-100">
              <Card.Body>
                <i className="bi bi-people-fill fs-1 text-info"></i>
                <h5 className="mt-3">Client-Centric</h5>
                <p className="text-muted">Our work is shaped by your goals and guided by your feedback.</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;