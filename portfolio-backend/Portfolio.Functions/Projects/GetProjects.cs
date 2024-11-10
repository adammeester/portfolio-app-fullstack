using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.Functions.Worker;
using Microsoft.Azure.Functions.Worker.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using Portfolio.Functions.Extensions;
using Portfolio.Service;
using Portfolio.Service.Interface;
using System.Net;

namespace Portfolio.Functions.Projects
{
    public class GetProjects(IProjectsService projectsService, ILogger<GetProjects> logger)
    {
        [Function("GetProjects")]
        public async Task<HttpResponseData> Run([HttpTrigger(AuthorizationLevel.Function, "get", Route = "Projects/Get")] HttpRequestData req)
        {
            try
            {
                logger.LogInformation("Received new GetAllProjects request");

                var projects = await projectsService.GetAllProjects();

                return await req.CreateResponseWithContent(HttpStatusCode.OK, projects);
            }
            catch (Exception ex)
            {
                logger.LogError(ex, "Error occurred while retrieving projects: {ErrorMessage}", ex.Message);
                return await req.CreateResponseWithContent(HttpStatusCode.InternalServerError, ex.Message);
            }
        }
    }
}
