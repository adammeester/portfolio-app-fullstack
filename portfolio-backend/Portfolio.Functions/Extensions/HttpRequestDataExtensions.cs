﻿using Microsoft.Azure.Functions.Worker.Http;
using System.Net;

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
                await response.WriteAsJsonAsync(content);
            }

            return response;
        }
    }
}
