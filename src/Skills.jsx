import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Skills() {
    return (
        <>
            <div id='skills'>
                <Row id='about-section-container'>
                    <Row id='about-title-row'>
                        <Col className='component-title'>
                            Technical Skills
                        </Col>
                    </Row>
                    <Row id='skills-icons-row'>
                        <Col>
                            <div className='skill-container'>
                                <img className='skills-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg" alt='HTML5' />
                                <p className='skills-text'>
                                    HTML5
                                </p>
                            </div>
                        </Col>
                        <Col>
                            <div className='skill-container'>
                                <img className='skills-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg" alt='CSS3' />
                                <p className='skills-text'>
                                    CSS3
                                </p>
                            </div>
                        </Col>
                        <Col>
                            <div className='skill-container'>
                                <img className='skills-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt='Bootstrap' />
                                <p className='skills-text'>
                                    Bootstrap
                                </p>
                            </div>
                        </Col>
                        <Col>
                            <div className='skill-container'>
                                <img className='skills-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt='JavaScript' />
                                <p className='skills-text'>
                                    JavaScript
                                </p>
                            </div>
                        </Col>
                        <Col>
                            <div className='skill-container'>
                                <img className='skills-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt='React' />
                                <p className='skills-text'>
                                    React
                                </p>
                            </div>
                        </Col>
                        
                        <Col>
                            <div className='skill-container'>
                                <img className='skills-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" alt='Vite' />
                                <p className='skills-text'>
                                    Vite
                                </p>
                            </div>
                        </Col>
                        <Col>
                            <div className='skill-container'>
                                <img className='skills-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/webpack/webpack-plain.svg" alt='Webpack' />
                                <p className='skills-text'>
                                    Webpack
                                </p>
                            </div>
                        </Col>
                        <Col>
                            <div className='skill-container'>
                                <img className='skills-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt='Express' />
                                <p className='skills-text'>
                                    Express
                                </p>
                            </div>
                        </Col>
                        
                        <Col>
                            <div className='skill-container'>
                                <img className='skills-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt='node.js' />
                                <p className='skills-text'>
                                    node.js
                                </p>
                            </div>
                        </Col>
                        
                        <Col>
                            <div className='skill-container'>
                                <img className='skills-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt='MongoDB' />
                                <p className='skills-text'>
                                    MongoDB
                                </p>
                            </div>
                        </Col>
                        <Col>
                            <div className='skill-container'>
                                <img className='skills-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" alt='PostgreSQL' />
                                <p className='skills-text'>
                                    PostgreSQL
                                </p>
                            </div>
                        </Col>
                        <Col>
                            <div className='skill-container'>
                                <img className='skills-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg" alt='Jest' />
                                <p className='skills-text'>
                                    Jest
                                </p>
                            </div>
                        </Col>
                        <Col>
                            <div className='skill-container'>
                                <img className='skills-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mocha/mocha-original.svg" alt='Mocha' />
                                <p className='skills-text'>
                                    Mocha
                                </p>
                            </div>
                        </Col>
                        <Col>
                            <div className='skill-container'>
                                <img className='skills-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" alt='TailwindCSS' />
                                <p className='skills-text'>
                                    TailwindCSS
                                </p>
                            </div>
                        </Col>
                        <Col>
                            <div className='skill-container'>
                                <img className='skills-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg" />
                                <p className='skills-text'>
                                    Google Cloud
                                </p>
                            </div>
                        </Col>
                        <Col>
                            <div className='skill-container'>
                                <img className='skills-icon' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" />
                                <p className='skills-text'>
                                    Docker
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Row>
            </div>
        </>
    )
}