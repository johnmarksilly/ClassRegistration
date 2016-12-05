using System;
using System.Linq;
using System.Threading.Tasks;
using ClassRegistration.Models.Course;
using System.Collections.Generic;

namespace ClassRegistration.Services
{
    public class CourseService
    {
        private Dictionary<Guid, Course> _courses = new Dictionary<Guid, Course>();

        public CourseService()
        {
            _courses = new Dictionary<Guid, Course>();

            generateCourses();
        }

        public void Add(Course course)
        {
            _courses.Add(course.Id, course);
        }

        public async Task<Course> FindByIdAsync(Guid id)
        {
            return await Task.Run(() =>
            {
                Course course;

                if (_courses.TryGetValue(id, out course))
                {
                    return course;
                }
                else
                {
                    return null;
                }
            });
        }

        public async Task<List<Course>> FindByStringAsync(string search)
        {
            Guid id;

            if (Guid.TryParse(search, out id))
            {
                var courses = new List<Course>();
                courses.Add(await FindByIdAsync(id));

                return courses;
            }
            else
            {
                return await Task.Run(() => 
                {
                    return _courses.Values.Where(course => course.Key.ToLower().Contains(search.ToLower())).ToList();
                });
            }
        }
        
        private void generateCourses()
        {
            var id = Guid.NewGuid();
            _courses.Add(id,
                new Course(id,
                "GDES",
                1311,
                "Foundations: Drawing and Design in Two and Three Dimensions",
                "Design elements and principles in context of observational drawing. Integrative approach to two-dimensional design, three-dimensional design, and drawing. Broad conceptual framework for design exploration. Emphasizes perceptual aspects of visual forms.",
                Enums.Semester.Spring,
                4,
                new List<Information>()
                {
                    new Information("group", "Available Seats", "10/100"),
                    new Information("access_time", "Available Waitlist Seats", "0/10"),
                    new Information("person", "Professor", "Unassigned"),
                    new Information("today", "Times", "M,")
                })
            );

            id = Guid.NewGuid();
            _courses.Add(id,
                new Course(id,
                "GDES",
                1312,
                "Foundations: Color and Design in Two and Three Dimensions",
                "Color theory, its application in two- and three-dimensional design. Emphasizes effective use of color by studying traditional color systems, perception, and interaction. Lectures, demonstrations, extensive studio work, and critiques.",
                Enums.Semester.Spring,
                4,
                new Information(
                    "", "", ""
                    )
                )
            );

            id = Guid.NewGuid();
            _courses.Add(id,
                new Course(id,
                "GDES",
                1312,
                "Work Experience in Graphic Design",
                "Supervised work experience in business, industry, or government, related to student's area of study. Integrative paper or project.",
                Enums.Semester.Spring,
                4,
                new Information(
                    "", "", ""
                    )
                )
            );

            id = Guid.NewGuid();
            _courses.Add(id,
                new Course(id,
                "GDES",
                2342,
                "Web Design",
                "Graphic design elements/principles applied to website design. HTML, CSS. Working with interactive media and file formats.",
                Enums.Semester.Spring,
                3,
                new Information(
                    "", "", ""
                    )
                )
            );

            id = Guid.NewGuid();
            _courses.Add(id,
                new Course(id,
                "GDES",
                2345,
                "Typography",
                "History of typographic forms, principles of composition, expressive potential of type. Design process from problem-solving through exploration, experimentation, selection, critique, and refinement. Readings, research, exercises, design production.",
                Enums.Semester.Spring,
                3,
                new Information(
                    "", "", ""
                    )
                )
            );

            id = Guid.NewGuid();
            _courses.Add(id,
                new Course(id,
                "GDES",
                2361,
                "Design Process: Photography",
                "Photography for graphic designers: digital/film photographic developing/image manipulation, printing.",
                Enums.Semester.Spring,
                3,
                new Information(
                    "", "", ""
                    )
                )
            );

            id = Guid.NewGuid();
            _courses.Add(id,
                new Course(id,
                "GDES",
                2399,
                "Design and its Discontents",
                "Secret history of modern, postmodern, and contemporary design. Principles/practices of designers who operate outside of main stream. Innovators, activists, cultural gadflies whose work challenges, provokes, and inspires. Context of economy, society, culture, and politics. Lecture, research, studio production. Written project proposals/reflections/blogging.",
                Enums.Semester.Spring,
                3,
                new Information(
                    "", "", ""
                    )
                )
            );

            id = Guid.NewGuid();
            _courses.Add(id,
                new Course(id,
                "GDES",
                3311,
                "Illustration",
                "Two aspects of illustration for contemporary graphic designer. Image making, by hand or digitally, for use in design projects. Design development. Mapping ideas/expressing thoughts visually. Not observational drawing course.",
                Enums.Semester.Spring,
                3,
                new Information(
                    "", "", ""
                    )
                )
            );

            id = Guid.NewGuid();
            _courses.Add(id,
                new Course(id,
                "GDES",
                3312,
                "Color and Form in Surface Design",
                "Use of color/form representation in two-dimensional surface applications. Historical use of color and of spatial representation in visual communication.",
                Enums.Semester.Spring,
                4,
                new Information(
                    "", "", ""
                    )
                )
            );
        }
    }
}