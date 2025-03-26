/* eslint-disable react/no-unescaped-entities */
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HeroImage from './images/heroimage.png';

import { animate, stagger } from "motion"
import { splitText } from "motion-plus"
import { useEffect, useRef } from "react"

export default function HeaderHero() {
    const containerRef = useRef(null)

    useEffect(() => {
        document.fonts.ready.then(() => {
          if (!containerRef.current) return;
        
          containerRef.current.style.visibility = "visible";
      
          const headings = containerRef.current.querySelectorAll("h1");
      
          headings.forEach((heading, i) => {
            const { words } = splitText(heading);
            animate(
              words,
              { opacity: [0, 1], y: [10, 0] },
              {
                type: "spring",
                duration: 2,
                bounce: 0,
                delay: stagger(0.05, { start: i * 0.3 }),
              }
            );
          });
        });
      }, []);

    return (
        <div id='home'>
            <Row id='hero-section-container'>
                <Col md={12} lg={2} id='hero-image-container'>
                    <img id='hero-image' src={HeroImage} alt='Decorative Image'></img>
                </Col>
                <Col md={12} lg={4} id='hero-text-container' ref={containerRef}>
                    <Col>
                        <h1 id='hero-title' className="h1">Hello, I'm Roxana,</h1>
                        <h1 id='hero-title' className="h1">A Full Stack Software Engineer.</h1>
                        <h1 id='hero subtitle' className="h1">Thank you for visiting my site today!</h1>
                    </Col>
                </Col>
            </Row >
        </div>
    )
}