using Portfolio.Models;

namespace Portfolio.Data.Interface
{
    public interface IDataLoader
    {
        Task<PortfolioData<Project>> SaveProjectAsync(Project project);
        Task<PortfolioData<Project>> LoadProjectsData();
    }
}
