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
        // GET api/values
        public Pages Get()
        {
            return new Pages 
            { 
                home = new Home{ content  = "Home Content", title = "Home"},
                contact = new Contact { content = "Contact Content", title = "Contact" }, 
                about = new About{ content  = "About Content", title = "About"}
            };
        }

        // GET api/values/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
        }
    }
}