using Portfolio.Models;
using Portfolio.Models.Request;

namespace Portfolio.Service.Interface
{
    public interface IProjectsService
    {
        public Task<List<Project>> GetAllProjects();
        public Task<List<Project>> AddProject(AddProjectRequest request);
    }
}
