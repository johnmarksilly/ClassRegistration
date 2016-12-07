using Newtonsoft.Json;
using System;

namespace ClassRegistration.Models.Course
{
    public class Information
    {
        [JsonIgnore]
        public Random _random = new Random();

        [JsonProperty("icon")]
        public string Icon { get; set; }

        [JsonProperty("title")]
        public string Title { get; set; }

        [JsonProperty("content")]
        public string Content { get; set; }

        public Information(Random random)
        {
            _random = random;
        }
    }

    public class Waitlist : Information
    {
        public Waitlist(Random random) : base(random)
        {
            var waitlistMax = _random.Next(10, 20);
            var waitlistMin = new Random().Next(0, waitlistMax);

            Icon = "today";
            Title = "Waitlist Seats";
            Content = string.Format("{0}/{1}", waitlistMin, waitlistMax);
        }
    }

    public class Seats : Information
    {
        public Seats(Random random) : base(random)
        {
            var seatsMax = _random.Next(10, 50);
            var seatsMin = _random.Next(0, seatsMax);

            Icon = "group";
            Title = "Available Seats";
            Content = string.Format("{0}/{1}", seatsMin, seatsMax);
        }
    }

    public class Professor : Information
    {
        public Professor(Random random) : base(random)
        {
            var professors = new string[] { "Eugene Park", "Daniel Jasper", "Ron Ott", "Heather Nagle", "Joanne Eicher", "Jeff Crump", "James Boyd Brent", "Barry Kudrowitz", "Debra Lawton", "Matt Smith", "Joseph Martin", "Ronald Swanson" };

            var professor = professors[_random.Next(0, professors.Length - 1)];

            Icon = "person";
            Title = "Professor";
            Content = string.Format("{0}", professor);
        }
    }

    public class Location : Information
    {
        public Location(Random random) : base(random)
        {
            var locations = new string[] { "McNeal Hall", "Rapson Hall" };

            var location = locations[_random.Next(0, locations.Length - 1)];
            var room = _random.Next(0, 350);

            Icon = "location_on";
            Title = "Location";
            Content = string.Format("{0} {1}", location, room);
        }
    }

    public class Meetings : Information
    {
        public Meetings(Random random) : base(random)
        {
            var meetings = new string[] { "M,W", "M,T", "T,W", "T,TH" };

            var startTime = _random.Next(1, 7);
            var endTime = _random.Next(startTime + 1, 9);

            Icon = "schedule";
            Title = "Meetings";
            Content = string.Format("{0} from {1}:00pm to {2}:00pm", meetings[_random.Next(0, meetings.Length - 1)], startTime, endTime);
        }
    }
}