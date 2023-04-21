import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

function AboutTeamPage() {
  const teamMembers = [
    {
      name: 'Eva Perez',
      title: 'Co-Lead & Backend',
      image: 'https://media.discordapp.net/attachments/1068322599186202717/1098765556506689586/eva-transformed.png?width=497&height=671',
      bio:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac metus eget velit suscipit commodo a sed nulla.',
    },
    {
      name: 'Jeff Zulma',
      title: 'Front End Engineer',
      image: 'https://media.discordapp.net/attachments/1068322599186202717/1098765554233376889/jeff-NeuOCDVAs-transformed.png?width=534&height=671',
      bio:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac metus eget velit suscipit commodo a sed nulla.',
    },
    {
      name: 'Kelley Flinn',
      title: 'Co-Lead & Backend',
      image: 'https://media.discordapp.net/attachments/1068322599186202717/1098765554908676116/kelley-transformed.png?width=360&height=669',
      bio:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac metus eget velit suscipit commodo a sed nulla.',
    },
    {
      name: 'Phoenix-Ceri Powell',
      title: 'Front End Engineer',
      image: 'https://media.discordapp.net/attachments/1068322599186202717/1098765553629413406/fifi-transformed.png?width=377&height=671',
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
