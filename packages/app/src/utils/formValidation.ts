export const validateEmail = (email: string): boolean => {
    // Regular expression for a simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    return emailRegex.test(email)
}

export const validatePhoneNumber = (phone: string) => {
    // Regular expression for Dutch phone numbers
    const phoneRegex = /^(\+31|0|31)?[1-9][0-9]{8}$/

    return phoneRegex.test(phone)
}

export const validateName = (name: string) => {
    // Regular expression for names (allowing letters, spaces, and hyphens)
    const nameRegex = /^[a-zA-Z\s-]+$/

    return nameRegex.test(name)
}

export const validationTextMapper = (type: string) => {
    switch (type) {
        case 'email':
            return 'Ongeldige e-mail. Gelieve een geldig e-mailadres in te vullen.'
        case 'phone':
            return 'Ongeldig telefoonnummer. Voer een geldig nummer.'
        case 'name':
            return 'Ongeldige naam. Vul een geldige naam in met alleen letters en spaties.'
        default:
            return ''
    }
}
