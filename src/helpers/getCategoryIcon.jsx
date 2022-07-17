import { LocalPizzaRounded, CakeRounded, PaletteRounded, CheckroomRounded, CleaningServicesRounded, EventAvailableRounded } from '@mui/icons-material'

export const getCategoryIcon = ( category ) => {
    switch( category ){
        case 'Comidas':
            return <LocalPizzaRounded className = 'icon-badge'/>;
        case 'Pastelería':
            return <CakeRounded className = 'icon-badge'/>;
        case 'Artesanías':
            return <PaletteRounded className = 'icon-badge'/>;
        case 'Ropa':
            return <CheckroomRounded className = 'icon-badge'/>;
        case 'Servicios':
            return <CleaningServicesRounded className = 'icon-badge'/>;
        case 'Eventos':
            return <EventAvailableRounded className = 'icon-badge'/>;
        
    }
}