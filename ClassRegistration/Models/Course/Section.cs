using Newtonsoft.Json;
using System;
using System.Collections.Generic;

namespace ClassRegistration.Models.Course
{
    public class Section
    {
        [JsonProperty("id")]
        public int Id { get; set; }

        [JsonProperty("name")]
        public string Name { get; set; }

        public List<Information> Information { get; set; }

        public Section()
        {
            //Id = Random
        }
    }
}