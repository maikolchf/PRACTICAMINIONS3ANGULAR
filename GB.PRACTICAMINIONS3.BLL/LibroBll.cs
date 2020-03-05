using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using GB.PRACTICAMINIONS3.ETL;
using GB.PRACTICAMINIONS3.DAL;


namespace GB.PRACTICAMINIONS3.BLL
{
    public class LibroBll
    {
        RespuestaEtl objMensaje = new RespuestaEtl();
        LibroDall dalLibro = new LibroDall();
        public RespuestaEtl insertarLibro(LibroEtl libro)
        {
            if (string.IsNullOrEmpty(libro.IdLibro.ToString())) {
                if (string.IsNullOrEmpty(libro.Codigo) || string.IsNullOrEmpty(libro.Titulo)
                || string.IsNullOrEmpty(libro.Precio.ToString()) || string.IsNullOrEmpty(libro.LinkAmazon) || string.IsNullOrEmpty(libro.Autor))
                {
                    objMensaje.Codigo = -2;
                    objMensaje.Mensaje = "Rellene todos los campos";
                    objMensaje.Estado = "warning";
                }
                else
                {
                    objMensaje = dalLibro.insertarLibro(libro);
                }
            }
            else
            {
                if (string.IsNullOrEmpty(libro.Codigo) || string.IsNullOrEmpty(libro.Titulo)
                    || string.IsNullOrEmpty(libro.Precio.ToString()) || string.IsNullOrEmpty(libro.LinkAmazon) || string.IsNullOrEmpty(libro.Autor)) {
                    objMensaje.Codigo = -2;
                    objMensaje.Mensaje = "Rellene todos los campos";
                    objMensaje.Estado = "warning";
                }
                else
                {
                    objMensaje = dalLibro.modificarLibro(libro);
                }
            }
            return objMensaje;
        }

        public RespuestaEtl mostrarLibros()
        {
            return dalLibro.mostraLibros();
        }
        public  RespuestaEtl eliminarLibro(LibroEtl libro)
        {
            if (string.IsNullOrEmpty(libro.IdLibro.ToString()))
            {
                objMensaje.Codigo = -3;
                objMensaje.Mensaje = "Se ha producido un error durante el envio del id a eliminar!";
                objMensaje.Estado = "error";
            }
            else
            {
                objMensaje = dalLibro.eliminarLibro(libro);
            }
            return objMensaje;
        }
    }
}
