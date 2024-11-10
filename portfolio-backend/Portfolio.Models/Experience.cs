namespace Portfolio.Models
{
    public  class Experience
    {
        public string Company { get; set; } = string.Empty;
        public string Website { get; set; } = string.Empty;
        public string Logo { get; set; } = string.Empty;
        public string LogoBackground { get; set; } = string.Empty;  
        public string Role { get; set; } = string.Empty;
        public string Date { get; set; } = string.Empty;
        public List<string> Duties { get; set; } = [];
    }
}
