using Newtonsoft.Json;
using Portfolio.Models;
using System.Reflection;

namespace Portfolio.Data
{
    public static class DataLoader
    {
        public static async Task<PortfolioData<Project>> SaveProjectsAsync(List<Project> projects)
        {
            try
            {
                var dataAssemblyPath = typeof(DataLoader).Assembly.Location;
                var baseDirectory = Path.GetDirectoryName(dataAssemblyPath);

                var jsonFilePath = Path.Combine(baseDirectory!, "Projects", "projects.json");
                if (!Directory.Exists(jsonFilePath))
                {
                    Directory.CreateDirectory(jsonFilePath!);
                }

                var jsonData = JsonConvert.SerializeObject(projects, Formatting.Indented);

                await File.WriteAllTextAsync(jsonFilePath, jsonData);

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
                throw new Exception($"Error saving projects data: {ex.Message}", ex);
            }
        }
        public static async Task<PortfolioData<Project>> LoadProjectsData()
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
    }
}
