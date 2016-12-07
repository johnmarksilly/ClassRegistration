using System;
using Newtonsoft.Json;
using ClassRegistration.Enums;
using Newtonsoft.Json.Converters;
using System.Collections.Generic;

namespace ClassRegistration.Models.Course
{
    public class Course
    {
        [JsonProperty("id")]
        public Guid Id { get; set; }

        [JsonProperty("key")]
        public string Key
        {
            get
            {
                return string.Format("{0} {1}", Major, Number);
            }
        }

        [JsonProperty("Major")]
        public string Major { get; set; }

        [JsonProperty("number")]
        public int Number { get; set; }

        [JsonProperty("title")]
        public string Title { get; set; }

        [JsonProperty("description")]
        public string Description { get; set; }

        [JsonProperty("semester")]
        [JsonConverter(typeof(StringEnumConverter))]
        public Semester Semester { get; set; }

        [JsonProperty("credits")]
        public int Credits { get; set; }

        [JsonProperty("prerequisites")]
        public string Prerequisites { get; set; }

        [JsonProperty("sections")]
        public List<Section> Sections { get; set; }

        public Course(Guid id, string major, int number, string title, string description, Semester semester, int credits, Random random)
        {
            Id = id;
            Major = major;
            Number = number;
            Title = title;
            Description = description;
            Semester = semester;
            Credits = credits;
            Sections = generateSections(random);
        }

        List<Section> generateSections(Random random)
        {
            var sections = new List<Section>();
            var id = random.Next(40000, 49000);

            for (int i = 0; i < random.Next(0, 8); i++)
            {
                sections.Add(new Section(id + i, i + 1, random));
            }

            return sections;
        }
    }
}