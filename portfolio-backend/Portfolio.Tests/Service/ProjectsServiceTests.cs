using AutoFixture;
using Microsoft.Extensions.Logging;
using Moq;
using Portfolio.Models;
using Portfolio.Models.Request;
using Portfolio.Repository.Interface;
using Portfolio.Service;

namespace Portfolio.Tests.Service
{
    public class ProjectsServiceTests
    {
        private readonly Mock<IProjectsRepository> _projectsRepoMock = new();
        private readonly Mock<ILogger<ProjectsService>> _loggerMock = new();
        private readonly ProjectsService _projectsService;
        private readonly Fixture _fixture;

        public ProjectsServiceTests()
        {
            _projectsService = new ProjectsService(_projectsRepoMock.Object, _loggerMock.Object);
            _fixture = new Fixture();
        }

        [Fact]
        public async Task GetAllProjects__SuccessTest()
        {
            _projectsRepoMock.Setup(repo => repo.GetAllProjectsAsync())
                .ReturnsAsync(_fixture.CreateMany<Project>(2).ToList());

            var projects = await _projectsService.GetAllProjects();


            Assert.NotNull(projects);
            Assert.Equal(2, projects.Count);
        }

        [Fact]
        public async Task AddProject__SuccessTest()
        {

            var request = new AddProjectRequest()
            {
                Project = _fixture.Build<Project>()
                .With(project => project.Title, "New Project")
                .Create()
            };

            _projectsRepoMock.Setup(repo => repo.GetAllProjectsAsync())
                .ReturnsAsync(_fixture.CreateMany<Project>(1).ToList());

            _projectsRepoMock.Setup(repo => repo.AddProjectAsync(It.IsAny<Project>()))
                .ReturnsAsync(_fixture.CreateMany<Project>(2).ToList());

            var projects = await _projectsService.AddProject(request);

            _projectsRepoMock.Verify(repo => repo.AddProjectAsync(request.Project));

            Assert.NotNull(projects);
            Assert.Equal(2, projects.Count);
        }
    }
}