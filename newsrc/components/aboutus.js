import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

function AboutTeamPage() {
  const teamMembers = [
    {
      name: 'John Doe',
      title: 'CEO',
      image: 'https://via.placeholder.com/150',
      bio:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac metus eget velit suscipit commodo a sed nulla.',
    },
    {
      name: 'Jane Doe',
      title: 'CTO',
      image: 'https://via.placeholder.com/150',
      bio:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac metus eget velit suscipit commodo a sed nulla.',
    },
    {
      name: 'Bob Smith',
      title: 'Lead Developer',
      image: 'https://via.placeholder.com/150',
      bio:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac metus eget velit suscipit commodo a sed nulla.',
    },
    {
      name: 'Sara Lee',
      title: 'Marketing Manager',
      image: 'https://via.placeholder.com/150',
      bio:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac metus eget velit suscipit commodo a sed nulla.',
    },
  ];

  return (
    <Container>
      <h1>About the Team</h1>
      <Row>
        {teamMembers.map((member, index) => (
          <Col key={index}>
            <Image src={member.image} roundedCircle />
            <h3>{member.name}</h3>
            <h4>{member.title}</h4>
            <p>{member.bio}</p>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default AboutTeamPage;
