import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/profile2.png";
import React from "react";
import Typewriter from "typewriter-effect";

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hello, I am
          </h1>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Prashant Verma
          </h2>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight flex   ">
            <span className="text-white mr-2    ">I am a </span>
            <Typewriter
              options={{
                strings: ["FullStack Developer", "Software Developer", "Coder"],
                autoStart: true,
                loop: true,
              }}
            />
          </h3>
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            I’m a skilled full-stack developer with 1+ year of experience
            building web applications using ReactJS, NestJS, Python, GraphQL,
            and AWS. I craft seamless user experiences, scalable solutions, and
            maintainable code. I’ve contributed to e-commerce platforms,
            advocate management systems, and more, using modern frameworks like
            Jest and Tailwind CSS.
          </p>
          <a
            href="https://drive.google.com/file/d/1MW4YLpb8fAo28hdRWTi7_CMhRDWrY721/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: "linear-gradient(90deg, #8245ec, #a855f7)",
              boxShadow: "0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec",
            }}
          >
            DOWNLOAD RESUME
          </a>
        </div>
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Prashant Verma"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
