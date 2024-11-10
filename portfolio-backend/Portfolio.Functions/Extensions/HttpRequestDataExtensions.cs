using Microsoft.Azure.Functions.Worker.Http;
using Newtonsoft.Json;
using System.Net;
using System.Threading;

namespace Portfolio.Functions.Extensions
{
    public static class HttpRequestDataExtensions
    {
        public static async Task<HttpResponseData> CreateResponseWithContent(this HttpRequestData req, HttpStatusCode statusCode, object content)
        {
            var response = req.CreateResponse(statusCode);

            response.Headers.Add("Access-Control-Allow-Origin", "*");
            response.Headers.Add("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
            response.Headers.Add("Access-Control-Allow-Headers", "Content-Type");

            if (content is string stringContent)
            {
                await response.WriteStringAsync(stringContent);
            }
            else
            {

                var settings = new JsonSerializerSettings
                {
                    ContractResolver = new Newtonsoft.Json.Serialization.CamelCasePropertyNamesContractResolver(),
                    NullValueHandling = NullValueHandling.Ignore // Optional: Ignore null values
                };

                // Create an ObjectSerializer using the Newtonsoft.Json serializer settings
                var serializer = new NewtonsoftJsonObjectSerializer(settings);

                // Use WriteAsJsonAsync to serialize with the custom serializer
                await response.WriteAsJsonAsync(content, serializer);
            }

            return response;
        }
    }
}
