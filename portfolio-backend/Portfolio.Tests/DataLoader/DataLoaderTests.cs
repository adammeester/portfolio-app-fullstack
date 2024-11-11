using Portfolio.Models;
using Newtonsoft.Json;

namespace Portfolio.Data.Tests
{
    public class DataLoaderTests : IDisposable
    {
        private readonly DataLoader _dataLoader;
        private readonly string _solutionDir;
        private readonly string _projectsFilePath;
        private string _originalContent = string.Empty;
        private bool _originalFileExisted;

        public DataLoaderTests()
        {
            _dataLoader = new DataLoader();

            var currentDirectory = Directory.GetCurrentDirectory();
            _solutionDir = GetSolutionDirectoryInfo(currentDirectory)?.FullName
                ?? throw new DirectoryNotFoundException("Could not find solution directory");

            _projectsFilePath = Path.Combine(_solutionDir, "Portfolio.Data", "Projects", "projects.json");

            if (File.Exists(_projectsFilePath))
            {
                _originalFileExisted = true;
                _originalContent = File.ReadAllText(_projectsFilePath);
            }
        }

        private static DirectoryInfo? GetSolutionDirectoryInfo(string currentPath)
        {
            var directory = new DirectoryInfo(currentPath);
            while (directory != null && directory.GetFiles("*.sln").Length == 0)
            {
                directory = directory.Parent;
            }
            return directory;
        }

        public void Dispose()
        {
            if (_originalFileExisted)
            {
                File.WriteAllText(_projectsFilePath, _originalContent);
            }
            else if (File.Exists(_projectsFilePath))
            {
                File.Delete(_projectsFilePath);
            }
        }

        [Fact]
        public async Task SaveProjectAsync__SuccessTest()
        {
            var project = new Project
            {
                Title = "Test Project",
                Description = "Test Description",
            };

            var result = await _dataLoader.SaveProjectAsync(project);

            Assert.NotNull(result?.Data);
            Assert.Contains(result.Data, p => p.Title.Equals(project.Title));

            var fileContent = await File.ReadAllTextAsync(_projectsFilePath);
            var savedProjects = JsonConvert.DeserializeObject<List<Project>>(fileContent);

            Assert.NotNull(savedProjects);
            Assert.Contains(savedProjects, p => p.Title == project.Title);
        }

        [Fact]
        public async Task SaveProjectAsync_ShouldPreserveExistingProjects()
        {
            var existingProjects = new List<Project>
            {
                new() {
                    Title = "Existing Project",
                    Description = "Existing Description"
                }
            };

            await File.WriteAllTextAsync(_projectsFilePath,
                JsonConvert.SerializeObject(existingProjects));

            var newProject = new Project
            {
                Title = "New Project",
                Description = "New Description"
            };

            var result = await _dataLoader.SaveProjectAsync(newProject);

            Assert.NotNull(result.Data);
            Assert.Equal(2, result.Data.Count);
            Assert.Contains(result.Data, p => p.Title == "Existing Project");
            Assert.Contains(result.Data, p => p.Title == "New Project");
        }

        [Fact]
        public async Task SaveProjectAsync_ShouldCreateDirectory_WhenDirectoryDoesNotExist()
        {
            var projectsDir = Path.Combine(_solutionDir, "Portfolio.Data", "Projects");
            if (Directory.Exists(projectsDir))
            {
                Directory.Delete(projectsDir, true);
            }

            var project = new Project
            {
                Title = "Test Project"
            };

            await _dataLoader.SaveProjectAsync(project);

            Assert.True(Directory.Exists(projectsDir));
            Assert.True(File.Exists(_projectsFilePath));
        }

        [Fact]
        public async Task SaveProjectAsync_ShouldHandleInvalidJson()
        {
            await File.WriteAllTextAsync(_projectsFilePath, "invalid json content");

            var project = new Project
            {
                Title = "Test Project"
            };

            await Assert.ThrowsAsync<Exception>(() => _dataLoader.SaveProjectAsync(project));
        }
    }
}