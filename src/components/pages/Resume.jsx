import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


export default function Resume() {
    return (
        <Container className='ResumePage'>
             <Row>
             <Col>
                <h1>Resume Page</h1>
                    <div id='Front-End'>
                        <h2>Front-End Proficencies</h2>
                            <ul>
                                <li>CSS</li>
                                <li>HTML</li>
                                <li>JavaScript</li>
                                <li>Resonsive Design</li>
                                <li>React</li>
                                <li>Bootstrap</li>
                                <li>JQuery</li>  
                                <li>CI-CD</li>
                                <li>Vitest</li>
                                <li>Cypress</li>
            </ul>
            </div>
            <div id='Back-End'>
                <h2>Back-End Proficencies</h2>
                <ul>
                <li>API</li>
                <li>Express</li>
                <li>MongoDB</li>
                <li>TypeScript</li>
                <li>REST</li>
                <li>JWT Authentication</li>
                <li>Mongoose</li>
                </ul>
            </div>
            </Col>
            </Row>
        </Container>
    )
}