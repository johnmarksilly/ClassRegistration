using System;
using System.Web.Http;
using System.Threading.Tasks;
using ClassRegistration.Services;

namespace ClassRegistration.Controllers.API
{
    public class CourseController : ApiController
    {
        CourseService _courseService;

        public CourseController()
        {
            _courseService = new CourseService();
        }

        [HttpGet]
        public async Task<IHttpActionResult> Get(string search)
        {
            try
            {
                var courses = await _courseService.FindByStringAsync(search);

                if (courses != null)
                {
                    return Ok(courses);
                }

                return Ok();
            }
            catch (Exception ex)
            {
                return InternalServerError();
            }
        }
    }
}