import {
  EmailIcon,
  FigmaIcon,
  CanvaIcon,
  GithubIcon,
  GitIcon,
  JavascriptIcon,
  LinkedinIcon,
  NextjsIcon,
  ReactIcon,
  SassIcon,
  TailwindcssIcon,
  TwitterIcon,
  WebpackIcon,
} from "./SvgIcon.js";

export const Projects = [
  {
    projectTitle: "Country Details",
    shortDescription:
      "Web application to display country details with search, filter, sort, and dark mode functionalities",
    techStack: ["React", "SASS"],
    demoLink: "https://countries-api-in-react.vercel.app/",
    codeBaseLink: "https://github.com/karishma-c/reactjs-from-scratch",
  },
];

export const areaOfInterest = [
  "Building reusable Components",
  "Responsive Design",
  "UI Development",
  "UI/UX Design",
  "Wireframing",
  "Prototyping"
];

const javascriptFramework = [
  {
    tech: "React",
    icon: ReactIcon,
  }
];

const reactFramework = [
  {
    tech: "Nextjs",
    icon: NextjsIcon,
  }
];

const cssEcosystem = [
  {
    tech: "SASS",
    icon: SassIcon,
  },
  {
    tech: "Tailwindcss",
    icon: TailwindcssIcon,
  },
];

const programmingLanguage = [
  {
    tech: "Javascript",
    icon: JavascriptIcon,
  },
];

const tooling = [
  {
    tech: "Webpack",
    icon: WebpackIcon,
  },
  {
    tech: "Git",
    icon: GitIcon,
  },
];

const designSkills = [
  {
    tech: "Figma",
    icon: FigmaIcon,
  },
];

export const skills = [
  ...javascriptFramework,
  ...cssEcosystem,
  ...programmingLanguage,
  ...reactFramework,
  ...tooling,
  ...designSkills,
];

export const socialMediaLinks = [
  {
    icon: GithubIcon,
    label: "Github",
    source: "https://github.com/karishma-c",
  },
  {
    icon: TwitterIcon,
    label: "Twitter",
    source: "https://twitter.com/_karishc",
  },
  {
    icon: LinkedinIcon,
    label: "Linkedin",
    source: "https://www.linkedin.com/in/karishma--c/",
  },
  {
    icon: EmailIcon,
    label: "Email",
    source: "mailto:ckarishma.dev@gmail.com",
  },
];
