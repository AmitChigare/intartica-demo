import "./navbar.css";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

const Navbar = () => {
  const state = {
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/9a75/0fad/0949c8bbb44419ca3007e85cdcc087e9?Expires=1702252800&Signature=E78WEeNA~h06mYyRPRm910TtPR80Al7iZ~BcJYI0An~wCcrN5f7RrLkjFzbZGbZ3b-fZep3j7DllorW0Jm~RN5bGYf-46fOeapU7j3nMY-BymEZoIaxnjKRa8L25LuYQTZkEClmZndQZLsDmjvRc9jmC9JGYDPbTVwLJte8lqqC4J1KoYXNCgdzCriLhJU2iE~b~3SXxl2o5ZdaIV9FfMeW7-UCNLj9PoZNrfng6JV4h-v6bWf4GCbsXbfVN7rDh8sUAQPUP6S04i1jhquHC7z9ruW7B2ERHWplZvMxeJet4qOmY-8Rfp4FKUl6Ost4dW8CiF5hdNtjSJIdidVQF2g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  };

  const hoverEffect = {
    whileHover: { scale: 1.2 },
    whileTap: { scale: 0.8 },
  };

  return (
    <div className="navbar">
      <motion.div {...hoverEffect}>
        <Link to="/">
          <img className="home-logo" src={state.imageUrl} alt="Home Logo" />
        </Link>
      </motion.div>
      <div className="option">
        <motion.div {...hoverEffect} className="nav-btn">
          <Link to="/about">About</Link>
        </motion.div>
        <motion.div {...hoverEffect} className="nav-btn">
          <Link to="/services">Services</Link>
        </motion.div>
        <motion.div {...hoverEffect} className="nav-btn">
          <Link to="/our-work">Our Work</Link>
        </motion.div>
        <motion.div {...hoverEffect} className="nav-btn contact-btn">
          <Link className="btn btn-danger" to="/contact">
            Contact Us <Icon icon="ph:arrow-up-right-light" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
