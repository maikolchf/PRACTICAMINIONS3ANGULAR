using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GB.PRACTICAMINIONS3.ETL
{
    public class LibroEtl
    {
        public LibroEtl()
        {
            IdLibro = null;
            Codigo = string.Empty;
            Titulo = string.Empty;
            Autor = string.Empty;
            Precio =decimal.MinValue;
            LinkAmazon = string.Empty;
        }

        public int? IdLibro { get; set; }
        public  string Codigo { get; set; }
        public string Titulo { get; set; }
        public string Autor { get; set; }
        public decimal Precio { get; set; }
        public string LinkAmazon { get; set; }
    }
}
