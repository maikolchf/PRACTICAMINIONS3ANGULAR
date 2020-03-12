using GB.PRACTICAMINIONS3.ETL;
using System;
using System.Collections.Generic;
using System.Data.Entity.Core.Objects;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GB.PRACTICAMINIONS3.DAL
{
    /// <summary>
    /// Contiene todas las consultas que se realizan a la base de datos
    /// </summary>
    /// 
    public class LibroDall
    {
        /// <summary>
        /// Inserta el libro
        /// </summary>
        /// <autor>Michael chavarria</autor
        /// <createDate>4/3/2020</createDate>
        /// <ModifiedBy>Wittmann Moreno</ModifiedBy>
        /// <MofificationDate>5/3/2020</MofificationDate>
        /// <ModificationSummary>Devuelve un mensaje en caso que se produsca un error dentro de la base de datos y otro en caso de que ocurra desde la api</ModificationSummary>
        /// <param name="libro"></param>
        /// <returns>objeto mensaje con los detalles de la operacion</returns>
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
                            libro.Imagen,
                            Codigo,
                            Mensaje
                        );
                    if (Convert.ToInt32(Codigo.Value) != 0)
                    {
                        respuesta.Codigo = Convert.ToInt32(Codigo.Value);
                        respuesta.Mensaje = Mensaje.Value.ToString();
                        respuesta.Estado = "error";
                    }
                    else {
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
        /// <summary>
        /// Muestra la lista de libros
        /// </summary>
        /// <returns>Retorna el libro</returns>
        /// 
        public List<LibroEtl> listarLibros()
        {
            using (BCR_PRACTICAMINIONS3Entities objDatos = new BCR_PRACTICAMINIONS3Entities())
            {
                List<LibroEtl> libro = (from q in objDatos.Libros
                                        select new LibroEtl
                                        {
                                            IdLibro = q.IdLibro,
                                            Codigo = q.Codigo,
                                            Titulo = q.Nombre,
                                            Autor = q.Autor,
                                            Precio = q.Precio,
                                            LinkAmazon = q.LinkAmazon,
                                            Imagen = q.Imagen.Replace(@"\\" , @"\")
                                        }).ToList();
                Console.WriteLine(libro);
                return libro;
            }

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
        /// <summary>
        /// Elimina el libro
        /// </summary>
        /// <autor>Michael chavarria</autor
        /// <createDate>4/3/2020</createDate>
        /// <ModifiedBy>Wittmann Moreno</ModifiedBy>
        /// <MofificationDate>5/3/2020</MofificationDate>
        /// <ModificationSummary>Devuelve un mensaje en caso que se produsca un error dentro de la base de datos y otro en caso de que ocurra desde la api</ModificationSummary>
        /// <param name="libro"></param>
        /// <returns>objeto mensaje con los detalles de la operacion</returns>
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
                           Convert.ToInt32(libro.IdLibro),
                            Codigo,
                            Mensaje
                        );
                    if (Convert.ToInt32(Codigo.Value) != 0)
                    {
                        respuesta.Codigo = Convert.ToInt32(Codigo.Value);
                        respuesta.Mensaje = Mensaje.Value.ToString();
                        respuesta.Estado = "error";
                    }
                    else {
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
        /// <summary>
        /// Modifica el libro
        /// </summary>
        /// <autor>Michael chavarria</autor
        /// <createDate>4/3/2020</createDate>
        /// <ModifiedBy>Wittmann Moreno</ModifiedBy>
        /// <MofificationDate>5/3/2020</MofificationDate>
        /// <ModificationSummary>Devuelve un mensaje en caso que se produsca un error dentro de la base de datos y otro en caso de que ocurra desde la api</ModificationSummary>
        /// <param name="libro"></param>
        /// <returns>objeto mensaje con los detalles de la operacion</returns>
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
                           Convert.ToInt32(libro.IdLibro),
                            libro.Codigo,
                            libro.Titulo,
                            libro.Autor,
                            libro.Precio,
                            libro.LinkAmazon,
                            Codigo,
                            Mensaje
                        );
                    if (Convert.ToInt32(Codigo.Value) != 0)
                    {
                        respuesta.Codigo = Convert.ToInt32(Codigo.Value);
                        respuesta.Mensaje = Mensaje.Value.ToString();
                        respuesta.Estado = "error";
                    }
                    else {
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
