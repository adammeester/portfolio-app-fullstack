import { ReactNode, createContext, useContext, useState } from 'react';
import { Project } from '../utils/types';
import { useQuery } from 'react-query';
import { ContentApiClient } from '../api/ContentApiClient';

export interface ProjectsContextInterface {
  projects: Array<Project>;
  isLoading: boolean;
}

export type ProjectsContextType = {
  value?: ProjectsContextInterface;
  children: ReactNode;
};

export const ProjectsContext = createContext<ProjectsContextInterface | null>(
  null
);

const contentApiClient = new ContentApiClient();

export const ProjectsContextProvider = ({
  value,
  children,
}: ProjectsContextType) => {
  const [projects, setProjects] = useState<Array<Project>>([]);

  const handleFetchProjects = async () => {
    const projects = await contentApiClient.getAllProjects();

    setProjects(projects.data || []);
  };

  const { isLoading, data } = useQuery({
    enabled: true,
    queryKey: ['getAllProjects', projects.map((project) => project.title)],
    refetchOnWindowFocus: false,
    queryFn: handleFetchProjects,
  });
  console.log({ data });

  return (
    <ProjectsContext.Provider value={{ ...value, projects, isLoading }}>
      {children}
    </ProjectsContext.Provider>
  );
};

export const useProjectsContext = () => {
  const context = useContext(ProjectsContext);

  if (context === null) {
    throw new Error(
      'useProjectsContext must be called within a ProjectsContextProvider'
    );
  }

  const { projects, isLoading } = context as ProjectsContextInterface;

  return {
    projects,
    isLoading,
  };
};
