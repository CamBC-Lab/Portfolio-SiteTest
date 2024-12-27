import Project from "../Project"
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


export default function Portfolio() {
    return (
        <Container>
            <Row>
                <Col>
                <h1>Portfolio Page</h1>
                <Project />
                </Col>
            </Row>
        </Container>
    
    )
}  
