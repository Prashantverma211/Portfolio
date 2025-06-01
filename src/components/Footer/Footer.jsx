import React from "react";
import { FaFacebook, FaLinkedin, FaInstagram  } from "react-icons/fa";

const Footer = () => {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]">
      <div className="container mx-auto text-center">
        <h2 className="text-xl font-semibold text-purple-500">Prashant Verma</h2>

        <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Experience", id: "experience" },
            { name: "Projects", id: "projects" },
            { name: "Education", id: "education" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="hover:text-purple-500 text-sm sm:text-base my-1"
            >
              {item.name}
            </button>
          ))}
        </nav>

        <div className="flex flex-wrap justify-center space-x-4 mt-6">
          {[
            { icon: <FaFacebook />, link: "hhttps://www.facebook.com/share/16r2Z7R1qa/?mibextid=wwXIfr" },
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/prashant-verma-472186228?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" },
            { icon: <FaInstagram />, link: "https://www.instagram.com/prashantvermax?igsh=OXJoZTNqMHQzeXBn&utm_source=qr" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-purple-500 transition-transform transform hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>

        <p className="text-sm text-gray-400 mt-6">
          © 2025 Prashant Verma. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;