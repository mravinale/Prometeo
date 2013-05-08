using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Prometeo.Models;

namespace Prometeo.Controllers
{
    public class ValuesController : ApiController
    {
        // ~/breeze/values/GetPage 
        [HttpGet]
        public Page GetPage()
        { 
            return new Page { 
                id = 1, 
                title = "Page1", 
                posts = new List<Post>
                            {
                                new Post { id = 1, name = "Post1",page_id = 1},
                                new Post { id = 2, name = "Post2",page_id = 1},
                                new Post { id = 3, name = "Post3",page_id = 1}
                            } };
        }

        // ~/breeze/values/GetComments
        [HttpGet]
        public List<Comment> GetComments()
        {
            return new List<Comment>
                       {
                           new Comment{ id = 1, content = "Comment1", post_id = 1},
                           new Comment{ id = 2, content = "Comment2", post_id = 1},
                           new Comment{ id = 3, content = "Comment3", post_id = 2},
                           new Comment{ id = 4, content = "Comment4", post_id = 3},
                           new Comment{ id = 5, content = "Comment5", post_id = 3}
                       };
        }
    }
}