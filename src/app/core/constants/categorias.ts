import { Categoria } from "../interfaces/categoria";

export const CATEGORIAS: Categoria[] = [
    {
        nombre: 'Hambuguesas',
        id: 1,
        fotoUrl: "https://cdn.pixabay.com/photo/2022/08/31/10/17/burger-7422970_1280.jpg",
        productos: [{
          nombre:"Hamburguesa con queso",
          precio: 1000,
          descripcion: "Carne a la parrilla, pan, queso cheddar, mostaza y ketchup. Apta para sumarle más queso ;)",
          imagen: "https://s3-eu-central-1.amazonaws.com/www.burgerking.com.ar.v2/wp-media-folder-burger-king-argentina//home/ubuntu/preview/menu-app/frontend/apps/marketing-website-wordpress-app/web/app/uploads/sites/5/Hamburguesa-con-Queso.png"
        },
        {
          nombre:"Doble Cuarto XL",
          precio: 1500,
          descripcion: "Dos carnes a la parrilla, pan, queso cheddar, cebolla, mostaza y ketchup.",
          imagen: "https://s3-eu-central-1.amazonaws.com/www.burgerking.com.ar.v2/wp-media-folder-bk-argentina//home/ubuntu/preview/menu-app/frontend/apps/marketing-website-wordpress-app/web/app/uploads/sites/5/BK_WEB_DOBLE-CUARTO-XL_1200X800_020822.png"
        },
        {
          nombre:"Bacon King Carne ",
          precio: 1300,
          descripcion: "Dos medallones de carne, pan, queso cheddar, panceta, ketchup y mostaza.  ",
          imagen: "https://s3-eu-central-1.amazonaws.com/www.burgerking.com.ar.v2/wp-media-folder-burger-king-argentina//home/ubuntu/preview/menu-app/frontend/apps/marketing-website-wordpress-app/web/app/uploads/sites/5/Bacon-King-Carne.png"
        },
        {
          nombre:"Cheese onion doble ",
          precio: 1500,
          descripcion: "Pan, doble carne a la parrilla, salsa cheddar y cebolla salteada",
          imagen: "https://s3-eu-central-1.amazonaws.com/www.burgerking.com.ar.v2/wp-media-folder-bk-argentina//home/ubuntu/preview/menu-app/frontend/apps/marketing-website-wordpress-app/web/app/uploads/sites/5/BK_WB_CHEESEONIONDOBLE_1200X800_140922.png"
        }]
    },
    {
        nombre: 'Pizzas',
        id: 2,
        fotoUrl: "https://cdn.pixabay.com/photo/2017/12/10/14/47/pizza-3010062_1280.jpg",
        productos: [
          {
            nombre: 'Pizza napolitana',
            precio: 1000,
            descripcion: "Pizza napolitana",
            imagen:
              'img/fotoRecetas/20210208143331pizza-napolitana.jpg',
          },
          {
            nombre: 'Pizza 4 quesos',
            precio: 1200,
            descripcion: "Pizza 4 quesos",
            imagen:
              'https://assets.unileversolutions.com/recipes-v2/216503.jpg',
          },
          {
            nombre: 'Pizza de anchoas',
            precio: 1300,
            descripcion: "Pizza de anchoas",
            imagen:
              'https://www.demoslavueltaaldia.com/sites/default/files/pizza-casera-anchoas.jpg',
          },
        ]
    },
    {
        nombre: 'Postres',
        id: 3,
        fotoUrl: "https://i0.wp.com/lapasteleriarosario.online/wp-content/uploads/2021/05/DSC_0550-scaled.jpg?fit=2560%2C2560&ssl=1",
        productos: [
          {
            nombre: 'Rogel',
            precio: 800,
            descripcion: "Sucesivas capas de galleta crocante y dulce de leche terminado con decoración de merengue italiano",
            imagen: 'https://i0.wp.com/lapasteleriarosario.online/wp-content/uploads/2021/05/DSC_0562-scaled.jpg?fit=2560%2C2560&ssl=1',
          },
          {
            nombre: 'Chocotorta',
            precio: 800,
            descripcion: "Sucesivas capas de galletitas chocolinas y crema de dulce de leche",
            imagen:
              'https://i0.wp.com/lapasteleriarosario.online/wp-content/uploads/2021/04/DSC_0398-1-scaled.jpg?fit=2560%2C1707&ssl=1',
          },
          {
            nombre: 'Cheesecake de frutos rojos',
            precio: 800,
            descripcion: "Base bizcocho vainilla crema de queso, corazón de frutos rojos y cubierta de mermelada de frutos rojo",
            imagen:
              'https://i0.wp.com/lapasteleriarosario.online/wp-content/uploads/2021/03/cropped-DSC_1198-1-scaled-1.jpg?fit=2000%2C1199&ssl=1',
          },
        ]
    },
    {
        nombre: 'Bebidas',
        id: 4,
        fotoUrl: "https://quienlofabrica.files.wordpress.com/2020/11/aperitivos-2.jpg",
        productos: [{
          nombre: 'Coca Cola',
          precio: 100,
          descripcion: "Coca Cola 1.5L",
          imagen:
            'https://static.wixstatic.com/media/d2b1c5_d858b74ff2534bdc98694e72c576fbe0~mv2_d_1600_1600_s_2.jpg/v1/fill/w_625,h_625,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/d2b1c5_d858b74ff2534bdc98694e72c576fbe0~mv2_d_1600_1600_s_2.jpg',
        },
        {
          nombre: 'Sprite',
          precio: 100,
          descripcion: "Sprite 1.5L",
          imagen:
            'https://labebidadetusfiestas.com.ar/46004-large_default/sprite-limonada-descartable-1500cc.jpg',
        },
        {
          nombre: 'Cunnigton pomelo',
          precio: 100,
          descripcion: "Cunnigton pomelo 1.5L",
          imagen:
            'https://labebidadetusfiestas.com.ar/47665-large_default/cunnington-pomelo-1500cc.jpg',
        },]
    }
]
