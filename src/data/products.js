export const products = {
    data : [
        {
          id: 1,
          name: "Pizza ba-con-cheddar",
          slug: "pizza-ba-con-cheddar",
          description: "Porque la creatividad está a la orden del día. La mejor pizza con Bacon (Panceta para los que no saben english) y Queso cheddar que vas a encontrar! Dejate de joder con restaurantes finos, pedinos que encima te la llevamos al toque y disfrutás de una rica pizza! Qué más querés?",
          price: 350.00,
          stock: 10.00,
          category: 1,
          outstanding: 1,
          owner: {
            id: 1,
            name: "Pizzas Montevideo",
            avatar: "https://media.istockphoto.com/vectors/slice-of-pizza-logo-for-advertising-vector-id1284770763?b=1&k=20&m=1284770763&s=612x612&w=0&h=NOTsvh0aCJDRfcyganqSHLYMiOg37P_3bE2_nObMiDM=",
            email: "pizzasmdeo@gmail.com",
            facebook: "Pizzas Montevideo",
            instagram: "@pizzas.mvd",
            celular: "092 215 369",
            created_at: "2022-07-23T01:31:40.000000Z",
            updated_at: "2022-07-23T01:31:40.000000Z"
          },
          created_at: "2022-07-23T01:31:49.000000Z",
          updated_at: "2022-07-23T01:31:49.000000Z",
          images: [
            "/assets/pizza_1.png",
            "/assets/pizza_2.jpg",
            "/assets/pizza_3.jpg",
            "/assets/pizza_4.jfif"
          ],
          max_dues: [
            {
              id: 1,
              name: "master",
              dues: 3,
              product_id: 1,
              created_at: "2022-07-23T01:56:59.000000Z",
              updated_at: "2022-07-23T01:56:59.000000Z"
            },
            {
              id: 2,
              name: "visa",
              dues: 3,
              product_id: 1,
              created_at: "2022-07-23T01:57:10.000000Z",
              updated_at: "2022-07-23T01:57:10.000000Z"
            },
            {
              id: 3,
              name: "oca",
              dues: 1,
              product_id: 1,
              created_at: "2022-07-23T01:57:17.000000Z",
              updated_at: "2022-07-23T01:57:17.000000Z"
            }
          ]
        },
        {
          id: 2,
          name: "Pizza mini",
          slug: "pizza-mini",
          description: "Para cuando no tenés hambre y sólo querés un bocado de pizza o para cuando estás llegando a fin de mes pero igual querés pedir comida",
          price: 75.00,
          stock: 50.00,
          category: 1,
          owner: {
            id: 1,
            name: "Pizzas Montevideo",
            avatar: "https://media.istockphoto.com/vectors/slice-of-pizza-logo-for-advertising-vector-id1284770763?b=1&k=20&m=1284770763&s=612x612&w=0&h=NOTsvh0aCJDRfcyganqSHLYMiOg37P_3bE2_nObMiDM=",
            email: "pizzasmdeo@gmail.com",
            facebook: "Pizzas Montevideo",
            instagram: "@pizzas.mvd",
            celular: "092 215 369",
            created_at: "2022-07-23T01:31:40.000000Z",
            updated_at: "2022-07-23T01:31:40.000000Z"
          },
          created_at: "2022-07-23T02:03:43.000000Z",
          updated_at: "2022-07-23T02:03:43.000000Z",
          images: [
            "/assets/mini_pizza_1.jpg"
          ],
          max_dues: [
            {
              id: 4,
              name: "master",
              dues: 1,
              product_id: 2,
              created_at: "2022-07-23T02:04:21.000000Z",
              updated_at: "2022-07-23T02:04:21.000000Z"
            },
            {
              id: 5,
              name: "oca",
              dues: 1,
              product_id: 2,
              created_at: "2022-07-23T02:04:25.000000Z",
              updated_at: "2022-07-23T02:04:25.000000Z"
            },
            {
              id: 6,
              name: "visa",
              dues: 1,
              product_id: 2,
              created_at: "2022-07-23T02:04:28.000000Z",
              updated_at: "2022-07-23T02:04:28.000000Z"
            }
          ]
        },
        {
          id: 3,
          name: "Fugazza",
          slug: "fugazza",
          description: "La fugazza (o figazza si sos argentino) es una variante de la pizza pero con cebolla y mozzarella, y sin salsa de tomate.",
          price: 150.00,
          stock: 25.00,
          category: 1,
          owner: {
            id: 1,
            name: "Pizzas Montevideo",
            avatar: "https://media.istockphoto.com/vectors/slice-of-pizza-logo-for-advertising-vector-id1284770763?b=1&k=20&m=1284770763&s=612x612&w=0&h=NOTsvh0aCJDRfcyganqSHLYMiOg37P_3bE2_nObMiDM=",
            email: "pizzasmdeo@gmail.com",
            facebook: "Pizzas Montevideo",
            instagram: "@pizzas.mvd",
            celular: "092 215 369",
            created_at: "2022-07-23T01:31:40.000000Z",
            updated_at: "2022-07-23T01:31:40.000000Z"
          },
          created_at: "2022-07-24T21:14:12.000000Z",
          updated_at: "2022-07-24T21:14:12.000000Z",
          images: [
            "/assets/fugazza_1.jpg",
            "/assets/fugazza_2.jpg"
          ],
          max_dues: [
            {
              id: 7,
              name: "visa",
              dues: 1,
              product_id: 3,
              created_at: "2022-07-24T21:14:28.000000Z",
              updated_at: "2022-07-24T21:14:28.000000Z"
            },
            {
              id: 8,
              name: "master",
              dues: 12,
              product_id: 3,
              created_at: "2022-07-24T21:14:34.000000Z",
              updated_at: "2022-07-24T21:14:34.000000Z"
            }
          ]
        },
        {
          id: 4,
          name: "Mila 4 quesos",
          slug: "mila-4-quesos",
          description: "Queso roquefort, queso crema, queso dambo y muzzarella, con guarnición sorpresa",
          price: 420.00,
          stock: 32.00,
          category: 1,
          owner: {
            id: 3,
            name: "Mundo Mila",
            avatar: "https://images.rappi.com.uy/restaurants_logo/mundomila-1604408216537.png",
            email: "mundomila@gmail.com",
            facebook: "Mundo Mila",
            instagram: "@mundomila.mvd",
            celular: "092 547 741",
            created_at: "2022-07-24T21:25:23.000000Z",
            updated_at: "2022-07-24T21:25:23.000000Z"
          },
          created_at: "2022-07-24T21:27:58.000000Z",
          updated_at: "2022-07-24T21:27:58.000000Z",
          images: [
            "/assets/mila_4_quesos_1.jpg"
          ],
          max_dues: [
            {
              id: 9,
              name: "master",
              dues: 12,
              product_id: 4,
              created_at: "2022-07-24T21:28:09.000000Z",
              updated_at: "2022-07-24T21:28:09.000000Z"
            },
            {
              id: 10,
              name: "visa",
              dues: 12,
              product_id: 4,
              created_at: "2022-07-24T21:28:13.000000Z",
              updated_at: "2022-07-24T21:28:13.000000Z"
            },
            {
              id: 11,
              name: "oca",
              dues: 6,
              product_id: 4,
              created_at: "2022-07-24T21:28:18.000000Z",
              updated_at: "2022-07-24T21:28:18.000000Z"
            }
          ]
        },
        {
          id: 5,
          name: "Mila Yankee",
          slug: "mila-yankee",
          description: "Queso cheddar, fetas de bacon crocante y 2 huevos fritos. Arterias? Para qué?",
          price: 450.00,
          stock: 20.00,
          category: 1,
          owner: {
            id: 3,
            name: "Mundo Mila",
            avatar: "https://images.rappi.com.uy/restaurants_logo/mundomila-1604408216537.png",
            email: "mundomila@gmail.com",
            facebook: "Mundo Mila",
            instagram: "@mundomila.mvd",
            celular: "092 547 741",
            created_at: "2022-07-24T21:25:23.000000Z",
            updated_at: "2022-07-24T21:25:23.000000Z"
          },
          created_at: "2022-07-24T21:29:57.000000Z",
          updated_at: "2022-07-24T21:29:57.000000Z",
          images: [
            "/assets/mila_yankee_1.jpg",
            "/assets/mila_yankee_2.jpg"
          ],
          max_dues: [
            {
              id: 12,
              name: "oca",
              dues: 6,
              product_id: 5,
              created_at: "2022-07-24T21:30:06.000000Z",
              updated_at: "2022-07-24T21:30:06.000000Z"
            },
            {
              id: 13,
              name: "master",
              dues: 12,
              product_id: 5,
              created_at: "2022-07-24T21:30:13.000000Z",
              updated_at: "2022-07-24T21:30:13.000000Z"
            },
            {
              id: 14,
              name: "visa",
              dues: 12,
              product_id: 5,
              created_at: "2022-07-24T21:30:16.000000Z",
              updated_at: "2022-07-24T21:30:16.000000Z"
            }
          ]
        },
        {
          id: 6,
          name: "Mila Capresse",
          slug: "mila-capresse",
          description: "Muzza tomates cherry y albahaca",
          price: 400.00,
          stock: 30.00,
          category: 1,
          owner: {
            id: 3,
            name: "Mundo Mila",
            avatar: "https://images.rappi.com.uy/restaurants_logo/mundomila-1604408216537.png",
            email: "mundomila@gmail.com",
            facebook: "Mundo Mila",
            instagram: "@mundomila.mvd",
            celular: "092 547 741",
            created_at: "2022-07-24T21:25:23.000000Z",
            updated_at: "2022-07-24T21:25:23.000000Z"
          },
          created_at: "2022-07-24T21:33:28.000000Z",
          updated_at: "2022-07-24T21:33:28.000000Z",
          images: [
            "/assets/mila_capresse_1.jpg"
          ],
          max_dues: [
            {
              id: 15,
              name: "visa",
              dues: 12,
              product_id: 6,
              created_at: "2022-07-24T21:33:37.000000Z",
              updated_at: "2022-07-24T21:33:37.000000Z"
            },
            {
              id: 16,
              name: "master",
              dues: 12,
              product_id: 6,
              created_at: "2022-07-24T21:33:40.000000Z",
              updated_at: "2022-07-24T21:33:40.000000Z"
            },
            {
              id: 17,
              name: "oca",
              dues: 6,
              product_id: 6,
              created_at: "2022-07-24T21:33:46.000000Z",
              updated_at: "2022-07-24T21:33:46.000000Z"
            }
          ]
        },
        {
          id: 7,
          name: "Cheesecake de frutilla",
          slug: "cheesecake-frutilla",
          description: "Base de galletas, crema de queso y topping de frutilla, 10 cm de diámetro y 5 cm de alto aproximadamente.",
          price: 195.00,
          stock: 30.00,
          category: 2,
          owner: {
            id: 4,
            name: "La Dulcería de Mauro",
            avatar: "https://thumbs.dreamstime.com/b/batido-de-leche-grande-con-helado-los-caramelos-la-melcocha-crema-y-piruleta-hermoso-dulce-del-gigante-postre-123288791.jpg",
            email: "dulceriademauro@gmail.com",
            facebook: "La Dulcería de Mauro",
            instagram: "@ladulceriademauro",
            celular: "092 412 725",
            created_at: "2022-07-24T21:36:50.000000Z",
            updated_at: "2022-07-24T21:36:50.000000Z"
          },
          created_at: "2022-07-24T21:39:03.000000Z",
          updated_at: "2022-07-24T21:39:03.000000Z",
          images: [
            "/assets/cheesecake_frutilla_1.png",
            "/assets/cheesecake_frutilla_2.jpg"
          ],
          max_dues: [
            {
              id: 18,
              name: "visa",
              dues: 6,
              product_id: 7,
              created_at: "2022-07-24T21:39:30.000000Z",
              updated_at: "2022-07-24T21:39:30.000000Z"
            },
            {
              id: 19,
              name: "master",
              dues: 6,
              product_id: 7,
              created_at: "2022-07-24T21:39:33.000000Z",
              updated_at: "2022-07-24T21:39:33.000000Z"
            }
          ]
        },
        {
          id: 8,
          name: "Cheesecake de maracuyá",
          slug: "cheesecake-maracuya",
          description: "Base de galletas, crema de queso y topping de maracuyá, 10 cm de diámetro y 5 cm de alto aproximadamente.",
          price: 210.00,
          stock: 15.00,
          category: 2,
          owner: {
            id: 4,
            name: "La Dulcería de Mauro",
            avatar: "https://thumbs.dreamstime.com/b/batido-de-leche-grande-con-helado-los-caramelos-la-melcocha-crema-y-piruleta-hermoso-dulce-del-gigante-postre-123288791.jpg",
            email: "dulceriademauro@gmail.com",
            facebook: "La Dulcería de Mauro",
            instagram: "@ladulceriademauro",
            celular: "092 412 725",
            created_at: "2022-07-24T21:36:50.000000Z",
            updated_at: "2022-07-24T21:36:50.000000Z"
          },
          created_at: "2022-07-24T21:42:35.000000Z",
          updated_at: "2022-07-24T21:42:35.000000Z",
          images: [
            "/assets/cheesecake_maracuya_1.jpg"
          ],
          max_dues: [
            {
              id: 20,
              name: "master",
              dues: 6,
              product_id: 8,
              created_at: "2022-07-24T21:42:42.000000Z",
              updated_at: "2022-07-24T21:42:42.000000Z"
            },
            {
              id: 21,
              name: "visa",
              dues: 6,
              product_id: 8,
              created_at: "2022-07-24T21:42:46.000000Z",
              updated_at: "2022-07-24T21:42:46.000000Z"
            }
          ]
        },
        {
          id: 9,
          name: "Súper brownie",
          slug: "super-brownie",
          description: "Postre de brownie con nueces, con una capa de dulce de leche y crema por encima",
          price: 200.00,
          stock: 40.00,
          category: 2,
          owner: {
            id: 4,
            name: "La Dulcería de Mauro",
            avatar: "https://thumbs.dreamstime.com/b/batido-de-leche-grande-con-helado-los-caramelos-la-melcocha-crema-y-piruleta-hermoso-dulce-del-gigante-postre-123288791.jpg",
            email: "dulceriademauro@gmail.com",
            facebook: "La Dulcería de Mauro",
            instagram: "@ladulceriademauro",
            celular: "092 412 725",
            created_at: "2022-07-24T21:36:50.000000Z",
            updated_at: "2022-07-24T21:36:50.000000Z"
          },
          created_at: "2022-07-24T21:45:43.000000Z",
          updated_at: "2022-07-24T21:45:43.000000Z",
          images: [
            "/assets/brownie_1.jpg"
          ],
          max_dues: [
            {
              id: 22,
              name: "visa",
              dues: 6,
              product_id: 9,
              created_at: "2022-07-24T21:45:50.000000Z",
              updated_at: "2022-07-24T21:45:50.000000Z"
            },
            {
              id: 23,
              name: "master",
              dues: 6,
              product_id: 9,
              created_at: "2022-07-24T21:45:55.000000Z",
              updated_at: "2022-07-24T21:45:55.000000Z"
            }
          ]
        },
        {
          id: 10,
          name: "Carrot Cake",
          slug: "carrot-cake",
          description: "Bizcochuelo de zanahoria, decorado con crema y nueces",
          price: 180.00,
          stock: 45.00,
          category: 2,
          owner: {
            id: 4,
            name: "La Dulcería de Mauro",
            avatar: "https://thumbs.dreamstime.com/b/batido-de-leche-grande-con-helado-los-caramelos-la-melcocha-crema-y-piruleta-hermoso-dulce-del-gigante-postre-123288791.jpg",
            email: "dulceriademauro@gmail.com",
            facebook: "La Dulcería de Mauro",
            instagram: "@ladulceriademauro",
            celular: "092 412 725",
            created_at: "2022-07-24T21:36:50.000000Z",
            updated_at: "2022-07-24T21:36:50.000000Z"
          },
          created_at: "2022-07-24T21:47:15.000000Z",
          updated_at: "2022-07-24T21:47:15.000000Z",
          images: [
            "/assets/carrot_cake_1.jpg",
            "/assets/carrot_cake_2.jpg"
          ],
          max_dues: [
            {
              id: 24,
              name: "master",
              dues: 6,
              product_id: 10,
              created_at: "2022-07-24T21:47:28.000000Z",
              updated_at: "2022-07-24T21:47:28.000000Z"
            },
            {
              id: 25,
              name: "visa",
              dues: 6,
              product_id: 10,
              created_at: "2022-07-24T21:47:32.000000Z",
              updated_at: "2022-07-24T21:47:32.000000Z"
            }
          ]
        },
        {
          id: 11,
          name: "Torta de cumpleaños",
          slug: "torta-cumple",
          description: "Cuadrado de bizcochuelo con mucho dulce de leche y cobertura de fondant. Con un regalo de parte de Mauro.",
          price: 250.00,
          stock: 20.00,
          category: 2,
          owner: {
            id: 4,
            name: "La Dulcería de Mauro",
            avatar: "https://thumbs.dreamstime.com/b/batido-de-leche-grande-con-helado-los-caramelos-la-melcocha-crema-y-piruleta-hermoso-dulce-del-gigante-postre-123288791.jpg",
            email: "dulceriademauro@gmail.com",
            facebook: "La Dulcería de Mauro",
            instagram: "@ladulceriademauro",
            celular: "092 412 725",
            created_at: "2022-07-24T21:36:50.000000Z",
            updated_at: "2022-07-24T21:36:50.000000Z"
          },
          created_at: "2022-07-24T21:49:35.000000Z",
          updated_at: "2022-07-24T21:49:35.000000Z",
          images: [
            "/assets/torta_cumple_1.jpg"
          ],
          max_dues: [
            {
              id: 26,
              name: "visa",
              dues: 6,
              product_id: 11,
              created_at: "2022-07-24T21:49:47.000000Z",
              updated_at: "2022-07-24T21:49:47.000000Z"
            },
            {
              id: 27,
              name: "master",
              dues: 6,
              product_id: 11,
              created_at: "2022-07-24T21:49:50.000000Z",
              updated_at: "2022-07-24T21:49:50.000000Z"
            }
          ]
        },
        {
          id: 12,
          name: "Matera para el auto",
          slug: "matera-auto",
          description: "Matera Para Auto, simil cuero\nColor Marrón\nMedidas ancho 25 x16cm y altura 27cm",
          price: 750.00,
          stock: 10.00,
          category: 3,
          owner: {
            id: 5,
            name: "El Gaucho Artesanias",
            avatar: "https://i1.sndcdn.com/avatars-000110930948-d3ley7-t500x500.jpg",
            email: "elgauchoartesanias@gmail.com",
            facebook: "El Gaucho Artesanias",
            instagram: "@elgaucho.art",
            celular: "095 125 628",
            created_at: "2022-07-24T21:52:26.000000Z",
            updated_at: "2022-07-24T21:52:26.000000Z"
          },
          created_at: "2022-07-24T21:54:39.000000Z",
          updated_at: "2022-07-24T21:54:39.000000Z",
          images: [
            "/assets/matera_auto_1.jpg",
            "/assets/matera_auto_2.jpg",
            "/assets/matera_auto_3.jpg"
          ],
          max_dues: [
            {
              id: 28,
              name: "master",
              dues: 12,
              product_id: 12,
              created_at: "2022-07-24T21:54:54.000000Z",
              updated_at: "2022-07-24T21:54:54.000000Z"
            },
            {
              id: 29,
              name: "visa",
              dues: 12,
              product_id: 12,
              created_at: "2022-07-24T21:54:57.000000Z",
              updated_at: "2022-07-24T21:54:57.000000Z"
            },
            {
              id: 30,
              name: "oca",
              dues: 8,
              product_id: 12,
              created_at: "2022-07-24T21:55:08.000000Z",
              updated_at: "2022-07-24T21:55:08.000000Z"
            }
          ]
        },
        {
          id: 13,
          name: "Tabla para asado",
          slug: "tabla-asado",
          description: "Tabla Para Asado Rectangular Parrilla 50,7x35,5cm\nIdeal para regalar para llevar al campamento o para el domingo en casa.",
          price: 520.00,
          stock: 23.00,
          category: 3,
          owner: {
            id: 5,
            name: "El Gaucho Artesanias",
            avatar: "https://i1.sndcdn.com/avatars-000110930948-d3ley7-t500x500.jpg",
            email: "elgauchoartesanias@gmail.com",
            facebook: "El Gaucho Artesanias",
            instagram: "@elgaucho.art",
            celular: "095 125 628",
            created_at: "2022-07-24T21:52:26.000000Z",
            updated_at: "2022-07-24T21:52:26.000000Z"
          },
          created_at: "2022-07-24T21:58:06.000000Z",
          updated_at: "2022-07-24T21:58:06.000000Z",
          images: [
            "/assets/tabla_asado_1.jpg"
          ],
          max_dues: [
            {
              id: 31,
              name: "oca",
              dues: 8,
              product_id: 13,
              created_at: "2022-07-24T21:58:12.000000Z",
              updated_at: "2022-07-24T21:58:12.000000Z"
            },
            {
              id: 32,
              name: "visa",
              dues: 12,
              product_id: 13,
              created_at: "2022-07-24T21:58:17.000000Z",
              updated_at: "2022-07-24T21:58:17.000000Z"
            },
            {
              id: 33,
              name: "master",
              dues: 12,
              product_id: 13,
              created_at: "2022-07-24T21:58:21.000000Z",
              updated_at: "2022-07-24T21:58:21.000000Z"
            }
          ]
        },
        {
          id: 14,
          name: "Yerbera de tela",
          slug: "yerbera-tela",
          description: "El yerbero lo creamos como una solución simple y práctica para todas esas personas que son activas y precisan andar siempre con su dosis de yerba a mano.",
          price: 200.00,
          stock: 50.00,
          category: 3,
          owner: {
            id: 6,
            name: "Cebando Ando",
            avatar: "https://d22fxaf9t8d39k.cloudfront.net/b77c9d17517360206fd3e9780b0bfe271c88a89a619eb30d69f924cf9e2d82c186271.jpeg",
            email: "cebandoando@gmail.com",
            facebook: "Cebando Ando",
            instagram: "@ceb,ando",
            celular: "094 249 865",
            created_at: "2022-07-24T22:01:23.000000Z",
            updated_at: "2022-07-24T22:01:23.000000Z"
          },
          created_at: "2022-07-24T22:03:26.000000Z",
          updated_at: "2022-07-24T22:03:26.000000Z",
          images: [
            "/assets/yerbera_tela_1.jpg"
          ],
          max_dues: [
            {
              id: 34,
              name: "master",
              dues: 12,
              product_id: 14,
              created_at: "2022-07-24T22:03:35.000000Z",
              updated_at: "2022-07-24T22:03:35.000000Z"
            },
            {
              id: 35,
              name: "visa",
              dues: 6,
              product_id: 14,
              created_at: "2022-07-24T22:03:40.000000Z",
              updated_at: "2022-07-24T22:03:40.000000Z"
            },
            {
              id: 36,
              name: "oca",
              dues: 6,
              product_id: 14,
              created_at: "2022-07-24T22:03:43.000000Z",
              updated_at: "2022-07-24T22:03:43.000000Z"
            }
          ]
        },
        {
          id: 15,
          name: "Mate imperial",
          slug: "mate-imperial",
          description: "Este mate es el mate común, que se forra a mano en cuero, y se le coloca una boquilla de alpaca con apliques en bronce soldado (todo cincelado a mano). Tiene el mismo cuidado que un mate común de calabaza en cuanto a su interior.",
          price: 2000.00,
          stock: 25.00,
          category: 3,
          owner: {
            id: 6,
            name: "Cebando Ando",
            avatar: "https://d22fxaf9t8d39k.cloudfront.net/b77c9d17517360206fd3e9780b0bfe271c88a89a619eb30d69f924cf9e2d82c186271.jpeg",
            email: "cebandoando@gmail.com",
            facebook: "Cebando Ando",
            instagram: "@ceb,ando",
            celular: "094 249 865",
            created_at: "2022-07-24T22:01:23.000000Z",
            updated_at: "2022-07-24T22:01:23.000000Z"
          },
          created_at: "2022-07-24T22:05:14.000000Z",
          updated_at: "2022-07-24T22:05:14.000000Z",
          images: [
            "/assets/mate_imperial_1.jpg",
            "/assets/mate_imperial_2.jpg"
          ],
          max_dues: [
            {
              id: 37,
              name: "oca",
              dues: 6,
              product_id: 15,
              created_at: "2022-07-24T22:05:22.000000Z",
              updated_at: "2022-07-24T22:05:22.000000Z"
            },
            {
              id: 38,
              name: "visa",
              dues: 6,
              product_id: 15,
              created_at: "2022-07-24T22:05:25.000000Z",
              updated_at: "2022-07-24T22:05:25.000000Z"
            },
            {
              id: 39,
              name: "master",
              dues: 12,
              product_id: 15,
              created_at: "2022-07-24T22:05:29.000000Z",
              updated_at: "2022-07-24T22:05:29.000000Z"
            }
          ]
        },
        {
          id: 16,
          name: "Mate de cerámica forrado",
          slug: "mate-ceramica-forrado",
          description: "Una de los principales motivos por los que los materos prefieren los mates de cerámica, es debido a que ayuda en cuanto a los problemas de acidez, reduciendo así el malestar. Este mate está forrado en cuero y tiene una virola de acero inoxidable.",
          price: 690.00,
          stock: 40.00,
          category: 3,
          owner: {
            id: 6,
            name: "Cebando Ando",
            avatar: "https://d22fxaf9t8d39k.cloudfront.net/b77c9d17517360206fd3e9780b0bfe271c88a89a619eb30d69f924cf9e2d82c186271.jpeg",
            email: "cebandoando@gmail.com",
            facebook: "Cebando Ando",
            instagram: "@ceb,ando",
            celular: "094 249 865",
            created_at: "2022-07-24T22:01:23.000000Z",
            updated_at: "2022-07-24T22:01:23.000000Z"
          },
          created_at: "2022-07-24T22:07:45.000000Z",
          updated_at: "2022-07-24T22:07:45.000000Z",
          images: [
            "/assets/mate_ceramica_1.jpg"
          ],
          max_dues: [
            {
              id: 40,
              name: "master",
              dues: 12,
              product_id: 16,
              created_at: "2022-07-24T22:07:52.000000Z",
              updated_at: "2022-07-24T22:07:52.000000Z"
            },
            {
              id: 41,
              name: "visa",
              dues: 6,
              product_id: 16,
              created_at: "2022-07-24T22:07:56.000000Z",
              updated_at: "2022-07-24T22:07:56.000000Z"
            },
            {
              id: 42,
              name: "oca",
              dues: 6,
              product_id: 16,
              created_at: "2022-07-24T22:08:02.000000Z",
              updated_at: "2022-07-24T22:08:02.000000Z"
            }
          ]
        },
        {
          id: 17,
          name: "Camiseta de fútbol random",
          slug: "camiseta-futbol-random",
          description: "Una camiseta de un equipo de fútbol uruguayo al azar, te puede tocar la del manya o la de algún equipo chico, como Nacional",
          price: 1990.00,
          stock: 40.00,
          category: 4,
          owner: {
            id: 7,
            name: "Guapetón",
            avatar: "https://i.pinimg.com/originals/7a/49/ca/7a49ca0a46717aa2d4aa077847583ee7.jpg",
            email: "guapeton@gmail.com",
            facebook: "Guapetón",
            instagram: "@guapeton",
            celular: "094 579 375",
            created_at: "2022-07-24T22:16:37.000000Z",
            updated_at: "2022-07-24T22:16:37.000000Z"
          },
          created_at: "2022-07-24T22:18:34.000000Z",
          updated_at: "2022-07-24T22:18:34.000000Z",
          images: [
            '/assets/camiseta_random.jpg'
          ],
          max_dues: [
            {
              id: 43,
              name: "visa",
              dues: 12,
              product_id: 17,
              created_at: "2022-07-24T22:18:46.000000Z",
              updated_at: "2022-07-24T22:18:46.000000Z"
            },
            {
              id: 44,
              name: "master",
              dues: 12,
              product_id: 17,
              created_at: "2022-07-24T22:18:51.000000Z",
              updated_at: "2022-07-24T22:18:51.000000Z"
            }
          ]
        },
        {
          id: 18,
          name: "Pantalon Cargo",
          slug: "pantalon-cargo",
          description: "En brin 100% algodón, varios colores\nCosturas triples, 6 bolsillos",
          price: 1590.00,
          stock: 52.00,
          category: 4,
          owner: {
            id: 7,
            name: "Guapetón",
            avatar: "https://i.pinimg.com/originals/7a/49/ca/7a49ca0a46717aa2d4aa077847583ee7.jpg",
            email: "guapeton@gmail.com",
            facebook: "Guapetón",
            instagram: "@guapeton",
            celular: "094 579 375",
            created_at: "2022-07-24T22:16:37.000000Z",
            updated_at: "2022-07-24T22:16:37.000000Z"
          },
          created_at: "2022-07-24T22:21:21.000000Z",
          updated_at: "2022-07-24T22:21:21.000000Z",
          images: [
            "/assets/pantalon_cargo_1.jpg",
            "/assets/pantalon_cargo_2.jpg"
          ],
          max_dues: [
            {
              id: 45,
              name: "master",
              dues: 12,
              product_id: 18,
              created_at: "2022-07-24T22:21:28.000000Z",
              updated_at: "2022-07-24T22:21:28.000000Z"
            },
            {
              id: 46,
              name: "visa",
              dues: 12,
              product_id: 18,
              created_at: "2022-07-24T22:21:33.000000Z",
              updated_at: "2022-07-24T22:21:33.000000Z"
            }
          ]
        },
        {
          id: 19,
          name: "Medias deportivas x6",
          slug: "medias-deportivas",
          description: "Medias para caballero talle único que abarca del 41 al 46 aprox\nComposición: 80 % algodón - 20 % Nylon",
          price: 490.00,
          stock: 200.00,
          category: 4,
          owner: {
            id: 7,
            name: "Guapetón",
            avatar: "https://i.pinimg.com/originals/7a/49/ca/7a49ca0a46717aa2d4aa077847583ee7.jpg",
            email: "guapeton@gmail.com",
            facebook: "Guapetón",
            instagram: "@guapeton",
            celular: "094 579 375",
            created_at: "2022-07-24T22:16:37.000000Z",
            updated_at: "2022-07-24T22:16:37.000000Z"
          },
          created_at: "2022-07-24T22:26:30.000000Z",
          updated_at: "2022-07-24T22:26:30.000000Z",
          images: [
            "/assets/medias_deportivas_1.jpg",
            "/assets/medias_deportivas_2.jpg"
          ],
          max_dues: [
            {
              id: 47,
              name: "visa",
              dues: 12,
              product_id: 19,
              created_at: "2022-07-24T22:26:36.000000Z",
              updated_at: "2022-07-24T22:26:36.000000Z"
            },
            {
              id: 48,
              name: "master",
              dues: 12,
              product_id: 19,
              created_at: "2022-07-24T22:26:40.000000Z",
              updated_at: "2022-07-24T22:26:40.000000Z"
            }
          ]
        },
        {
          id: 20,
          name: "Gorra Rusa",
          slug: "gorra-rusa",
          description: "Gorro ruso original, para protegerse del frio siberiano",
          price: 690.00,
          stock: 25.00,
          category: 4,
          owner: {
            id: 7,
            name: "Guapetón",
            avatar: "https://i.pinimg.com/originals/7a/49/ca/7a49ca0a46717aa2d4aa077847583ee7.jpg",
            email: "guapeton@gmail.com",
            facebook: "Guapetón",
            instagram: "@guapeton",
            celular: "094 579 375",
            created_at: "2022-07-24T22:16:37.000000Z",
            updated_at: "2022-07-24T22:16:37.000000Z"
          },
          created_at: "2022-07-24T22:31:01.000000Z",
          updated_at: "2022-07-24T22:31:01.000000Z",
          images: [
            "/assets/gorra_rusa_1.jpg"
          ],
          max_dues: [
            {
              id: 49,
              name: "master",
              dues: 12,
              product_id: 20,
              created_at: "2022-07-24T22:31:08.000000Z",
              updated_at: "2022-07-24T22:31:08.000000Z"
            },
            {
              id: 50,
              name: "visa",
              dues: 12,
              product_id: 20,
              created_at: "2022-07-24T22:31:11.000000Z",
              updated_at: "2022-07-24T22:31:11.000000Z"
            }
          ]
        },
        {
          id: 21,
          name: "Guantes de entrenamiento",
          slug: "guantes-entrenamiento",
          description: "Excelentes guantes de entrenamiento. La almohadilla en la palma amortigua el impacto y disminuye el rozamiento protegiendo tus manos de callos y ampollas.",
          price: 590.00,
          stock: 25.00,
          category: 4,
          owner: {
            id: 7,
            name: "Guapetón",
            avatar: "https://i.pinimg.com/originals/7a/49/ca/7a49ca0a46717aa2d4aa077847583ee7.jpg",
            email: "guapeton@gmail.com",
            facebook: "Guapetón",
            instagram: "@guapeton",
            celular: "094 579 375",
            created_at: "2022-07-24T22:16:37.000000Z",
            updated_at: "2022-07-24T22:16:37.000000Z"
          },
          created_at: "2022-07-24T22:32:58.000000Z",
          updated_at: "2022-07-24T22:32:58.000000Z",
          images: [
            "/assets/guante_entrenamiento_1.jpg"
          ],
          max_dues: [
            {
              id: 51,
              name: "visa",
              dues: 12,
              product_id: 21,
              created_at: "2022-07-24T22:33:04.000000Z",
              updated_at: "2022-07-24T22:33:04.000000Z"
            },
            {
              id: 52,
              name: "master",
              dues: 12,
              product_id: 21,
              created_at: "2022-07-24T22:33:07.000000Z",
              updated_at: "2022-07-24T22:33:07.000000Z"
            }
          ]
        },
        {
          id: 22,
          name: "Cerrajero",
          slug: "cerrajero",
          description: "Cerrajero al instante para arreglar cualquier imprevisto, o para cuando te cambian la cerradura de la casa.",
          price: 590.00,
          stock: 5.00,
          category: 5,
          owner: {
            id: 8,
            name: "Fix it",
            avatar: "https://dcassetcdn.com/design_img/3625261/724485/724485_19975223_3625261_85af3a80_image.jpg",
            email: "fixit@gmail.com",
            facebook: "Fix it",
            instagram: "@fix.it",
            celular: "091 781 627",
            created_at: "2022-07-24T22:37:01.000000Z",
            updated_at: "2022-07-24T22:37:01.000000Z"
          },
          created_at: "2022-07-24T22:38:03.000000Z",
          updated_at: "2022-07-24T22:38:03.000000Z",
          images: [
            "/assets/cerrajero_1.jpg"
          ],
          max_dues: [
            {
              id: 53,
              name: "master",
              dues: 1,
              product_id: 22,
              created_at: "2022-07-24T22:38:15.000000Z",
              updated_at: "2022-07-24T22:38:15.000000Z"
            },
            {
              id: 54,
              name: "visa",
              dues: 1,
              product_id: 22,
              created_at: "2022-07-24T22:38:19.000000Z",
              updated_at: "2022-07-24T22:38:19.000000Z"
            }
          ]
        },
        {
          id: 23,
          name: "Sanitario",
          slug: "sanitario",
          description: "Pérdidas invisibles? Inundaciones? Humedad? Pérdidas visibles? Todo solucionable en 15 minutos garantido",
          price: 690.00,
          stock: 5.00,
          category: 5,
          owner: {
            id: 8,
            name: "Fix it",
            avatar: "https://dcassetcdn.com/design_img/3625261/724485/724485_19975223_3625261_85af3a80_image.jpg",
            email: "fixit@gmail.com",
            facebook: "Fix it",
            instagram: "@fix.it",
            celular: "091 781 627",
            created_at: "2022-07-24T22:37:01.000000Z",
            updated_at: "2022-07-24T22:37:01.000000Z"
          },
          created_at: "2022-07-24T22:39:44.000000Z",
          updated_at: "2022-07-24T22:39:44.000000Z",
          images: [
            "/assets/sanitario_1.jpg"
          ],
          max_dues: [
            {
              id: 55,
              name: "visa",
              dues: 1,
              product_id: 23,
              created_at: "2022-07-24T22:40:05.000000Z",
              updated_at: "2022-07-24T22:40:05.000000Z"
            },
            {
              id: 56,
              name: "master",
              dues: 1,
              product_id: 23,
              created_at: "2022-07-24T22:40:08.000000Z",
              updated_at: "2022-07-24T22:40:08.000000Z"
            }
          ]
        },
        {
          id: 24,
          name: "Fletes",
          slug: "fletes",
          description: "No culpes a la noche, no culpes a la playa, no culpes a la lluvia, te pinta una mudanza?",
          price: 990.00,
          stock: 5.00,
          category: 5,
          owner: {
            id: 8,
            name: "Fix it",
            avatar: "https://dcassetcdn.com/design_img/3625261/724485/724485_19975223_3625261_85af3a80_image.jpg",
            email: "fixit@gmail.com",
            facebook: "Fix it",
            instagram: "@fix.it",
            celular: "091 781 627",
            created_at: "2022-07-24T22:37:01.000000Z",
            updated_at: "2022-07-24T22:37:01.000000Z"
          },
          created_at: "2022-07-24T22:41:49.000000Z",
          updated_at: "2022-07-24T22:41:49.000000Z",
          images: [
            "/assets/fletes_1.jpg"
          ],
          max_dues: [
            {
              id: 57,
              name: "master",
              dues: 1,
              product_id: 24,
              created_at: "2022-07-24T22:41:54.000000Z",
              updated_at: "2022-07-24T22:41:54.000000Z"
            },
            {
              id: 58,
              name: "visa",
              dues: 1,
              product_id: 24,
              created_at: "2022-07-24T22:41:57.000000Z",
              updated_at: "2022-07-24T22:41:57.000000Z"
            }
          ]
        },
        {
          id: 25,
          name: "Chef personal",
          slug: "chef-personal",
          description: "No tenés ganas de cocinar hoy? Podés contratar a Puglia u otro de los chefs disponibles para que te cocine durante todo el día",
          price: 2290.00,
          stock: 5.00,
          category: 5,
          owner: {
            id: 8,
            name: "Fix it",
            avatar: "https://dcassetcdn.com/design_img/3625261/724485/724485_19975223_3625261_85af3a80_image.jpg",
            email: "fixit@gmail.com",
            facebook: "Fix it",
            instagram: "@fix.it",
            celular: "091 781 627",
            created_at: "2022-07-24T22:37:01.000000Z",
            updated_at: "2022-07-24T22:37:01.000000Z"
          },
          created_at: "2022-07-24T22:44:23.000000Z",
          updated_at: "2022-07-24T22:44:23.000000Z",
          images: [
            "/assets/chef_1.jpg"
          ],
          max_dues: [
            {
              id: 59,
              name: "visa",
              dues: 1,
              product_id: 25,
              created_at: "2022-07-24T22:44:29.000000Z",
              updated_at: "2022-07-24T22:44:29.000000Z"
            },
            {
              id: 60,
              name: "master",
              dues: 1,
              product_id: 25,
              created_at: "2022-07-24T22:44:51.000000Z",
              updated_at: "2022-07-24T22:44:51.000000Z"
            }
          ]
        },
        {
          id: 26,
          name: "Paseador de perros",
          slug: "paseador-de-perros",
          description: "Paseos de perros de 90 minutos con ubicación GPS, + hidratación, recreación, y socializacion con otros perros",
          price: 550.00,
          stock: 5.00,
          category: 5,
          owner: {
            id: 8,
            name: "Fix it",
            avatar: "https://dcassetcdn.com/design_img/3625261/724485/724485_19975223_3625261_85af3a80_image.jpg",
            email: "fixit@gmail.com",
            facebook: "Fix it",
            instagram: "@fix.it",
            celular: "091 781 627",
            created_at: "2022-07-24T22:37:01.000000Z",
            updated_at: "2022-07-24T22:37:01.000000Z"
          },
          created_at: "2022-07-24T22:46:30.000000Z",
          updated_at: "2022-07-24T22:46:30.000000Z",
          images: [
            "/assets/paseador_perros_1.jpg"
          ],
          max_dues: [
            {
              id: 61,
              name: "master",
              dues: 1,
              product_id: 26,
              created_at: "2022-07-24T22:46:37.000000Z",
              updated_at: "2022-07-24T22:46:37.000000Z"
            },
            {
              id: 62,
              name: "visa",
              dues: 1,
              product_id: 26,
              created_at: "2022-07-24T22:46:40.000000Z",
              updated_at: "2022-07-24T22:46:40.000000Z"
            }
          ]
        },
        {
            id: 27,
            name: 'La diabética',            
            description: 'Tan dulce que la llamaron para un casting de Disney+! Si sos de esos amargados que no le ven la alegría a la vida y que te quejás de todo... Esta  torta es para vos! Ayudate a vos mismo y a tu dentista claramente. No te quedes sin probar esta delicia traída directamente desde el palacio del Olimpo.',
            price: 1300,
            stock: 10,
            category: 2,
            outstanding: 1,
            images: [
                '/assets/torta_1.jpg',
                '/assets/torta_2.jpeg'
            ],
            max_dues: [
                { 
                  'name': 'master',
                  'dues': 10  
                },
                { 
                  'name': 'visa',
                  'dues': 10  
                },
                { 
                  'name': 'oca',
                  'dues': 6  
                }       
            ],
            owner: {
                name: 'La del Dentista',
                avatar: 'http://3.bp.blogspot.com/-mU-41WUamK4/U1UykcPJCwI/AAAAAAAAAoI/f_t5CuG4Y0U/s1600/logo.jpg',
                email: 'dentista@gmail.com',
                facebook: 'TortasDentistas', 
                instagram: '@dentistas.tortas', 
                celular: '091 451 029', 
            }
        },
        {
            id: 28,
            name: 'El más grande de Uruguay',
            description: 'El Club Nacional de Football es una institución deportiva de Uruguay. Fue fundado el 14 de mayo de 1899 en Montevideo, por iniciativa de jóvenes estudiantes de la época, con la intención de consolidar una institución de fútbol para uruguayos criollos frente al predominio de clubes y practicantes extranjeros europeos de este deporte, particularmente ingleses y alemanes, siendo considerado así el "primer equipo criollo" del país y uno de los primeros clubes fundados por nacionales en América.',
            price: 3000,
            stock: 1,
            category: 3,
            outstanding: 1,
            images: [
                '/assets/nacional.jpg'
            ],
            max_dues: [
                { 
                  'name': 'visa',
                  'dues': 12  
                },
                { 
                  'name': 'oca',
                  'dues': 1  
                }       
            ],
            owner: {
                name: 'La Primera Hinchada',
                avatar: 'https://tienda.nacional.uy/public/web/img/logo-og.png',
                email: 'primerahinchada@gmail.com',
                facebook: 'La Primera Hinchada', 
                instagram: '@primerahinchada', 
                celular: '099 111 222', 
            }
        },
        {
            id: 29,
            name: 'Vestido para la Primavera',
            description: 'Si te llamás Florencia, o Jazmín (Flor de nomnbre), este vestido es para vos! Idea para la primavera, o si a tu chongo le gustan las flores de tipas...',
            price: 1200,
            stock: 2,
            category: 4,
            outstanding: 1,
            images: [
                '/assets/vestido.jpg'
            ],
            max_dues: [
                { 
                  'name': 'master',
                  'dues': 6  
                },
                { 
                  'name': 'visa',
                  'dues': 12  
                },
                { 
                  'name': 'oca',
                  'dues': 3  
                }       
            ],
            owner: {
                name: 'Miss Elegant',
                avatar: 'https://img.freepik.com/vector-premium/vestido-largo-rojo-sobre-logo-percha_8262-111.jpg',
                email: 'messelegant@gmail.com',
                facebook: 'Miss Elegant', 
                instagram: '@miss.elegant', 
                celular: '092 15 24 36', 
            }
        },
        {
            id: 30,
            name: 'Juan el plomero',
            description: 'Plomería es un concepto que se emplea en varios países latinoamericanos para nombrar al trabajo que consiste en instalar, mantener y reparar las tuberías (también conocidas como cañerías). A través de estas tuberías, es posible evacuar las aguas cloacales (que trasladan orina y materia fecal desde los cuartos de baño) y abastecer a la población de agua potable (apta para ser consumida por el ser humano sin que se presente un riesgo para la salud).',
            price: 2000,
            stock: 1,
            category: 5,
            outstanding: 1,
            images: [
                '/assets/juan.png'
            ],
            max_dues: [
                { 
                  'name': 'visa',
                  'dues': 1  
                }      
            ],
            owner: {
                name: 'Juan El Plomero',
                avatar: 'https://definicion.de/wp-content/uploads/2013/04/plomeria.jpg',
                email: 'juancito@gmail.com',
                facebook: 'Juan Plomerito', 
                instagram: '@plomero.juan', 
                celular: '098 88 92 35', 
            }
        },
        {
            id: 31,
            name: 'Stand Up a tu fiesta!',
            description: 'El stand up, llamado también monólogo o comedia en vivo en algunos países de habla hispana,[cita requerida] es un estilo de comedia donde el actor y humorista se dirige directamente a una audiencia presente en el lugar, generalmente de modo unipersonal, con un texto que expresa su visión del mundo. A diferencia del teatro tradicional, el comediante de stand up mantiene un estilo de interacción con el público, que suele incluir diálogos cortos con la audiencia. También se usa el anglicismo stand up comedy (literalmente, «comedia de pie»), expresión que alude a la característica típica del género: un comediante de pie, con un micrófono, frente a un público y sin otros elementos dramáticos. En algunos países hispanoamericanos se usan los neologismos «standupero» o «standapero» para referirse al comediante que hace stand up.',
            price: 3000,
            stock: 1,
            category: 6,
            outstanding: 1,
            images: [
                '/assets/standup.jpg'
            ],
            max_dues: [
                { 
                    'name': 'master',
                    'dues': 12  
                  },
                  { 
                    'name': 'visa',
                    'dues': 12  
                  },
                  { 
                    'name': 'oca',
                    'dues': 12  
                  }        
            ],
            owner: {
                name: 'Stand Up Uruguay',
                avatar: 'https://i.pinimg.com/originals/a4/41/16/a441162775b1dbe79a48cb376c0ee54d.png',
                email: 'standup@gmail.com',
                facebook: 'Stand Up Comedy', 
                instagram: '@stand.up', 
                celular: '092 333 555', 
            }
        },
        {
            id: 32,
            name: 'Teatro',
            description: 'Función de teatro por una hora para tu fiesta o evento. Animamos la fiesta y les sacamos la cara fea. Distintos tipos de teatro (comedia, dramático, suspenso, etc).',
            price: 5000,
            stock: 1,
            category: 6,
            images: [
                '/assets/teatro_1.jpeg',
                '/assets/teatro_2.jpg'
            ],
            max_dues: [
                { 
                    'name': 'master',
                    'dues': 12  
                  },
                  { 
                    'name': 'visa',
                    'dues': 5  
                  },
                  { 
                    'name': 'oca',
                    'dues': 6  
                  }        
            ],
            owner: {
                name: 'Animaciones Uy',
                avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Teatro.svg/853px-Teatro.svg.png',
                email: 'animaciones@gmail.com',
                facebook: 'Animaciones Uy', 
                instagram: '@ani.maciones', 
                celular: '092 111 222', 
            }
        },
        {
            id: 33,
            name: 'Animaciones para cumpleaños',
            description: 'Shows de Stand Up, juegos de agua, payasos, magos. Decinos que querés y te armamos el presupuesto!',
            price: 5000,
            stock: 1,
            category: 6,
            images: [
                '/assets/animacion_1.jpg',
                '/assets/animacion_2.jfif',
                '/assets/animacion_3.jfif'
            ],
            max_dues: [
                { 
                    'name': 'master',
                    'dues': 12  
                  },
                  { 
                    'name': 'visa',
                    'dues': 1  
                  },
                  { 
                    'name': 'oca',
                    'dues': 6  
                  }        
            ],
            owner: {
                name: 'Animaciones Uy',
                avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Teatro.svg/853px-Teatro.svg.png',
                email: 'animaciones@gmail.com',
                facebook: 'Animaciones Uy', 
                instagram: '@ani.maciones', 
                celular: '092 111 222', 
            }
        },
    ]
};