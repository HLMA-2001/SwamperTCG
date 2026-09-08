let cartas = [
  {
    id: 1,
    img: "https://tcgplayer-cdn.tcgplayer.com/product/704877_in_1000x1000.jpg",
    nombre: "Mega Darkrai EX",
    precio: 49999,
    idioma: "Ingles",
    estado: "10/10",
    stock: 10
  },
  {
    id: 2,
    img: "https://tcgplayer-cdn.tcgplayer.com/product/610504_in_1000x1000.jpg",
    nombre: "VaporeonEX",
    precio: 29999,
    idioma: "Ingles",
    estado: "9/10",
    stock: 6
  },
  {
    id: 3,
    img: "https://tcgplayer-cdn.tcgplayer.com/product/497606_in_1000x1000.jpg",
    nombre: "Magikarp full art",
    precio: 9999,
    idioma: "Ingles",
    estado: "9/10",
    stock: 12
  },
  {
    id: 4,
    img: "https://tcgplayer-cdn.tcgplayer.com/product/478097_in_1000x1000.jpg",
    nombre: "Origin Forme Palkia",
    precio: 109999,
    idioma: "Ingles",
    estado: "10/10",
    stock: 2
  },
  {
    id: 5,
    img: "https://tcgplayer-cdn.tcgplayer.com/product/475642_in_1000x1000.jpg",
    nombre: "Lucario Vstar",
    precio: 9999,
    idioma: "Ingles",
    estado: "8/10",
    stock: 15
  },
  {
    id: 6,
    img: "https://tcgplayer-cdn.tcgplayer.com/product/108617_in_1000x1000.jpg",
    nombre: "SwamperEX",
    precio: 1999,
    idioma: "Ingles",
    estado: "7/10",
    stock: 20
  },
  {
    id: 7,
    img: "https://tcgplayer-cdn.tcgplayer.com/product/284137_in_1000x1000.jpg",
    nombre: "GiratinaV",
    precio: 19999,
    idioma: "Ingles",
    estado: "9/10",
    stock: 8
  },
  {
    id: 8,
    img: "https://tcgplayer-cdn.tcgplayer.com/product/676077_in_1000x1000.jpg",
    nombre: "Mega FroslassEX",
    precio: 49999,
    idioma: "Ingles",
    estado: "10/10",
    stock: 4
  }
];

function formatoPrecio(precio) {
  return precio.toLocaleString("es-CL");
}

function mostrarCatalogo(limite) {
  let contenedor = document.getElementById("catalogo");
  if (!contenedor) return;

  let cartasAMostrar = limite ? cartas.slice(0, limite) : cartas

  contenedor.innerHTML = "";
  for (const carta of cartasAMostrar) {
    contenedor.innerHTML += `
      <div class="caluga-carta-catalogo">
        <a href="${rutaBase}paginas/carta1.html?id=${carta.id}">
          <img src="${carta.img}" alt="${carta.nombre}">
        </a>
      </div>
    `;
  }
}

function mostrarCarta() {
  let contenedor = document.getElementById("carta");
  if (!contenedor) return;

  let urlParams = new URLSearchParams(window.location.search);
  let id = urlParams.get("id");
  let carta = cartas.find(c => c.id == id);

  if (!carta) {
    contenedor.innerHTML = "<p>Carta no encontrada.</p>";
    return;
  }

  document.title = carta.nombre;

  contenedor.innerHTML = `
    <div class="caluga_carta">
      <img src="${carta.img}" alt="${carta.nombre}">
    </div>
    <div class="caluga_carta_info">
      <div class="info-carta">
        <h3>${carta.nombre}</h3>
        <h3>Precio: $${formatoPrecio(carta.precio)}</h3>
        <br>
        <p>Idioma - Carta : ${carta.idioma}</p>
        <p>Estado : ${carta.estado}</p>
        <p>Stock : ${carta.stock}</p>
      </div>
    </div>
  `;
}