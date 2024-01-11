export const removeFileExtension = (fileName: string): string => {
    const validExtensions = ['.pdf', '.docx', '.doc']

    // Check if the file name has a valid extension
    const hasValidExtension = validExtensions.some((extension) =>
        fileName.endsWith(extension)
    )

    if (hasValidExtension) {
        // Find the last occurrence of a valid extension in the file name
        const lastDotIndex = Math.max(
            ...validExtensions.map((extension) =>
                fileName.lastIndexOf(extension)
            )
        )

        // If a valid extension is found, return the file name without the extension
        if (lastDotIndex !== -1) {
            return fileName.substring(0, lastDotIndex)
        }
    }

    // If no valid extension is found or if the file name has no extension, return the original file name
    return fileName
}
