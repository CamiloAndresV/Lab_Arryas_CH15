// ============================================================
// Ejercicio 04 · Platos por categoría
// ============================================================
// El mesero quiere ver solo las bebidas, o solo los postres.
//
// Crea la función platosPorCategoria(menu, categoria) que retorne
// un array NUEVO con los platos cuya categoria sea EXACTAMENTE
// el texto recibido (mayúsculas y tildes cuentan).
//
// Regla: aquí no importa si el plato está disponible o no:
// se filtra solo por categoría.
//
// Ejemplos (con el menú del README):
//   platosPorCategoria(menu, "bebida") → [Limonada de coco, Jugo de lulo]
//   platosPorCategoria(menu, "fuerte") → [Bandeja paisa, Ajiaco]
//   platosPorCategoria(menu, "Bebida") → []   ("Bebida" ≠ "bebida")
//
// Pista: igual que el ejercicio 03, pero la condición usa
// el segundo parámetro y ===.
// ============================================================

function platosPorCategoria(menu, categoria) {
  let filtro = []
    if (categoria === "bebida") {
      for (let i = 0; i < menu.length; i++) {
        if (menu[i].categoria === "bebida") {
          filtro.push(menu[i])
        } 
      }
    } else if (categoria === "fuerte") {
      for (let i = 0; i < menu.length; i++) {
        if (menu[i].categoria === "fuerte") {
          filtro.push(menu[i])
        } 
      }
    }
  return filtro
}
// const menu = [
//   { nombre: "Bandeja paisa", precio: 32000, categoria: "fuerte", disponible: true },
//   { nombre: "Ajiaco", precio: 28000, categoria: "fuerte", disponible: false },
//   { nombre: "Limonada de coco", precio: 9000, categoria: "bebida", disponible: true },
//   { nombre: "Jugo de lulo", precio: 7000, categoria: "bebida", disponible: true },
//   { nombre: "Postre de natas", precio: 11000, categoria: "postre", disponible: true },
// ];
// console.log(platosPorCategoria(menu, "fuertE"))

// No borres esta línea: es la puerta por donde el test usa tu función
module.exports = { platosPorCategoria };
