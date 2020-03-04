using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GB.PRACTICAMINIONS3.ETL
{
    public class RespuestaEtl
    {
        public int Codigo { get; set; }
        public string Mensaje { get; set; }
        public dynamic ObjetoRespuesta { get; set; }
        public string Estado { get; set; }
    }
}
