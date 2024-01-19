import "./navbar.css";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import logo from "../../images/Intartica-logo.png";

const Navbar = () => {
  const state = {
    imageUrl: logo,
  };

  const hoverEffect = {
    whileHover: { scale: 1.2 },
    whileTap: { scale: 0.8 },
  };

  return (
    <div className="navbar py-2">
      <motion.div {...hoverEffect}>
        <Link to="/">
          <img
            className="home-logo"
            src={state.imageUrl}
            alt="Intartica Logo"
          />
        </Link>
      </motion.div>
      <div className="option">
        <motion.div {...hoverEffect} className="nav-btn">
          <Link to="/about">About</Link>
        </motion.div>
        <motion.div {...hoverEffect} className="nav-btn">
          <Link to="/services">Services</Link>
        </motion.div>
        {/* <motion.div {...hoverEffect} className="nav-btn">
          <Link to="/services">Products</Link>
        </motion.div>
        <motion.div {...hoverEffect} className="nav-btn">
          <Link to="/services">Our Work</Link>
        </motion.div> */}
        <motion.div {...hoverEffect} className="nav-btn">
          <Link to="/gallery">Gallery</Link>
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
