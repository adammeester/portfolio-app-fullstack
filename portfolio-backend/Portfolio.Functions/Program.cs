using Microsoft.Azure.Functions.Worker;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Portfolio.Models.Configuration;
using Portfolio.Repository;
using Portfolio.Repository.Interface;
using Portfolio.Service;
using Portfolio.Service.Interface;

var host = new HostBuilder()
    .ConfigureFunctionsWebApplication()
    .ConfigureServices((context, services) =>
    {
        services.AddApplicationInsightsTelemetryWorkerService();
        services.ConfigureFunctionsApplicationInsights();

        var config = context.Configuration;

        services.Configure<PortfolioAppSettings>(config.GetSection(nameof(PortfolioAppSettings)));

        // Repositories
        services.AddTransient<IProjectsRepository, ProjectsRepository>();
        services.AddTransient<IProjectsService, ProjectsService>();
    })
    .Build();

host.Run();