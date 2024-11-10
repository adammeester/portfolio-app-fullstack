import { projects } from '../../constants';
import { Technologies } from '../../utils/types';
import styles from './Projects.module.css';
import { Card } from '../Card';
// import { IoNavigateOutline } from 'react-icons/io5';
import { IoIosLink } from 'react-icons/io';
import { Planet } from '../PlanetCanvas';
import { Project } from '../Project/Project';
import { ShootingStar } from '../ShootingStar';
import { useProjectsContext } from '../../context';

type TechMapping = {
  [key in Technologies]: string;
};

const techMapping: TechMapping = {
  React: '#33e0ff',
  'C#': '#4eef8c',
  TypeScript: '#0080ff',
  '.NET Core': '#944eef',
  'Chakra UI': '#ff5733',
  'Material UI': '#ff5733',
  Azure: '#266288',
};

export const Projects = () => {
  const { projects, isLoading } = useProjectsContext();
  return (
    <section id='projects' className={styles.container}>
      <ShootingStar />
      <h1>Projects</h1>

      <Planet planet='whiteRinged' />

      <div className={styles.content}>
        {projects.map((project, i) => {
          return (
            <Card
              key={i}
              size={project.type === 'major' ? 'large' : 'default'}
              header={
                project.link ? (
                  <a
                    className={styles.projectLink}
                    href={project.link.target}
                    target='_blank'
                  >
                    {project.link.icon ? (
                      <img
                        src={project.link.icon?.imageUrl}
                        alt={project.link.icon?.name}
                      />
                    ) : (
                      <IoIosLink className={styles.linkIcon} />
                    )}
                  </a>
                ) : undefined
              }
              image={{ url: project.imageUrl || '', alt: project.title || '' }}
              content={
                <Project
                  title={project.title}
                  description={project.description}
                  features={project.features}
                />
              }
              footer={
                <div className={styles.techContainer}>
                  {project.technologies?.map((tech) => {
                    return (
                      <span
                        key={tech}
                        className={styles.tech}
                        style={{ color: techMapping[tech] }}
                      >
                        #{tech}
                      </span>
                    );
                  })}
                </div>
              }
            />
          );
        })}
      </div>
      {/* <div style={{ position: 'relative', width: '100%' }}>
        <ProjectCardCarousel
          slides={[
            { url: projects[0].imageUrl || '', alt: projects[0].title },
            { url: projects[1].imageUrl || '', alt: projects[1].title },
          ]}
        />
      </div> */}
    </section>
  );
};
