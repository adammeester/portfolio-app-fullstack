using Microsoft.Azure.Functions.Worker;
using Microsoft.Azure.Functions.Worker.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using Portfolio.Functions.Extensions;
using Portfolio.Models.Request;
using Portfolio.Service.Interface;
using System.Net;

namespace Portfolio.Functions.Projects
{
    public class AddProject(IProjectsService projectsService, ILogger<AddProject> logger)
    {
        [Function("AddProject")]
        public async Task<HttpResponseData> Run([HttpTrigger(AuthorizationLevel.Function, "post", Route = "Projects/Add")] HttpRequestData req)
        {
            try
            {
                logger.LogInformation("Received new AddProject request");

                var requestBody = await new StreamReader(req.Body).ReadToEndAsync();
                var request = JsonConvert.DeserializeObject<AddProjectRequest>(requestBody);

                if (request is null)
                    return await req.CreateResponseWithContent(HttpStatusCode.BadRequest, "Invalid request body.");

                var projects = await projectsService.AddProject(request);

                return await req.CreateResponseWithContent(HttpStatusCode.OK, projects);
            }
            catch (Exception ex)
            {
                logger.LogError(ex, "Error occurred while Adding project: {ErrorMessage}", ex.Message);
                return await req.CreateResponseWithContent(HttpStatusCode.InternalServerError, ex.Message);
            }
        }
    }
}
