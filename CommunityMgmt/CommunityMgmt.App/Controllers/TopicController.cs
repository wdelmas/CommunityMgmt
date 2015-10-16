using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CommunityMgmt.App.Controllers
{
    public class TopicController : Controller
    {
        // GET: Topic
        public PartialViewResult Index()
        {
            return PartialView();
        }
    }
}