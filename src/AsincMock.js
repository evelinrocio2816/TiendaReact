const misProductos = [
  {
    id: "1",
    nombre: "Agility",
    price: 11400,
    stock:10,
    img: "../img/agility.jpg",
    idCat: "2",
    description:"no se que poner aca",
  },
  {
    id: "2",
    nombre: "Agility Cat",
    price: 11400,
    stock:10,
    img: "../img/agilityCat.jpg",
    idCat: "2",
  },
  {
    id: "3",
    nombre: "Agility Dog",
    price: 11400,
    stock:10,
    img: "../img/agilityDog.jpg",
    idCat: "2",
  },
  {
    id: "4",
    nombre: "Balanced",
    price: 11400,
    stock:10,
    img: "../img/balanced.jpg",
    idCat: "2",
  },
  {
    id: "5",
    nombre: "Balanced",
    precio: 11400,
    stock:10,
    img: "../img/balanced2.jpg",
    idCat: "2",
  },
  {
    id: "6",
    nombre: "Dog Chow",
    precio: 11400,
    stock:10,
    img: "../img/dogChow.jpg",
    idCat: "2",
  },
  {
    id: "7",
    nombre: "Eukanuba",
    precio: 11400,
    stock:10,
    img: "../img/eukanuba.jpg",
    idCat: "2",
  },
  {
    id: "8",
    nombre: "Excellent",
    precio: 11400,
    stock:10,
    img: "../img/excellent.jpg",
    idCat: "2",
  },
  {
    id: "10",
    nombre: "Junior",
    precio: 11400,
    stock:10,
    img: "../img/junior.jpg",
    idCat: "2",
  },
  {
    id: "11",
    nombre: "Maintenace",
    precio: 11400,
    stock:10,
    img: "../img/maintenace.jpg",
    idCat: "2",
  },
  {
    id: "12",
    nombre: "Old Prince",
    precio: 11400,
    stock:10,
    img: "../img/oldPrince.jpg",
    idCat: "2",
  },
  {
    id: "13",
    nombre: "Old Prince",
    precio: 11400,
    stock:10,
    img: "../img/oldPrince2.jpg",
    idCat: "2",
  },
  {
    id: "14",
    nombre: "Old Prince",
    precio: 11400,
    stock:10,
    img: "../img/oldPrince3.jpg",
    idCat: "2",
  },
  {
    id: "15",
    nombre: "Premium",
    precio: 11400,
    stock:10,
    img: "../img/premium.jpg",
    idCat: "2",
  },
  {
    id: "16",
    nombre: "Raza",
    precio: 11400,
    stock:10,
    img: "../img/raza.jpg",
    idCat: "2",
  },
  {
    id: "17",
    nombre: "Raza",
    precio: 11400,
    stock:10,
    img: "../img/razap.jpg",
    idCat: " 2",
  },
  {
    id: "18",
    nombre: "Royal Canin",
    precio: 11400,
    stock:10,
    img: "../img/royalCanin.jpg",
    idCat: "2",
  },
  {
    id: "19",
    nombre: "Royal Canin",
    precio: 11400,
    stock:10,
    img: "../img/royalCaning2.jfif",
    idCat: "2",
  },
  {
    id: "20",
    nombre: "Sabrocitos",
    precio: 11400,
    stock:10,
    img: "../img/sabrositos.jpg",
    idCat: "2",
  },
  {
    id: "21",
    nombre: "Voraz",
    precio: 11400,
    stock:10,
    img: "../img/voraz.jpg",
    idCat: "2",
  },
  {
    id: "22",
    nombre: "Pelota de Goma",
    precio: 2000,
    stock:10,
    img: "../img/pelotita.png",
    idCat: "3",
  },
  {
    id: "23",
    nombre: "Pelota de Goma",
    precio: 2000,
    stock:10,
    img: "../img/pelotitasDos.png",
    idCat: "3",
  },
  {
    id: "24",
    nombre: "Arnes",
    precio: 2000,
    stock:10,
    img: "../img/arnes.png",
    idCat: "3",
  },
  {
    id: "25",
    nombre: "Arnes",
    precio: 2000,
    stock:10,
    img: "../img/arnesDos.png",
    idCat: "3",
  },
  {
    id: "26",
    nombre: "Collar",
    precio: 2000,
    stock:10,
    img: "../img/collar.png",
    idCat: "3",
  },
  {
    id: "27",
    nombre: "Collar",
    precio: 2000,
    stock:10,
    img: "../img/collarDos.png",
    idCat: "3",
  },
  {
    id: "28",
    nombre: "Collar",
    precio: 2000,
    stock:10,
    img: "../img/collarTres.png",
    idCat: "3",
  },
  {
    id: "29",
    nombre: "Combo Collar + Correa",
    precio: 2000,
    stock:10,
    img: "../img/combo.png",
    idCat: "3",
  },
  {
    id: "30",
    nombre: "Correa",
    precio: 2000,
    stock:10,
    img: "../img/correa.png",
    idCat: "3",
  },
  {
    id: "31",
    nombre: "Juguete de Goma",
    precio: 2000,
    stock:8,
    img: "../img/huesito.png",
    idCat: "4",
  },
  {
    id: "32",
    nombre: "Huesito de Juguete",
    precio: 2000,
    stock:8,
    img: "../img/huesitoDos.png",
    idCat: "4",
  },
  {
    id: "33",
    nombre: "Huesito de Juguete",
    precio: 2000,
    stock:8,
    img: "../img/huesitoDos.png",
    idCat: "4",
  },
  {
    id: "34",
    nombre: "Muñequitos de goma",
    precio: 2000,
    stock:8,
    img: "../img/muñequitos.png",
    idCat: "4",
  },
];

export const getProduct = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(misProductos);
    }, 100);
  });
};

export const getUnProducto = (id) => {
  return new Promise(resolve => {
    setTimeout(() => {
      const producto = misProductos.find(prod => prod.id === id);
      resolve(producto);
    }, 100);
  })
};
//creo una funcion que retorne una array de cada categoria seleccionada


export const getProductosPorCategoria = (idCategoria) => {
  return new Promise(resolve => {
    setTimeout(() => {
      const productosCategoria = misProductos.filter(prod => prod.idCat === idCategoria);
      resolve(productosCategoria);
    }, 100);
  });
};
