import {
  IconProps,
  Experience,
  NavItem,
  ExternalLink,
  Project,
} from '../utils/types';
import jbhifi from '../assets/company/jbhifi.png';
import avanade from '../assets/company/avanade.png';
import ssc from '../assets/company/ss&c.webp';
// import shipments from '../assets/projects/shipments.png';
import localisation1 from '../assets/projects/localisation-1.png';
import trackMyOrder3 from '../assets/projects/track-my-order-3.png';
import war3bot from '../assets/projects/war3bot.png';
import {
  azure,
  cssLogo,
  dotnet,
  githubLogo,
  htmlLogo,
  linkedInLogo,
  materialUiLogo,
  mongodb,
  nextjsWhite,
  nodejsLogo,
  reactLogo,
  typescript,
  csharpLogo,
} from '../assets';

export const experiences: Array<Experience> = [
  {
    company: 'JB Hi-Fi',
    website: 'https://jbhifi.com.au',
    logo: jbhifi,
    logoBackground: 'yellow',
    role: 'Full stack developer',
    date: 'June 2021 - Present',
    duties: [
      'Develop and maintain full-stack web applications using a technology stack that includes React.js, Typescript, Next.js and Node.js.',
      'Develop portable, unopinionated components for a shared component library, ensuring they are highly reusable across all JB Hi-Fi applications. These components are thoroughly documented and showcased in Storybook.',
      'Leverage React Context API and React hooks to create decoupled and easily testable code.',
      'Utilize modern CSS and CSS-in-JS frameworks, including MUI5, Emotion, Styled Components, and Vanilla Extract, to develop responsive user interfaces based on Figma designs',
      'Engineer and maintain serverless architecture in both AWS and Azure, with both .NET Core and Node.js technologies.',
      'Skillful management and creation of build and release pipelines in Azure for streamlined application deployment and continuous integration.',
    ],
  },
  {
    company: 'Avanade',
    website: 'https://www.avanade.com/en-au',
    logo: avanade,
    logoBackground: 'white',
    role: 'Software Developer',
    date: 'January 2021 - June 2021',
    duties: [
      'Developed .NET Core, cloud-based (Azure) integration platform utilising Azure Event Hub and an event-driven architecture for the supply chain of a major Australian brand.',
      'Contributed to design process and design decisions and communicated with stakeholders to define project requirements.',
      'Created supporting project documentation.',
    ],
  },
  {
    company: 'SS&C Technologies',
    website: 'https://www.ssctech.com/',
    logo: ssc,
    logoBackground: 'white',
    role: 'Software Engineer',
    date: 'February 2020 - January 2021',
    duties: [
      'Developed, tested and maintained new and existing RESTful APIs with.NET Core.',
      'Contributed to the the re-write and migration of legacy applications to more modern frameworks',
      'Proactively identified and improved problem areas of applications.',
      'Designed, enhanced and implemented unit tests for newly written APIs using NUnit and Moq.',
    ],
  },
];

export const navItems: Array<NavItem> = [
  { title: 'About', target: 'about' },
  { title: 'Experience', target: 'experience' },
  { title: 'Projects', target: 'projects' },
  { title: 'Contact', target: 'contact' },
];

export const aboutDescription: string = `
  I'm a professional full-stack developer with a passion for delivering
  highly responsive, accessible and interactive web applications
  utilising TypeScript, Javascript and C# using frameworks like React and Next.js as well as Microsoft technologies such as .NET and Azure.
`;

export const skills: Array<IconProps> = [
  { name: 'react', description: 'react logo', imageUrl: reactLogo },
  { name: 'TypeScript', description: 'TypeScript logo', imageUrl: typescript },
  { name: 'csharp', description: 'c sharp logo', imageUrl: csharpLogo },
  { name: 'next.js', description: 'next.js logo', imageUrl: nextjsWhite },
  { name: 'html5', description: 'html5 logo', imageUrl: htmlLogo },
  { name: 'css3', description: 'css3 logo', imageUrl: cssLogo },
  { name: 'dotnet', description: 'dotnet core logo', imageUrl: dotnet },
  { name: 'azure', description: 'azure logo', imageUrl: azure },
  { name: 'nodejs', description: 'node.js logo', imageUrl: nodejsLogo },
  { name: 'mongoDb', description: 'mongodb logo', imageUrl: mongodb },
  {
    name: 'materialUi',
    description: 'material ui logo',
    imageUrl: materialUiLogo,
  },
];

