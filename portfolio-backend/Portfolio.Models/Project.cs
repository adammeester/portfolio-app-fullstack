namespace Portfolio.Models
{

    public class Project
    {
        public string Type { get; set; } = string.Empty;
        public string Title { get; set; } = string.Empty;
        public string ImageUrl { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public List<string> Features { get; set; } = [];
        public List<string> Technologies { get; set; } = [];
        public Link? Link { get; set; } 
    }
}
