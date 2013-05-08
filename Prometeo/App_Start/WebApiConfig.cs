using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace Prometeo
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            config.Routes.MapHttpRoute(
                name: "BreezeApi",
                routeTemplate: "breeze/{controller}/{action}"
            );
        }
         
    }
}
