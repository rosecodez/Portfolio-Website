/* eslint-disable react/no-unescaped-entities */
import Col from 'react-bootstrap/Col';

import { animate, stagger } from "motion"
import { splitText } from "motion-plus"
import { useEffect, useRef } from "react"

export default function HeaderHero(): JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);


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
                delay: (index: number) => i * 0.3 + index * 0.05,
              }
            );
          });
        });
      }, []);

    return (
        <div id='home'>
            <div id='hero-section-container'>
                <Col md={12} lg={2} id='hero-image-container'>
                  <img id='hero-image' src='https://res.cloudinary.com/dbmnceulk/image/upload/v1743635518/profile_swh5a2.jpg' alt='Decorative Image'></img>
                </Col>
                <Col md={12} lg={4} id='hero-text-container' ref={containerRef}>
                  <Col>
                    <h1 id='hero-title' className="h1">Hello, I'm Roxana,</h1>
                    <h1 id='hero-title' className="h1">A Full Stack Software Engineer.</h1>
                    <h1 id='hero subtitle' className="h1">Thank you for visiting my site today!</h1>
                  </Col>
                  <div id='logos-container'>
                    <a href='https://github.com/rosecodez'>
                      <img className='contact-logos' width="70" height="70" src="https://img.icons8.com/ios-glyphs/70/github.png" alt="github"/>
                    </a>
                    <a href="mailto:rosebeats09@gmail.com">
                      <img className='contact-logos' width="70" height="70" src="https://img.icons8.com/color/70/gmail-new.png" alt="gmail-new"/>
                    </a>
                    <a href='https://www.linkedin.com/in/roxana-dandu/'>
                      <img className='contact-logos' width="70" height="70" src="https://img.icons8.com/color/70/linkedin.png" alt="linkedin"/>                    </a>
                  </div>
                </Col>
            </div >
        </div>
    )
}