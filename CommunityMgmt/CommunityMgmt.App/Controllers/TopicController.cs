using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Text.RegularExpressions;
using System.Web;
using System.Web.Mvc;
using System.Xml.Linq;

namespace CommunityMgmt.App.Controllers
{
    public class TopicController : Controller
    {
        // GET: Topic
        public PartialViewResult Index()
        {
            return PartialView();
        }

        public JsonResult Data()
        {
          
            var rssFeed = new Uri("https://techblog.betclicgroup.com/feed/");
            var request = (HttpWebRequest)WebRequest.Create(rssFeed);
            request.Method = "GET";
            var response = (HttpWebResponse)request.GetResponse();
            String feedContents;
            using (var reader = new StreamReader(response.GetResponseStream()))
            {

                feedContents = reader.ReadToEnd();

            }
            var document = XDocument.Parse(feedContents);
            var links = (from p in document.Descendants("item")
                         select new
                         {
                             Who = rssFeed,
                             Title = p.Element("title").Value,
                             Link = p.Element("link").Value,
                             PubDate = DateTime.Parse(p.Element("pubDate").Value),
                             Description = p.Element("description").Value,
                             Creator = p.Elements().Where(r => r.Name.ToString().Contains("creator")).FirstOrDefault().Value,
                             Tags = p.Elements().Where(r => r.Name.ToString().Contains("category")).Select( r => r.Value
                             ).ToList(),
                             Img = FetchLinksFromSource(p.Elements().Where(r => r.Name.ToString().Contains("content")).FirstOrDefault().Value)
                         }).ToList();
            return Json(links, JsonRequestBehavior.AllowGet);
        }


        public List<Uri> FetchLinksFromSource(string htmlSource)
        {
            List<Uri> links = new List<Uri>();
            string regexImgSrc = @"<img[^>]*?src\s*=\s*[""']?([^'"" >]+?)[ '""][^>]*?>";
            MatchCollection matchesImgSrc = Regex.Matches(htmlSource, regexImgSrc, RegexOptions.IgnoreCase | RegexOptions.Singleline);
            foreach (Match m in matchesImgSrc)
            {
                string href = m.Groups[1].Value;
                links.Add(new Uri(href));
            }
            return links;
        }
    }
}