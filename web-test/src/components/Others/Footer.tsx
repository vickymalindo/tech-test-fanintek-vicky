import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import './style.css';

const Footer = () => {
  return (
    <footer className="mt-5">
      <div className="d-flex justify-content-center align-items-center">
        <p className="mr-1 credits-text">Developed by</p>
        <a
          className="mhq"
          target="_blank"
          href="https://www.linkedin.com/in/vickymalindoap/"
        >
          Vicky Malindo / Nyu
        </a>
      </div>
      <a
        className="view-code"
        target="_blank"
        href="https://github.com/vickymalindo"
      >
        View code on Github
        <FontAwesomeIcon className="ml-2" icon={faGithub} />
      </a>
    </footer>
  );
};

export default Footer;
