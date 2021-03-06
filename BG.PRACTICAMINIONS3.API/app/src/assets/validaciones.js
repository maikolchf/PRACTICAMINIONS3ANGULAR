$(document).ready(function() {
  $("#alertCodigo").hide();
  $("#alertTitulo").hide();
  $("#alertAutor").hide();
  $("#alertPrecio").hide();
  $("#alertLink").hide();
  $("#validationDefaultUsername").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#librosTabla tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});
function valideKey(evt)
{
  var precio = document.getElementById('Precio').value;
  if(precio.length > 0){
    $("#alertPrecio").hide();
  }else{
    $("#alertPrecio").show();
  }
  var code = (evt.which) ? evt.which : evt.keyCode;
  
  if(code==8) 
  {
    //backspace
    return true;
  }
  else if(code>=48 && code<=57) 
  {
    //is a number
    return true;
  }else if(code == 46){
    return true;
  }
  else
  {
    return false;
  }
}
function validarCodigoLibro(evt){  
  var codigo = document.getElementById('Codigo').value;
  if(codigo.length > 0){
    $("#alertCodigo").hide();
  }else{
    $("#alertCodigo").show();
  }
}
function validarTituloLibro(evt){ 
  var titulo = document.getElementById('Titulo').value
  if(titulo.length > 0){
    $("#alertTitulo").hide();
  }else{
    $("#alertTitulo").show();
  }
}
function validarAutorLibro(evt){ 
  var autor = document.getElementById('Autor').value;
  if(autor.length > 0){
    $("#alertAutor").hide();
  }else{
    $("#alertAutor").show();
  }
}

function validarLinkLibro(evt){ 
  var link = document.getElementById('LinkAmazon').value;
  if(link.length > 0){
    $("#alertLink").hide(); 
  }else{
    $("#alertLink").show(); 
  }
}

function cargarDatosModal(idLibro,codigoLibro,tituloLibro,autorLibro,precioLibro,linkLibro){
 /* var inputCodigo = document.getElementById("txtEditCodigo");
  var inputTitulo = document.getElementById("txtEditTitulo");
  var inputAutor = document.getElementById("txtEditAutor");
  var inputPrecio = document.getElementById("txtEditPrecio");
  var inputLink = document.getElementById("txtEditLink");
  inputCodigo.value = codigoLibro;
  inputTitulo.value = tituloLibro;
  inputAutor.value = autorLibro;
  inputPrecio = precioLibro;
  inputLink.value = linkLibro;*/
}
function validarCampos(){
  var codigo=document.getElementById('Codigo').value;
  var titulo=document.getElementById('Titulo').value;
  var autor=document.getElementById('Autor').value;
  var precio=document.getElementById('Precio').value;
  var linkAmazon=document.getElementById('LinkAmazon').value;
  if(codigo.length == 0){
    $("#alertCodigo").show();
  }
  if(titulo.length == 0){
    $("#alertTitulo").show();
  }
  if(autor.length == 0){
    $("#alertAutor").show();
  }
  if(precio.length == 0){
    $("#alertPrecio").show();
  }
  if(linkAmazon.length == 0){
    $("#alertLink").show(); 
  }
}