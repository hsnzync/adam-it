type Filter = 'title' | 'type' | 'location'

export const filterMapper = (value: string): Filter => {
    switch (value) {
        case 'functie':
            return 'title'
        case 'type':
            return 'type'
        case 'locatie':
            return 'location'
        default:
            return 'title'
    }
}
