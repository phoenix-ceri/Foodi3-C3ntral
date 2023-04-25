import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import "./index.scss"

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
        'Kelley is a highly motivated, creative, and personable Full-Stack Developer, who is always eager to grow and learn, based out of Central Florida.  She have experience in frontend languages such as HTML, CSS, CSS frameworks including Bootstrap and Tailwind, and JavaScript as well as back-end technologies such as Node.js, Express.js, jQuery, REACT, and databases including MySQL, MongoDB, and GraphQL. She loves to collaborate with like-minded individuals who are also looking to better the world around them through web development, such as her Foodie-Central teammates. Outside of the coding world, Kelley is a musician with a music degree in percussion, foodie, and fitness enthusiast. She also sings in a barbershop quartet.',
    },
    {
      name: 'Phoenix-Ceri Powell',
      title: 'Front End Engineer',
      image: 'https://media.discordapp.net/attachments/1068322599186202717/1098765553629413406/fifi-transformed.png?width=377&height=671',
      bio:
        'Phoenix is a highly motivated,resourceful, and organized Fullstack Developer. They are always looking for new things to learn and practice their skills on. They have experience with HTML5, CSS, Various CSS frameworks, Js, React, Python, MongoDB, SQL, and many others. They are always willing to work with others on engineering or coding projects. Outside of Programming Phoenix enjoys building robots, playing video games, and going on hikes to find and identify plants. ',
    },
  ];

  return (
    <Container>
      <h1>About the Team</h1>
      <Row>
        {teamMembers.map((member, index) => (
          <Col key={index}>
            <div className='aboutimg'>
            <Image src={member.image} roundedCircle />
            </div>
            <div className='aboutcard'>
            <h3>{member.name}</h3>
            <h4>{member.title}</h4>
            <p>{member.bio}</p>
            </div>
            <br/>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default AboutTeamPage;
