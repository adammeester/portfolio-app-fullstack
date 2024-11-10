using Portfolio.Data;
using Portfolio.Models;
using Portfolio.Models.Exception;
using Portfolio.Repository.Interface;

namespace Portfolio.Repository
{
    public class ProjectsRepository : IProjectsRepository
    {
        public async Task<List<Project>> AddProjectAsync(Project project)
        {
            // Think of this as almost like dbContext
            var projectsData = await DataLoader.LoadProjectsData();

            projectsData.Data ??= [];

            projectsData.Data.Add(project);

            var updatedData = await DataLoader.SaveProjectsAsync(projectsData.Data);

            if (updatedData.Data is null || updatedData.Data.Count == 0)
                throw new DataLoadingException<Project>("Failed to save new project data");

            return updatedData.Data;
        }

        public async Task<List<Project>> GetAllProjectsAsync()
        {
            var projectsData = await DataLoader.LoadProjectsData();

            if (projectsData.Data is null || projectsData.Data.Count == 0)
                throw new DataLoadingException<Project>("Failed to load project data");

            return projectsData.Data;
        }
    }
}
