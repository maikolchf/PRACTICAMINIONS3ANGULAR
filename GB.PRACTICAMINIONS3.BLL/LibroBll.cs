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
        LibroDall dalLibro = new LibroDall();
        public RespuestaEtl insertarLibro(LibroEtl libro)
        {            
            return dalLibro.insertarLibro(libro);
        }

        public RespuestaEtl mostrarLibros()
        {
            return dalLibro.mostraLibros();
        }
        public  RespuestaEtl eliminarLibro(LibroEtl libro)
        {
            return dalLibro.eliminarLibro(libro);
        }
        public RespuestaEtl actualizarLibro(LibroEtl libro)
        {
            return dalLibro.modificarLibro(libro);
        }
    }
}
