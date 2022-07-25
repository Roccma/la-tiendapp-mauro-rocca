export const getCategoryName = ( categoryId ) => {
  switch( categoryId ){
    case 1: 
        return 'Comidas';
    case 2: 
        return 'Pastelería';
    case 3: 
        return 'Artesanías';
    case 4: 
        return 'Ropa';
    case 5: 
        return 'Servicios';
    case 6: 
        return 'Eventos';
  }
}
