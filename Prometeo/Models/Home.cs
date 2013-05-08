using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Prometeo.Models
{
    public class Page
    {
        public int id { get; set; }
        public string title { get; set; } 
        public List<Post> posts{ get; set; }
    }

    public class Post
    {
        public int id { get; set; }
        public string name { get; set; }
        public int page_id { get; set; }
    }

    public class Comment
    {
        public int id { get; set; }
        public string content { get; set; }
        public int post_id { get; set; }
    }
     
}