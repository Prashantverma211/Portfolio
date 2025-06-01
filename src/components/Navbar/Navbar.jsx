import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
  ];


  return (
    <nav
      className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] ${
        isScrolled
          ? "bg-[#1a1466] bg-opacity-50 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="text-white py-5 flex justify-between items-center">
        <div className="text-xl font-extrabold cursor-pointer flex items-center space-x-1 group">
          <span className="text-[#4f8cc9] group-hover:text-[#76b9ff] transition duration-300">
            &lt;
          </span>

          <span className="bg-gradient-to-r from-[#3b82f6] via-[#60a5fa] to-[#3b82f6] bg-clip-text text-transparent">
            Prashant
          </span>

          <span className="text-[#4f8cc9] group-hover:text-[#76b9ff] transition duration-300">
            /
          </span>

          <span className="bg-gradient-to-r from-[#60a5fa] via-[#3b82f6] to-[#60a5fa] bg-clip-text text-transparent">
            Verma
          </span>

          <span className="text-[#4f8cc9] group-hover:text-[#76b9ff] transition duration-300">
            &gt;
          </span>
        </div>

        <ul className="hidden md:flex space-x-8 text-gray-300">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer hover:text-[#4f8cc9] ${
                activeSection === item.id ? "text-[#4f8cc9]" : ""
              }`}
            >
              <button onClick={() => handleMenuItemClick(item.id)}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex space-x-4">
          <a
            href="https://github.com/Prashantverma211"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#4f8cc9]"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/prashant-verma-472186228?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#4f8cc9]"
          >
            <FaLinkedin size={24} />
          </a>
        </div>

        <div className="md:hidden">
          {isOpen ? (
            <FiX
              className="text-3xl text-[#4f8cc9] cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl text-[#4f8cc9] cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {isOpen && (
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#1a1466] bg-opacity-50 backdrop-filter backdrop-blur-lg z-50 rounded-lg shadow-lg md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4 text-gray-300">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer hover:text-white ${
                  activeSection === item.id ? "text-[#4f8cc9]" : ""
                }`}
              >
                <button onClick={() => handleMenuItemClick(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}
            <div className="flex space-x-4">
              <a
                href="https://github.com/codingmastr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/tarun-kaushik-553b441a4"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
