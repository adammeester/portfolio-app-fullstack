using Azure.Core.Serialization;
using Newtonsoft.Json;
using System.Text;

namespace Portfolio.Functions.Extensions
{
    public class NewtonsoftJsonObjectSerializer : ObjectSerializer
    {
        private readonly JsonSerializerSettings _settings;

        public NewtonsoftJsonObjectSerializer(JsonSerializerSettings settings)
        {
            _settings = settings;
        }

        public override object? Deserialize(Stream stream, Type returnType, CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }

        public override ValueTask<object?> DeserializeAsync(Stream stream, Type returnType, CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }

        public override void Serialize(Stream stream, object? value, Type inputType, CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }

        public override async ValueTask SerializeAsync(Stream stream, object? value, Type inputType, CancellationToken cancellationToken)
        {
            var jsonString = JsonConvert.SerializeObject(value, inputType, _settings);

            var bytes = Encoding.UTF8.GetBytes(jsonString);
            await stream.WriteAsync(bytes, 0, bytes.Length, cancellationToken);
        }
    }
}
