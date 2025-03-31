import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link as ScrollLink } from 'react-scroll';
import Signature from "../src/images/signature.png";
import DownloadIcon from "./images/icons8-download-24.png";

export default function HeaderLinks() {
  return (
    <header id="header-container">
        <ScrollLink to='home'  smooth={true} duration={500} href="#">
          <img id="signature-image" src={Signature} alt="Signature" />
        </ScrollLink>
        <div id="header-links-container">
        
          {/* dropdown button visible below 1054px */}
          <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            </button>
            <ul className="dropdown-menu">
              <li><ScrollLink to='projects' smooth={true} duration={500} className="dropdown-item" href="#">Projects</ScrollLink></li>
              <li><ScrollLink to='about' smooth={true} duration={500} className="dropdown-item" href="#">About</ScrollLink></li>
              <li><ScrollLink to='skills' smooth={true} duration={500} className="dropdown-item" href="#">Skills</ScrollLink></li>
            </ul>
          </div>

          <ScrollLink to='projects' id='header-link' smooth={true} duration={500}>Projects</ScrollLink>
          <ScrollLink to='about' id='header-link' smooth={true} duration={500}>About</ScrollLink>
          <ScrollLink to='skills' id='header-link' smooth={true} duration={500}>Skills</ScrollLink>
          
          <a href='path_to_file' download={Signature} id='download-resume'>
            <p>Resume</p>
            <img id="download-icon" src={DownloadIcon} alt="DownloadIcon" />
          </a>
        </div>
    </header>
  );
}
  