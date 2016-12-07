using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Data.Entity.Infrastructure;

namespace ClassRegistration.Models.Course
{
    public class Section
    {
        [JsonProperty("id")]
        public int Id { get; set; }

        [JsonProperty("number")]
        public int Number { get; set; }

        [JsonProperty("name")]
        public string Name
        {
            get
            {
                return string.Format("Laboratory Section 00{0}", Number);
            }
        }

        public List<Information> Information { get; set; }

        public Section(int id, int sectionNumber, Random random)
        {
            Id = id;
            Number = sectionNumber;
            Information = new List<Information>()
            {
                new Seats(random),
                new Waitlist(random),
                new Professor(random),
                new Location(random),
                new Meetings(random)
            };
        }
    }
}