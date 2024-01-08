export const getFileExtension = (filename: string): string | null => {
    const match = /\.([a-zA-Z0-9]+)$/.exec(filename)

    if (match && match[1]) {
        return `.${match[1].toLowerCase()}`
    }

    return null
}
