using Microsoft.Extensions.Logging;
using Moq;
using Portfolio.Models;
using Portfolio.Repository;
using AutoFixture;
using Portfolio.Data.Interface;

namespace Portfolio.Tests.Repository
{
    public class ProjectsRepositoryTests
    {
        private readonly Mock<ILogger<ProjectsRepository>> _loggerMock = new();
        private readonly Mock<IDataLoader> _dataLoaderMock = new();
        private readonly ProjectsRepository _projectsRepositoryMock;
        private readonly Fixture _fixture;

        public ProjectsRepositoryTests()
        {
            _projectsRepositoryMock = new(_dataLoaderMock.Object, _loggerMock.Object);
            _fixture = new Fixture();
        }

        [Fact]
        public async Task AddProjectAsync_ShouldAddNewProject()
        {
            var originalProjects = _fixture.CreateMany<Project>(1).ToList();

            var data = _fixture.Build<PortfolioData<Project>>()
                .With(data => data.Data, originalProjects)
                .Create();

            var project = _fixture.Build<Project>().Create();

            _dataLoaderMock.Setup(ldr => ldr.LoadProjectsData()).ReturnsAsync(data);

            data.Data?.Add(project);

            _dataLoaderMock.Setup(ldr => ldr.SaveProjectAsync(It.IsAny<Project>())).ReturnsAsync(data);

            var projects = await _projectsRepositoryMock.AddProjectAsync(project);

            Assert.NotNull(projects);
            Assert.Equal(2, projects.Count);
        }

        [Fact]
        public async Task LoadProjectsData__SuccessTest()
        {

        }
    }
}
