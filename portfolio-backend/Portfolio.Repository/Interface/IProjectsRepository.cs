using Portfolio.Models;

namespace Portfolio.Repository.Interface
{
    public interface IProjectsRepository
    {
        public Task<List<Project>> AddProjectAsync(Project project);
        public Task<List<Project>> GetAllProjectsAsync();
    }
}
