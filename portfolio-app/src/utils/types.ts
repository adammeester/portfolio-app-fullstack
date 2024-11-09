import { planetsNavMapping } from '../constants';

export interface Experience {
  company: string;
  website: string;
  logo: string;
  logoBackground: string;
  role: string;
  date: string;
  duties: Array<string>;
}

export interface Project {
  type: 'major' | 'minor';
  title: string;
  description: string;
  features?: Array<string>;
  imageUrl?: string;
  link?: ExternalLink;
  technologies?: Array<Technologies>;
}

export type NavItem = {
  title: string;
  target: string;
};

export type IconProps = {
  name: string;
  description: string;
  imageUrl: string;
};

export type ExternalLink = {
  icon?: IconProps;
  target: string;
};

export type NavTarget = 'contact' | 'experience' | 'about' | 'projects';

export type PlanetNavKey = keyof typeof planetsNavMapping;

export type Technologies =
  | 'React'
  | 'C#'
  | 'TypeScript'
  | '.NET Core'
  | 'Chakra UI'
  | 'Material UI'
  | 'Azure';
