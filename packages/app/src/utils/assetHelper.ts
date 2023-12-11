type Directory = 'background' | 'company-logos' | 'header' | 'loader' | 'logo'

export const getAsset = (fileName: string, directory?: Directory) => {
    if (directory) {
        return `/assets/${directory}/${fileName}`
    }
    return `/assets/${fileName}`
}
