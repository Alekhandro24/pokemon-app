import { FaGithub, FaLinkedin } from "react-icons/fa";
import avatarImage from "../assets/pikachu.png";
import Wrapper from "../sections/Wrapper";

const About = () => {
  return (
    <div className="profile">
      <img src={avatarImage} alt="avatarImage" className="profile-image" />
      <h1 className="profile-text">Hi I'm Pikachu</h1>
      <h2 className="profile-text">The creator of this awesome pokedex</h2>
      <h2 className="profile-text">
        This pet-project is create for my portfolio
      </h2>
      <div className="profile-links">
        <a
          href="https://github.com/Alekhandro24"
          target="_blank"
          rel="noreferrer nofollow"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/alekhandro-lagonavarro/"
          target="_blank"
          rel="noreferrer nofollow"
        >
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Wrapper(About);
