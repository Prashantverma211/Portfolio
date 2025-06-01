// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import nextjsLogo from "./assets/tech_logo/nextjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import cLogo from "./assets/tech_logo/c.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import typescriptLogo from "./assets/tech_logo/typescript.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import GraphQLLogo from "./assets/tech_logo/GraphQL.png";
import NestjsLogo from "./assets/tech_logo/NestjsLogo.png";
import JestLogo from "./assets/tech_logo/JestLogo.png";
import AWSLogo from "./assets/tech_logo/AWSLogo.png";
import FastAPILogo from "./assets/tech_logo/FastAPILogo.png";

// Experience Section Logo's
import CodingNinjaLogo from './assets/company_logo/CodingNinjaLogo.png';
import EdvironLogo from './assets/company_logo/EdvironLogo.png';
import RelianceLogo from './assets/company_logo/RelianceLogo.png';

// Education Section Logo's
import NSUTLogo from './assets/education_logo/NSUTLogo.png'
import GVPSLogo from './assets/education_logo/GVPS.png'

// Project Section Logo's
import MahadevFluteLogo from "./assets/work_logo/MahadevFlutes.png"

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Next JS", logo: nextjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "GraphQL", logo: GraphQLLogo },
      { name: "Nestjs", logo: NestjsLogo },
      { name: "FastAPI", logo: FastAPILogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "TypeScript", logo: typescriptLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "C++", logo: cppLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Amazon AWS", logo: AWSLogo },
      { name: "Jest", logo: JestLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: RelianceLogo,
    role: "Graduate Engineer Trainee",
    company: "Reliance",
    date: "August 2024 - Present",
    desc: "Currently working as a GET at Reliance Industries in the DDP Division, where I develop inter-division web applications using ReactJS and NodeJS. I write unit tests with Jest, leverage GitHub Actions for CI/CD, and collaborate with cross-functional teams to ensure high-quality features and smooth deployments.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "Node JS",
      "Tailwind CSS",
      "MongoDb",
    ],
  },
  {
    id: 1,
    img: EdvironLogo,
    role: "Fullstack Engineer / Software Developer",
    company: "Edviron",
    date: "Nov 2023 - June 2024",
    desc: "At Edviron, an EdTech startup specializing in fee processing solutions, I worked as a Software Developer Intern where I optimized API performance, implemented robust monitoring systems, and developed tools to streamline data flow. Leveraging technologies like NestJS, ReactJS, GraphQL, AWS, and Jest, I significantly enhanced system efficiency and reliability while ensuring a seamless user experience.",
    skills: [
      "ReactJS",
      "Nestjs",
      "JavaScript",
      "Tailwind CSS",
      "Amazon AWS",
      "MongoDB",
      "Graphql",
      "Nest"
    ],
  },
  {
    id: 2,
    img: CodingNinjaLogo,
    role: "Teaching Assistant",
    company: "Coding Ninjas",
    date: "Jan 2023 - Jun 2023",
    desc: "At Coding Ninjas, I supported students in mastering coding concepts using C/C++. I conducted doubt sessions, resolving over 350 coding problems, assisted in debugging and optimizing code to improve students’ performance, and guided them through assignments and projects. My efforts earned a stellar average rating of 4.8 out of 5.0 from student feedback.",
    skills: ["C","C++","DSA"],
  },
];

export const education = [
  {
    id: 0,
    img: NSUTLogo,
    school: "Netaji Subhas University of Technology",
    date: "April 2020 - Jun 2024",
    grade: "7.31 CGPA",
    desc: "Completed a B.Tech in Instrumentation and Control Engineering from Netaji Subhas University of Technology, where I actively engaged in tech societies, hackathons, and competitive coding contests. Consistently ranked in the top 1% (AIR <1%) in national coding competitions.",
    degree: "Batchelor in Technology, Instrumentation and control engineering",
  },
  {
    id: 2,
    img: GVPSLogo,
    school: "Golden Valley Public School, Delhi",
    date: "July 2019 - March 2020",
    grade: "83.4%",
    desc: "Completed my 12th from Golden Valley Public School (CBSE Board, Delhi) in Science (Non-Medical) stream, studying Physics, Chemistry, and Mathematics.",
    degree: "CBSE(XII) - PCM with Computer Science",
  },
  {
    id: 3,
    img: GVPSLogo,
    school: "Golden Valley Public School, Delhi",
    date: "March 2017 - April 2018",
    grade: "77.00%",
    desc: "I completed my class 10 education from Golden Valley Public School, Delhi, under the CBSE board, where I studied Science with Computer.",
    degree: "CBSE(X), Science with Computer Application",
  },
];

export const projects = [
  {
    id: 0,
    title: "Flute Selling Site",
    description:
      "ABuilt a complete e-commerce site for a local flute wholesaler using ReactJS and NodeJS. Integrated secure payment gateway, dynamic product listings, and order management.",
    image: MahadevFluteLogo,
    tags: ["HTML", "CSS", "JavaScript", "React JS", "Nodejs"],
    webapp: "https://flute-user-front-end.vercel.app/",
  },
];
