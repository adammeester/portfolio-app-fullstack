using Microsoft.Extensions.Logging;
using Portfolio.Data;
using Portfolio.Data.Interface;
using Portfolio.Models;
using Portfolio.Models.Exception;
using Portfolio.Repository.Interface;

namespace Portfolio.Repository
{
    public class ProjectsRepository(IDataLoader dataLoader, ILogger<ProjectsRepository> logger) : IProjectsRepository
    {
        public async Task<List<Project>> AddProjectAsync(Project project)
        {
            // Think of this as almost like dbContext

            var updatedData = await dataLoader.SaveProjectAsync(project);

            if (updatedData.Data is null || updatedData.Data.Count == 0)
                throw new DataLoadingException<Project>("Failed to save new project data");

            return updatedData.Data;
        }

        public async Task<List<Project>> GetAllProjectsAsync()
        {
            var projectsData = await dataLoader.LoadProjectsData();

            if (projectsData.Data is null || projectsData.Data.Count == 0)
                throw new DataLoadingException<Project>("Failed to load project data");

            return projectsData.Data;
        }
    }
}
