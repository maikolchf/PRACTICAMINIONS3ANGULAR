using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using GB.PRACTICAMINIONS3.ETL;
using GB.PRACTICAMINIONS3.BLL;
using System.Web.Http.Cors;
using System.Web;
using System.IO;

namespace BG.PRACTICAMINIONS3.API.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class LibrosController : ApiController
    {                     

        LibroBll bllLibro = new LibroBll();
        [HttpPost]
        public HttpResponseMessage agregarLibro()
        {
            string imagen = null;
            var httpRequest = HttpContext.Current.Request;
            Console.WriteLine("dddddddddddddddddddddd" + httpRequest);

            var postedFile = httpRequest.Files["Imagen"];
            var IdLibro = httpRequest.Form["IdLibro"];
            var Codigo = httpRequest.Form["Codigo"];
            var Titulo = httpRequest.Form["Titulo"];
            var Autor = httpRequest.Form["Autor"];
            var Precio = httpRequest.Form["Precio"];
            var LinkAmazon = httpRequest.Form["LinkAmazon"];

            imagen = new string(Path.GetFileNameWithoutExtension(postedFile.FileName).Take(10).ToArray()).Replace(" ", "-");
            imagen = imagen + DateTime.Now.ToString("yymmssfff") + Path.GetExtension(postedFile.FileName);
            var filePath = HttpContext.Current.Server.MapPath("~/~/app/src/assets/img/" + imagen);
            postedFile.SaveAs(filePath);
            LibroEtl libro = new LibroEtl();
            if(IdLibro == "null")
            {
                libro.Codigo = Convert.ToString(Codigo);
                libro.Titulo = Convert.ToString(Titulo);
                libro.Autor = Convert.ToString(Autor);
                libro.Precio = Convert.ToDecimal(Precio);
                libro.LinkAmazon = Convert.ToString(LinkAmazon);
                libro.Imagen = filePath;
            }
            else
            {
                libro.IdLibro = Convert.ToInt32(IdLibro);
                libro.Codigo = Convert.ToString(Codigo);
                libro.Titulo = Convert.ToString(Titulo);
                libro.Autor = Convert.ToString(Autor);
                libro.Precio = Convert.ToDecimal(Precio);
                libro.LinkAmazon = Convert.ToString(LinkAmazon);
                libro.Imagen = filePath;
            }
           

            return Request.CreateResponse(bllLibro.insertarLibro(libro));
        }

        //public IHttpActionResult agregarLibro([FromBody]LibroEtl libro, HttpPostedFileBase fileUpload)
        //{

        //    return Ok(bllLibro.insertarLibro(libro)); 
        //}

        [HttpGet]
        public List<LibroEtl> mostrarLibros()
        {
           return bllLibro.mostrarLibros();             
        }
        [HttpDelete]
        public IHttpActionResult eliminarLibro(int id)
        {

            LibroEtl libro = new LibroEtl();
            libro.IdLibro = id;

            return Ok(bllLibro.eliminarLibro(libro));
        }
    }
}
