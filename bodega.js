const bodega = {
  zona1: {
    nombre: "Productos Malos",
    productos: [],
  },
  zona2: {
    nombre: "Productos Varios",
    productos: [],
  },
  zona3: {
    nombre: "Productos de Hogar",
    productos: [],
  },
  zona4: {
    nombre: "Productos Tecnológicos",
    productos: [],
  },
};

function agregarProducto(zona, nombre, referencia, cantidad, valor, descripcion) {
  bodega[zona].productos.push({ nombre, referencia, cantidad, valor, descripcion });
}

function obtenerCantidadProductos() {
  const cantidadPorZona = {};
  for (const zona in bodega) {
    cantidadPorZona[zona] = bodega[zona].productos.length;
  }
  return cantidadPorZona;
}

function mostrarProductosEnZona(zona) {
  console.log(`Productos en ${bodega[zona].nombre}:`);
  bodega[zona].productos.forEach((producto) => {
    console.log(`Nombre: ${producto.nombre}`);
    console.log(`Referencia: ${producto.referencia}`);
    console.log(`Cantidad: ${producto.cantidad}`);
    console.log(`Valor: ${producto.valor}`);
    console.log(`Descripción: ${producto.descripcion}`);
    console.log("-------------------------");
  });
}

let usuarioActual = "admin"; // Inicia como administrador por defecto

while (true) {
  const opcion = prompt(`Menú:
1. Opciones del Administrador
2. Opciones del Vendedor
3. Salir
Seleccione una opción (1/2/3):`);

  if (opcion === "1" && usuarioActual === "admin") {
    const opcionAdmin = prompt(`Opciones del Administrador:
1. Agregar producto
2. Ver cantidad de productos en cada zona
3. Ver productos en una zona
Seleccione una opción (1/2/3):`);

    if (opcionAdmin === "1") {
      const zona = prompt(`Ingrese la zona del producto:
1. Productos Malos
2. Productos Varios
3. Productos de Hogar
4. Productos Tecnológicos`);
      const nombre = prompt("Ingrese el nombre del producto:");
      const referencia = prompt("Ingrese la referencia del producto:");
      const cantidad = prompt("Ingrese la cantidad del producto:");
      const valor = prompt("Ingrese el valor del producto:");
      const descripcion = prompt("Ingrese la descripción del producto:");
      
      // Mapear la entrada del usuario a la zona correspondiente
      const zonaElegida = {
        "1": "zona1",
        "2": "zona2",
        "3": "zona3",
        "4": "zona4",
      }[zona];

      if (zonaElegida) {
        agregarProducto(zonaElegida, nombre, referencia, cantidad, valor, descripcion);
        console.log("Producto agregado con éxito.");
      } else {
        console.log("Opción de zona no válida.");
      }
    } else if (opcionAdmin === "2") {
      console.log("Cantidad de productos en cada zona:");
      console.log(obtenerCantidadProductos());
    } else if (opcionAdmin === "3") {
      const zona = prompt(`Ingrese la zona a consultar:
1. Productos Malos
2. Productos Varios
3. Productos de Hogar
4. Productos Tecnológicos`);
      
      // Mapear la entrada del usuario a la zona correspondiente
      const zonaElegida = {
        "1": "zona1",
        "2": "zona2",
        "3": "zona3",
        "4": "zona4",
      }[zona];

      if (zonaElegida) {
        mostrarProductosEnZona(zonaElegida);
      } else {
        console.log("Opción de zona no válida.");
      }
    } else {
      console.log("Opción no válida.");
    }
  } else if (opcion === "2" || (opcion === "1" && usuarioActual === "vendedor")) {
    const opcionVendedor = prompt(`Opciones del Vendedor:
1. Ver cantidad de productos en cada zona
2. Ver productos en una zona
Seleccione una opción (1/2):`);

    if (opcionVendedor === "1") {
      console.log("Cantidad de productos en cada zona:");
      console.log(obtenerCantidadProductos());
    } else if (opcionVendedor === "2") {
      const zona = prompt(`Ingrese la zona a consultar:
1. Productos Malos
2. Productos Varios
3. Productos de Hogar
4. Productos Tecnológicos`);
      
      // Mapear la entrada del usuario a la zona correspondiente
      const zonaElegida = {
        "1": "zona1",
        "2": "zona2",
        "3": "zona3",
        "4": "zona4",
      }[zona];

      if (zonaElegida) {
        mostrarProductosEnZona(zonaElegida);
      } else {
        console.log("Opción de zona no válida.");
      }
    } else {
      console.log("Opción no válida.");
    }
  } else if (opcion === "3") {
    console.log("Saliendo del programa.");
    break;
  } else {
    console.log("Opción no válida.");
  }
}
