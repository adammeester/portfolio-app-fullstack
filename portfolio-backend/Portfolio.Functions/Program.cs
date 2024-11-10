using Microsoft.Azure.Functions.Worker;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Portfolio.Models.Configuration;
using Portfolio.Repository;
using Portfolio.Repository.Interface;
using Portfolio.Service;
using Portfolio.Service.Interface;
using System.Text.Json.Serialization;
using System.Text.Json;

var host = new HostBuilder()
    .ConfigureFunctionsWebApplication()
    .ConfigureServices((context, services) =>
    {
        services.AddApplicationInsightsTelemetryWorkerService();
        services.ConfigureFunctionsApplicationInsights();

        services.AddSingleton(sp =>
        {
            return new JsonSerializerOptions
            {
                PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
                DefaultIgnoreCondition = JsonIgnoreCondition.WhenWritingNull,
            };
        });

        var config = context.Configuration;

        services.Configure<PortfolioAppSettings>(config.GetSection(nameof(PortfolioAppSettings)));

        // Repositories
        services.AddTransient<IProjectsRepository, ProjectsRepository>();

        // Services
        services.AddTransient<IProjectsService, ProjectsService>();
    })
    .Build();

host.Run();