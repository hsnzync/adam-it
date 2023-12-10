export const handleFirstVisitOrExpired = (): boolean => {
    const storedData = localStorage.getItem('visitData')

    if (!storedData) {
        // If no data is present, it's the first visit
        const visitData = {
            visitedAt: new Date().getTime(),
        }

        localStorage.setItem('visitData', JSON.stringify(visitData))
        return true
    } else {
        // If data is present, check if it's been one hour since the last visit
        const parsedData = JSON.parse(storedData)
        const oneHourInMilliseconds = 60 * 60 * 1000
        const timeSinceLastVisit = new Date().getTime() - parsedData.visitedAt

        if (timeSinceLastVisit >= oneHourInMilliseconds) {
            // If it's been one hour, update the timestamp to the current time
            parsedData.visitedAt = new Date().getTime()
            localStorage.setItem('visitData', JSON.stringify(parsedData))
            return true
        }

        return false
    }
}
