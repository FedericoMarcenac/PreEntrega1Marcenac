let carpetas = 10;
let cuadernos = 20;

function stockGeneral(carpetas, cuadernos) {
  let articulo  = prompt("Ingrese el articulo que quieres solicitar");

  switch (articulo){
    case "cuadernos":
        const stockCuadernos = prompt("Ingrese la cantidad de cuadernos que quiere solicitar")

        if (stockCuadernos <= cuadernos) {
          let restantesCuadernos = cuadernos - stockCuadernos
          alert("Se puede realizar el pedido, las carpetas restantes en stock son: " + restantesCuadernos);
        } else {
          alert("No hay suficientes carpetas, por favor vuelve a ingresar la cantidad");
          stockGeneral(carpetas, cuadernos);
        }
        break;
    case "carpetas":
        const stockCarpetas = prompt("Ingrese la cantidad de carpetas que quiere solicitar")

        if (stockCarpetas <= carpetas) {
          let restantesCarpetas = carpetas - stockCarpetas
           alert("Se puede realizar el pedido, las carpetas restantes en stock son: " + restantesCarpetas);
        } else {
          alert("No hay suficientes carpetas, por favor vuelve a ingresar la cantidad");
          stockGeneral(carpetas, cuadernos);
        }
        break;
    default:
        alert("Lo siento, no tenemos " + articulo + " en este negocio")
        break;
  }
}


