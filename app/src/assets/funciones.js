function mostrar(){
    var archivo = document.getElementById("imagen").files[0];
    var reader = new FileReader();
    if (imagen) {
      reader.readAsDataURL(archivo );
      reader.onloadend = function () {
        document.getElementById("img").src = reader.result;
      }
    }
  }