using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using GB.PRACTICAMINIONS3.ETL;
using GB.PRACTICAMINIONS3.BLL;


namespace BG.PRACTICAMINIONS3.API.Controllers
{
    public class LibrosController : ApiController
    {
        LibroBll bllLibro = new LibroBll();
        [HttpPost]
        public IHttpActionResult agregarLibro([FromBody]LibroEtl libro)
        {
            return Ok(bllLibro.insertarLibro(libro)); ;
        }

        [HttpGet]
        public RespuestaEtl mostrarLibros()
        {
            RespuestaEtl respuesta = new RespuestaEtl();
            respuesta = bllLibro.mostrarLibros();
            return respuesta;
        }
        [HttpDelete]
        public IHttpActionResult eliminarLibro([FromBody]LibroEtl libro)
        {
            return Ok(bllLibro.eliminarLibro(libro));
        }
    }
}
