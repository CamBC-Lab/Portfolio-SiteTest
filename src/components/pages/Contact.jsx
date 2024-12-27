import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


function Contact() {
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }

    setValidated(true);
    
    if (form.checkValidity()) {
      // Handle form submission here
      console.log(formData);
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  }

  return (
    <Container className='ContactMe'>
        <Row>
        <Col>
            <h1 className="mb-12">Contact Me</h1>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                required
               type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              <Form.Control.Feedback type="invalid">
            Please provide your name.
            </Form.Control.Feedback>
            </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            required
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid email.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Message</Form.Label>
          <Form.Control
            required
            as="textarea"
            rows={4}
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">
            Please provide a message.
          </Form.Control.Feedback>
        </Form.Group>

        <Button type="submit" variant="primary">
          Send Message
        </Button>
      </Form>
      </Col>
      </Row>
      </Container>
  );
}

export default Contact;