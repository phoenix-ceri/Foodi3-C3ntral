import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import "./index.scss"

function AboutTeamPage() {
  const teamMembers = [
    {
      name: 'Eva Perez',
      title: 'Co-Lead & Backend',
      image: 'https://media.discordapp.net/attachments/1068322599186202717/1101598493828718664/eva-transformed.png?width=542&height=903',
      bio:
        "Eva is a Guatemalan-Chinese Woman with a desire to learn, grow, and create using any and all of her skills ranging from leadership to full-stack web development, to cross-cultural communications. She enjoys frontend and backend development mixing JavaScript and HTML as it is in React and building databases to save information and integrate 3rd party APIs! She owned her own Etsy business making custom jewelry and studied medicine, languages, and technology to make a conglomerate of widely-versed skill sets.",
    },
    {
      name: 'Jeff Zulma',
      title: 'Front End Engineer',
      image: 'https://media.discordapp.net/attachments/1068322599186202717/1101597410846842927/jeff-transformed.png?width=542&height=903',
      bio:
        'Jeff is a nose diving, creative Full-Stack Developer, who enjoys learning. He is based in South Florida. He currently works as an Analyst for a renewable energy company. Throughout the course he has learned several frontend languages such as HTML, CSS, REACT, JavaScript and frameworks such as Bootstrap and Tailwind. On the backend side he has learned Node.js, jQuery, REACT and GraphQL. Outside of coding Jeff enjoys coaching youth football.',
    },
    {
      name: 'Kelley Flinn',
      title: 'Co-Lead & Backend',
      image: 'https://media.discordapp.net/attachments/1068322599186202717/1101597741500604496/kelley-transformed.png?width=542&height=903',
      bio:
        'Kelley is a highly motivated, creative, and personable Full-Stack Developer, who is always eager to grow and learn, based out of Central Florida.  She have experience in frontend languages such as HTML, CSS, CSS frameworks including Bootstrap and Tailwind, and JavaScript as well as back-end technologies such as Node.js, Express.js, jQuery, REACT, and databases including MySQL, MongoDB, and GraphQL. She loves to collaborate with like-minded individuals who are also looking to better the world around them through web development, such as her Foodie-Central teammates. Outside of the coding world, Kelley is a musician with a music degree in percussion, a foodie, and a fitness enthusiast. She also sings in a barbershop quartet.',
    },
    {
      name: 'Phoenix-Ceri Powell',
      title: 'Front End Engineer',
      image: 'https://media.discordapp.net/attachments/1068322599186202717/1101977409286328420/fifi-transformed.png?width=542&height=903',
      bio:
        'Phoenix is a highly motivated,resourceful, and organized Fullstack Developer. They are always looking for new things to learn and practice their skills on. They have experience with HTML5, CSS, Various CSS frameworks, Js, React, Python, MongoDB, SQL, and many others. They are always willing to work with others on engineering or coding projects. Outside of Programming Phoenix enjoys building robots, playing video games, and going on hikes to find and identify plants. ',
    },
  ];

  return (
    <Container className='bios'>
      <h1>About the Team</h1>
      <Row>
        {teamMembers.map((member, index) => (
          <Col key={index}>
            <div className='aboutimg'>
              <Image src={member.image} width="200px" />
            </div>
            <div className='aboutcard'>
              <h3>{member.name}</h3>
              <h4>{member.title}</h4>
              <p>{member.bio}</p>
            </div>
            <br />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default AboutTeamPage;
