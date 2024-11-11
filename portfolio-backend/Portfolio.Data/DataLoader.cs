using Newtonsoft.Json;
using Portfolio.Data.Interface;
using Portfolio.Models;

namespace Portfolio.Data
{
    public class DataLoader: IDataLoader
    {
        public async Task<PortfolioData<Project>> SaveProjectAsync(Project project)
        {
            try
            {
                var currentDirectory = Directory.GetCurrentDirectory();
                var solutionDirectory = GetSolutionDirectoryInfo(currentDirectory)?.FullName
                    ?? throw new DirectoryNotFoundException("Could not find solution directory");

                var projectsDirectory = Path.Combine(solutionDirectory, "Portfolio.Data", "Projects");
                if (!Directory.Exists(projectsDirectory))
                {
                    Directory.CreateDirectory(projectsDirectory);
                }

                var jsonFilePath = Path.Combine(projectsDirectory, "projects.json");

                List<Project> existingProjects = [];
                if (File.Exists(jsonFilePath))
                {
                    var existingJson = await File.ReadAllTextAsync(jsonFilePath);
                    existingProjects = JsonConvert.DeserializeObject<List<Project>>(existingJson) ?? new List<Project>();
                }

                existingProjects.Add(project);

                var jsonData = JsonConvert.SerializeObject(existingProjects, new JsonSerializerSettings
                {
                    Formatting = Formatting.Indented,
                    ReferenceLoopHandling = ReferenceLoopHandling.Ignore,
                    ContractResolver = new Newtonsoft.Json.Serialization.CamelCasePropertyNamesContractResolver()
                });

                await File.WriteAllTextAsync(jsonFilePath, jsonData);

                var projectsData = new PortfolioData<Project>() { Data = existingProjects.ToList() };
                return projectsData;
            }
            catch (IOException ex)
            {
                throw new Exception($"Error accessing the projects file", ex);
            }
            catch (JsonException ex)
            {
                throw new Exception("Error processing project data", ex);
            }
            catch (Exception ex)
            {
                throw new Exception($"Error saving projects data: {ex.Message}", ex);
            }
        }

        public async Task<PortfolioData<Project>> LoadProjectsData()
        {
            try
            {
                var dataAssemblyPath = typeof(DataLoader).Assembly.Location;
                var baseDirectory = Path.GetDirectoryName(dataAssemblyPath);

                var jsonFilePath = Path.Combine(baseDirectory!, "Projects", "projects.json");
                var jsonData = await File.ReadAllTextAsync(jsonFilePath);

                var projects = JsonConvert.DeserializeObject<List<Project>>(jsonData);

                var projectsData = new PortfolioData<Project>() { Data = projects };
                return projectsData;
            }
            catch (IOException ex)
            {
                throw new Exception("Error accessing the projects file", ex);
            }
            catch (JsonException ex)
            {
                throw new Exception("Error processing project data", ex);
            }
            catch (Exception ex)
            {
                throw new Exception($"Error reading projects data: {ex.Message}", ex);
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
    }
}
