using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.Functions.Worker;
using Microsoft.Extensions.Logging;

namespace Portfolio.Functions.Projects
{
    public class GetProjects(ILogger<GetProjects> logger)
    {
        [Function("GetProjects")]
        public IActionResult Run([HttpTrigger(AuthorizationLevel.Function, "get", Route = "Projects/Get")] HttpRequest req)
        {
            logger.LogInformation("C# HTTP trigger function processed a request.");
            return new OkObjectResult("Welcome to Azure Functions!");
        }
    }
}
