using GB.PRACTICAMINIONS3.ETL;
using System;
using System.Collections.Generic;
using System.Data.Entity.Core.Objects;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GB.PRACTICAMINIONS3.DAL
{
    public class LibroDall
    {
        public RespuestaEtl insertarLibro(LibroEtl libro)
        {
            RespuestaEtl respuesta = new RespuestaEtl();
            ObjectParameter Codigo = new ObjectParameter("piCodigo", typeof(int));
            ObjectParameter Mensaje = new ObjectParameter("psMensaje", typeof(string));

            try
            {
                Codigo.Value = 0;
                Mensaje.Value = string.Empty;

                using ( BCR_PRACTICAMINIONS3Entities objDatos = new BCR_PRACTICAMINIONS3Entities())
                {
                    var resultado = objDatos.PR_InsertarLibros(
                            libro.Codigo,
                            libro.Titulo,
                            libro.Autor,
                            libro.Precio,
                            libro.LinkAmazon,
                            Codigo,
                            Mensaje
                        );
                    if (resultado != null)
                    {
                        respuesta.Codigo = Convert.ToInt32(Codigo.Value);
                        respuesta.Mensaje = Mensaje.Value.ToString();
                        respuesta.Estado = "success";
                    }
                }

            }
            catch (Exception ex)
            {
                respuesta.Estado = "error";
                respuesta.Codigo = -1;
                respuesta.Mensaje = ex.ToString();
            }

            return respuesta;
        }

        public RespuestaEtl mostraLibros()
        {
            RespuestaEtl respuesta = new RespuestaEtl();

            try
            {
                using (BCR_PRACTICAMINIONS3Entities objDatos = new BCR_PRACTICAMINIONS3Entities())
                {
                    respuesta.ObjetoRespuesta = objDatos.PR_MostrarLibros().ToList();
                   
                }               
            }
            catch (Exception ex)
            {
                respuesta.Mensaje = ex.ToString();
                respuesta.Codigo = -1;
                respuesta.Estado = "error";
            }
            return respuesta;
        }

        public RespuestaEtl eliminarLibro(LibroEtl libro)
        {
            RespuestaEtl respuesta = new RespuestaEtl();
            ObjectParameter Codigo = new ObjectParameter("piCodigo", typeof(int));
            ObjectParameter Mensaje = new ObjectParameter("psMensaje", typeof(string));
            try
            {
                using (BCR_PRACTICAMINIONS3Entities objDatos = new BCR_PRACTICAMINIONS3Entities())
                {
                    var resultado = objDatos.PR_EliminarLibro(
                            libro.IdLibro,
                            Codigo,
                            Mensaje
                        );

                    if (resultado != null)
                    {
                        respuesta.Codigo = Convert.ToInt32(Codigo.Value);
                        respuesta.Mensaje = Mensaje.Value.ToString();
                        respuesta.Estado = "success";
                    }
                }
            }
            catch (Exception ex)
            {
                respuesta.Codigo = -1;
                respuesta.Mensaje = ex.ToString();
                respuesta.Estado = "error";
            }
            return respuesta;
        }

        public RespuestaEtl modificarLibro(LibroEtl libro)
        {
            RespuestaEtl respuesta = new RespuestaEtl();
            ObjectParameter Codigo = new ObjectParameter("piCodigo", typeof(int));
            ObjectParameter Mensaje = new ObjectParameter("psMensaje", typeof(string));
            try
            {
                using (BCR_PRACTICAMINIONS3Entities objDatos = new BCR_PRACTICAMINIONS3Entities())
                {
                    var resultado = objDatos.PR_ActualizarLibro(
                            libro.IdLibro,
                            libro.Codigo,
                            libro.Titulo,
                            libro.Autor,
                            libro.Precio,
                            libro.LinkAmazon,
                            Codigo,
                            Mensaje
                        );                    

                    if (resultado != null)
                    {
                        respuesta.Codigo = Convert.ToInt32(Codigo.Value);
                        respuesta.Mensaje = Mensaje.Value.ToString();
                        respuesta.Estado = "success";
                    }
                }
            }
            catch (Exception ex)
            {
                respuesta.Codigo = -1;
                respuesta.Mensaje = ex.ToString();
                respuesta.Estado = "error";
            }
            return respuesta;
        }
    }
}
