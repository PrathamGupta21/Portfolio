import Card from 'react-bootstrap/Card';

const AboutCard = () => {
  return (
    <Card className='quote-card-view'>
      <Card.Body>
        <blockquote className='blockquote mb-0'>
          <p style={{ textAlign: 'justify' }}>
            Hi Everyone, I am <span className='purple'>Pratham Gupta </span>
            from <span className='purple'> Lakhimpur-Kheri, UP, India.</span>
            <br />I am currently employed as a
            <span className='purple'> Software Engineer</span> at
            <span className='purple'> Trianz Bangalore.</span>
            <br />I have completed{' '}
            <span className='purple'>Bachelor of Technology </span> (B.Tech) in
            Electronics Engineering from <span className='purple'> BVP</span>{' '}
            College of Engineering <span className='purple'>Pune.</span>
          </p>
          <p style={{ color: 'rgb(155 126 172)' }}>
            &quot;Do things that make a difference!&quot;
          </p>
          <footer className='blockquote-footer'>PRATHAM</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
};

export default AboutCard;
