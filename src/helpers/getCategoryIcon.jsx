import { LocalPizzaRounded, CakeRounded, PaletteRounded, CheckroomRounded, CleaningServicesRounded, EventAvailableRounded } from '@mui/icons-material'

export const getCategoryIcon = ( category ) => {
    switch( category ){
        case 1:
            return <LocalPizzaRounded className = 'icon-badge'/>;
        case 2:
            return <CakeRounded className = 'icon-badge'/>;
        case 3:
            return <PaletteRounded className = 'icon-badge'/>;
        case 4:
            return <CheckroomRounded className = 'icon-badge'/>;
        case 5:
            return <CleaningServicesRounded className = 'icon-badge'/>;
        case 6:
            return <EventAvailableRounded className = 'icon-badge'/>;    
    }
}