export const socials: Array<ExternalLink> = [
  {
    icon: { name: 'github', description: 'github icon', imageUrl: githubLogo },
    target: 'https://github.com/adammeester',
  },
  {
    icon: {
      name: 'linkedIn',
      description: 'linkedIn Icon',
      imageUrl: linkedInLogo,
    },
    target: 'https://www.linkedin.com/in/adam-meester/',
  },
];

export const planetsNavMapping = {
  blackTop: 'experience',
  whiteLarge: 'about',
  whiteRinged: 'projects',
  blackBottom: 'contact',
};

export const projects: Array<Project> = [
  {
    type: 'major',
    title: 'Localisation Feature Enhancement (React.js)',
    imageUrl: localisation1,
    description:
      'A featured added to each product page, which allows customers to set their preferred store location & delivery location, and then have product availability seamlessly displayed to them automatically on each product page.',
    features: [
      'Utilised React.js and employed the React Context API and React Hooks to efficiently manage shared state of saved user location data.',
      "Implemented a user-friendly interface based on Figma designs accessible from any product page through the 'Set my location' button.",
    ],
    technologies: ['React', 'TypeScript'],
    link: {
      target:
        'https://www.jbhifi.com.au/products/samsung-galaxy-tab-s8-ultra-14-6-wi-fi-128gb-dark-grey',
    },
  },
  {
    type: 'major',
    title: 'Track My Order Page (React.js & .NET Core)',
    imageUrl: trackMyOrder3,
    description:
      'A new page added to the JB Hi-Fi website allowing customers to track the progress of their orders and view shipping updates.',
    features: [
      "Engineered and implemented a performant 'Track My Order' page using React.js in accordance with Figma designs.",
      'Architected and developed a robust, fully event-driven service in Azure to seamlessly capture order tracking events, leveraging .NET Core and CosmosDB.',
      'Developed an Azure functions app to retrieve order tracking data and dynamically serve page content to front-end application, ensuring a responsive and streamlined user and developer experience.',
      'Streamlined CI/CD workflows with implementation of GitHub Actions pipelines.',
    ],
    link: {
      target: 'https://www.jbhifi.com.au/pages/track-my-order',
    },
    technologies: ['React', 'TypeScript', 'C#', '.NET Core', 'Azure'],
  },
  {
    type: 'minor',
    title: 'Event-Driven Automated Warehousing (.NET Core)',
    description:
      'An event-driven automated warehousing solution for a large supermarket chain leveraging Azure Event Hub',
    features: [
      'Developed Next.js to interface with integration platform.',
      'Architected and designed a suite of integration tests for seamless and comprehensive regression testing.',
      'Worked as part of an agile team.',
    ],
    technologies: ['.NET Core', 'C#', 'Azure'],
    imageUrl: azure,
  },
  // {
  //   type: 'minor',
  //   title: 'Shipments application',
  //   description:
  //     'A basic shipments application built to experiment with and demonstrate the use of chakra ui',
  //   technologies: ['React', 'Chakra UI'],
  //   imageUrl: shipments,
  //   link: {
  //     target: 'https://github.com/adammeester/shipments-app',
  //     icon: {
  //       imageUrl: githubLogo,
  //       name: 'github',
  //       description: 'GitHub logo',
  //     },
  //   },
  // },
  {
    type: 'minor',
    title: 'Warcraft 3 Discord bot',
    description:
      'A basic Discord bot which scrapes Liquidpedia for upcoming Warcraft 3 professional matches',
    technologies: ['.NET Core', 'C#'],
    imageUrl: war3bot,
    link: {
      target: 'https://github.com/adammeester/warcraft3-discord-bot',
      icon: {
        imageUrl: githubLogo,
        name: 'github',
        description: 'GitHub logo',
      },
    },
  },
];
