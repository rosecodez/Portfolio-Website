import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function About() {
    return (
        <>
            <div id='about'>
                <Row id='about-section-container'>
                    <Row id='about-title-row'>
                        <Col className='component-title'>
                            About Me
                        </Col>
                    </Row>
                    <Row className='about-text-row'>
                        <Col className='about-text'>
                            Hello there! 
                        </Col>
                    </Row>
                    <Row className='about-text-row'>
                        <Col className='about-text'>
                            My journey into tech began when I was just 10 years old. My parents introduced me to our family computer, and from that point on, I was hooked. As a teenager, I upgraded our old desktop to stop The Sims 2 from crashing, and I often found myself troubleshooting Windows errors just to keep the system running. I never gave up until it worked and the internet always had the answer! During the COVID time, I even built an online beats store using Beatstars. That experience taught me how website sections work, how to upload, link, and organize files, and sparked a growing curiosity for how websites are built.
                        </Col>
                    </Row>
                    <Row className='about-text-row'>
                        <Col className='about-text'>
                            In June 2023, I officially began my coding journey after discovering The Odin Project through a video about learning web development. Since then, I've taught myself how to code from the ground up with HTML, CSS, JavaScript, and beyond. Thanks to an incredibly supportive community and a comprehensive curriculum, I learned to plan, build, and deploy full stack web applications. The Discord community was a constant source of encouragement and knowledge. I'll always be grateful to those who explained things with so much clarity and patience. One mentor even guided me for days to help me grasp testing in an OOP-based project.
                        </Col>
                    </Row>
                    <Row className='about-text-row'>
                        <Col className='about-text'>
                            Today, I work with a diverse stack of technologies to deliver solutions that align with each project’s unique requirements. I'm passionate about continuous learning and am always ready to pick up new languages, frameworks, or databases. My skills include creating and consuming RESTful APIs, implementing responsive design for all screen sizes, and building secure user authentication systems.
                        </Col>
                    </Row>
                    <Row className='about-text-row'>
                        <Col className='about-text'>
                            From idea to launch, I love designing and developing websites, whether for myself, others, or future employers. If you're curious about my work, want to collaborate, or are interested in hiring me, feel free to reach out through the contact form above.
                        </Col>
                    </Row>
                    <Row className='about-text-row'>
                        <Col className='about-text'>
                            Thank you for visiting my site, and I hope you have a fantastic day!
                        </Col>
                    </Row>
                </Row>
            </div>
        </>
    )
}