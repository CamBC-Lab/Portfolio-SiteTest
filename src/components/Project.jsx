import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import EmployeesImage from '../assets/EmployeesImage.jpg';
import PetNamin from '../assets/PetNamin.jpg';
import Weather from '../assets/Weather.jpg';
import VehicleBluePrint from '../assets/VehicleBluePrint.jpg';
import SocialNetwork from '../assets/SocialNetwork.jpg';
import readme from  '../assets/readme.jpg';

function Project() {
  const projects = [
    { title: 'EmployeeTracker', description: 'A employee tracker app using cli and MongoDB', image: EmployeesImage, ghLink:'https://github.com/CamBC-Lab/EmployeeTrackerSql'},
    { title: 'Pet Namer', description: 'A pet naming app using cli and node ', image: PetNamin, ghLink:'https://github.com/CamBC-Lab/Pet-Namin-Project' },
    { title: 'Weather Checker', description: 'A weather checker app using a third-party API', image: Weather, ghLink:'https://github.com/CamBC-Lab/WeatherChecker'},
    { title: 'Vehicle Builder', description: 'A vehicle builder app made with cli and node', image: VehicleBluePrint, ghLink:'https://github.com/CamBC-Lab/VehicleBuilderProj'},
    { title: 'Social Network API', description: 'A social network api made by MongoDB', image: SocialNetwork, ghLink:'https://github.com/CamBC-Lab/SocialNetworkAPIproject'},
    { title: 'ReadMe Generator', description: 'A readme generator app using node', image: readme, ghLink:'https://github.com/CamBC-Lab/ReadMeGen' },
    // Add more projects as needed
  ];

  return (
    <Container fluid className="project-container">
      <Row>
        {projects.map((project, index) => (
          <Col key={index} xs={12} sm={6} md={4} className="mb-4">
            <Card className="h-100">
              <Card.Img variant="top" src={project.image} />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <Card.Text>
                  <a href={project.ghLink}>github</a>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Project;