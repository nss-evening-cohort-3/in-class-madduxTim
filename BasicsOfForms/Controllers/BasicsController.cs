using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace BasicsOfForms.Controllers
{
    public class BasicsController : Controller
    {
        // GET: Basics
        public ActionResult Index()
        {
            return View();
        }
        
        [HttpPost]
        public ActionResult Index(FormCollection form)
        {
            int i = 0; 
            return View();
        }
    }
}