import { Link as ScrollLink } from 'react-scroll';
import Signature from "../src/images/signature.png";
import DownloadIcon from "./images/icons8-download-24.png";

export default function HeaderLinks(): JSX.Element {
  function displayMenu() {
    const hamburgerMenu = document.getElementById("hamburger-menu");
    if (!hamburgerMenu) {
      return
    }
    hamburgerMenu.classList.toggle("show");
  }
  
  function hideMenu() {
    const hamburgerMenu = document.getElementById("hamburger-menu");
    hamburgerMenu.classList.remove("active");
  }

  return (
    <header id="header-container">
      <div id='menu'>
        <ScrollLink to='home' id='signature-container'  smooth={true} duration={500} href="#">
          <img id="signature-image" src={Signature} alt="Signature" />
        </ScrollLink>

        <div id="header-links-container">
          <button type="button" id='menu-btn' onClick={displayMenu}>
            <img width="40" height="40" src="https://img.icons8.com/ios/50/menu--v7.png" alt="menu--v7"/>
          </button>

          <ScrollLink to='projects' id='header-link' smooth={true} duration={500}>Projects</ScrollLink>
          <ScrollLink to='about' id='header-link' smooth={true} duration={500}>About</ScrollLink>
          <ScrollLink to='skills' id='header-link' smooth={true} duration={500}>Skills</ScrollLink>
          
          <a href="/Portfolio-Website/roxana_dandu_resume.pdf" download id="download-resume">
            <p>Resume</p>
            <img className="download-icon" src={DownloadIcon} alt="DownloadIcon" />
          </a>

        </div>

      </div>
      
      {/* dropdown button visible below 1054px */}
      <ul id='hamburger-menu'>
        <li><ScrollLink to='projects' id='hamburger-link' onClick={hideMenu} smooth={true} duration={500}>Projects</ScrollLink></li>
        <li><ScrollLink to='about' id='hamburger-link' onClick={hideMenu} smooth={true} duration={500}>About</ScrollLink></li>
        <li><ScrollLink to='skills' id='hamburger-link' onClick={hideMenu} smooth={true} duration={500}>Skills</ScrollLink></li>
      </ul>
    </header>
    
  );
}
  