import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function AboutMe() {
    return (
      <Container>
        <Row>
          <Col>
            <h1>About Me</h1>
            <p>
                Hello My name is Branden and im an inspiring Developer with hopes of geting into full stack development.
                Im current enrolled in a coding bootcamp to help me get the skills i need to become a developer. 
                I have a passion for coding and learning new things. I have always taken computer classes in middle and high school the later i learned some C#.
                I have always been interested in coding and how things work; the problem solving aspect and the creativity and knowledge needed to come up with new solutions
                always intrigued me. I also have a passion for art, video games, movies, and music. I like that coding can be both combinig logic and creativity to make something
                interesting and innovative. I am excited to see where this journey takes me and what i can create with the skills i learn.
            </p>
            </Col>
      </Row>
    </Container>
  );
}

export default AboutMe;