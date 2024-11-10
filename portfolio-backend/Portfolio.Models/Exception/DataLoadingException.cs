namespace Portfolio.Models.Exception
{
    public class DataLoadingException<T>(string message) : System.Exception(message)
    {
    }
}
