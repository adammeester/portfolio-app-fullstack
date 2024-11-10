import { iconMapping, projectImageMapping } from '../constants';
import { Project } from '../utils/types';

export class ProjectTransformer {
  static toProjectsWithContent = (projects: Array<Project>): Array<Project> => {
    return projects.map((project) => {
      return {
        ...project,
        imageUrl: projectImageMapping.get(project.imageUrl || ''),
        link: project.link
          ? {
              ...project.link,
              icon: project.link?.icon
                ? {
                    ...project.link?.icon,
                    imageUrl:
                      iconMapping.get(project.link?.icon?.imageUrl || '') || '',
                  }
                : undefined,
            }
          : undefined,
      };
    });
  };
}
