using Newtonsoft.Json;
using System;

namespace ClassRegistration.Models.Course
{
    public class Information
    {
        [JsonProperty("icon")]
        public string Icon { get; set; }

        [JsonProperty("title")]
        public string Title { get; set; }

        [JsonProperty("content")]
        public string Content { get; set; }
    }

    public class Waitlist : Information
    {
        public Waitlist()
        {
            var waitlistMax = new Random().Next(0, 20);
            var waitlistMin = new Random().Next(0, waitlistMax);

            Icon = "today";
            Title = "Available Waitlist Seats";
            Content = string.Format("{0}/{1}", waitlistMin, waitlistMax);
        }
    }

    public class Seats : Information
    {
        public Seats()
        {
            var seatsMax = new Random().Next(0, 100);
            var seatsMin = new Random().Next(0, seatsMax);

            Icon = "group";
            Title = "Available Seats";
            Content = string.Format("{0}/{1}", seatsMin, seatsMax);
        }
    }

    public class Professor : Information
    {
        public Professor()
        {
            var professors = new string[] { "Eugene Park", "Daniel Jasper", "JohnMark Sill", "Matt Smith", "Joseph Martin", "Ronald Swanson" };

            var professor = professors[new Random().Next(0, professors.Length - 1)];

            Icon = "person";
            Title = "Professor";
            Content = string.Format("{0}", professor);
        }
    }
}