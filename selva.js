// Lista de imágenes
    const imagenes = [
    "selva/16.jpg",
       "selva/17.jpg",
       "selva/18.jpg",
       "selva/19.jpg",
       "selva/20.jpg",
       "selva/21.jpg",
        "selva/22.jpg"
    
    
    ];

    let indice = 0;
    const img = document.getElementById("imagen");

    function mostrarSiguienteFoto() {
      // Cambiar la imagen con opacidad
      img.style.opacity = 0;

      setTimeout(() => {
        img.src = imagenes[indice];
        img.style.opacity = 1;

        indice = (indice + 1) % imagenes.length; // volver al inicio al final
      }, 500);
    }

    // Mostrar la primera imagen al cargar
    mostrarSiguienteFoto();

    // Cambiar imagen cada 3 segundos
    setInterval(mostrarSiguienteFoto, 3000);
  