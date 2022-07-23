export const products = {
    data : [
        {
            id: 1,
            name: 'Pizza ba-con-cheddar',
            description: 'Porque la creatividad está a la orden del día. La mejor pizza con Bacon (Panceta para los que no saben english) y Queso cheddar que vas a encontrar! Dejate de joder con restaurantes finos, pedinos que encima te la llevamos al toque y disfrutás de una rica pizza! Qué más querés?',
            price: 350,
            stock: 10,
            category: 1,
            images: [
                '/assets/pizza_1.png',
                '/assets/pizza_2.jpg',
                '/assets/pizza_3.jpg',
                '/assets/pizza_4.jfif',
            ],
            max_dues: [
                { 
                  'name': 'master',
                  'dues': 3  
                },
                { 
                  'name': 'visa',
                  'dues': 3  
                },
                { 
                  'name': 'oca',
                  'dues': 1  
                }       
            ],
            owner: {
                name: 'Pizzas Montevideo',
                avatar: 'https://media.istockphoto.com/vectors/slice-of-pizza-logo-for-advertising-vector-id1284770763?b=1&k=20&m=1284770763&s=612x612&w=0&h=NOTsvh0aCJDRfcyganqSHLYMiOg37P_3bE2_nObMiDM=',
                email: 'pizzasmdeo@gmail.com',
                facebook: 'Pizzas Montevideo', 
                instagram: '@pizzas.mvd', 
                celular: '092 215 369', 
            }
        },
        {
            id: 2,
            name: 'La diabética',            
            description: 'Tan dulce que la llamaron para un casting de Disney+! Si sos de esos amargados que no le ven la alegría a la vida y que te quejás de todo... Esta  torta es para vos! Ayudate a vos mismo y a tu dentista claramente. No te quedes sin probar esta delicia traída directamente desde el palacio del Olimpo.',
            price: 1300,
            stock: 10,
            category: 2,
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
            id: 3,
            name: 'El más grande de Uruguay',
            description: 'El Club Nacional de Football es una institución deportiva de Uruguay. Fue fundado el 14 de mayo de 1899 en Montevideo, por iniciativa de jóvenes estudiantes de la época, con la intención de consolidar una institución de fútbol para uruguayos criollos frente al predominio de clubes y practicantes extranjeros europeos de este deporte, particularmente ingleses y alemanes, siendo considerado así el "primer equipo criollo" del país y uno de los primeros clubes fundados por nacionales en América.',
            price: 3000,
            stock: 1,
            category: 3,
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
            id: 4,
            name: 'Vestido para la Primavera',
            description: 'Si te llamás Florencia, o Jazmín (Flor de nomnbre), este vestido es para vos! Idea para la primavera, o si a tu chongo le gustan las flores de tipas...',
            price: 1200,
            stock: 2,
            category: 4,
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
            id: 5,
            name: 'Juan el plomero',
            description: 'Plomería es un concepto que se emplea en varios países latinoamericanos para nombrar al trabajo que consiste en instalar, mantener y reparar las tuberías (también conocidas como cañerías). A través de estas tuberías, es posible evacuar las aguas cloacales (que trasladan orina y materia fecal desde los cuartos de baño) y abastecer a la población de agua potable (apta para ser consumida por el ser humano sin que se presente un riesgo para la salud).',
            price: 2000,
            stock: 1,
            category: 5,
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
            id: 6,
            name: 'Stand Up a tu fiesta!',
            description: 'El stand up, llamado también monólogo o comedia en vivo en algunos países de habla hispana,[cita requerida] es un estilo de comedia donde el actor y humorista se dirige directamente a una audiencia presente en el lugar, generalmente de modo unipersonal, con un texto que expresa su visión del mundo. A diferencia del teatro tradicional, el comediante de stand up mantiene un estilo de interacción con el público, que suele incluir diálogos cortos con la audiencia. También se usa el anglicismo stand up comedy (literalmente, «comedia de pie»), expresión que alude a la característica típica del género: un comediante de pie, con un micrófono, frente a un público y sin otros elementos dramáticos. En algunos países hispanoamericanos se usan los neologismos «standupero» o «standapero» para referirse al comediante que hace stand up.',
            price: 3000,
            stock: 1,
            category: 6,
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
        }
    ]
};