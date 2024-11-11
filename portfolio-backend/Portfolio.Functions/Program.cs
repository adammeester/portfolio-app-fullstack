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
using Portfolio.Data.Interface;
using Portfolio.Data;
using Newtonsoft.Json.Serialization;
using Newtonsoft.Json;

var host = new HostBuilder()
    .ConfigureFunctionsWebApplication()
    .ConfigureServices((context, services) =>
    {
        services.AddApplicationInsightsTelemetryWorkerService();
        services.ConfigureFunctionsApplicationInsights();

        services.AddSingleton(new JsonSerializerSettings
        {
            ContractResolver = new CamelCasePropertyNamesContractResolver(),
            NullValueHandling = NullValueHandling.Ignore,
            Formatting = Formatting.Indented,
            ReferenceLoopHandling = ReferenceLoopHandling.Ignore
        });

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

        services.AddTransient<IDataLoader, DataLoader>();

        // Repositories
        services.AddTransient<IProjectsRepository, ProjectsRepository>();

        // Services
        services.AddTransient<IProjectsService, ProjectsService>();
    })
    .Build();

host.Run();