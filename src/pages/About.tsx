import Wrapper from "../sections/Wrapper";
import avatarImage from "../assets/pikachu.png";
import { FaYoutube, FaGithub, FaLinkedin } from "react-icons/fa";

const About = () => {
  return (
    <div className="profile">
      <img src={avatarImage} alt="avatarImage" className="profile-image" />
      <h1 className="profile-text">Hi I'm Pikachu</h1>
      <h2 className="profile-text">The creator of this awesome pokedex</h2>
      <h4 className="profile-text">
        This pet-project is create for my portfolio
      </h4>
      <div className="profile-links">
        <a href="/">
          <FaGithub />
        </a>
        <a href="/">
          <FaYoutube />
        </a>
        <a href="/">
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Wrapper(About);
