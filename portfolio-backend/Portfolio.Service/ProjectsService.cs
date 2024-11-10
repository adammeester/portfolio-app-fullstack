using Microsoft.Extensions.Logging;
using Portfolio.Models;
using Portfolio.Models.Request;
using Portfolio.Repository.Interface;
using Portfolio.Service.Interface;

namespace Portfolio.Service
{
    public class ProjectsService(IProjectsRepository projectsRepository, ILogger<ProjectsService> logger) : IProjectsService
    {
        public async Task<List<Project>> GetAllProjects()
        {
            var projects = await projectsRepository.GetAllProjectsAsync();
            logger.LogInformation("Retrieved {ProjectsCount} projects", projects.Count);

            return projects;

        }

        public async Task<List<Project>> AddProject(AddProjectRequest request)
        {
            var updatedProjects = await projectsRepository.AddProjectAsync(request.Project);
            logger.LogInformation("Added new project {Projects}", updatedProjects);

            return updatedProjects;
        }
    }
}
