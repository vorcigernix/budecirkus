export const isInDateRange = (start, end) => {
    const startDate = new Date(start)
    const endDate = new Date(end)
    const currentDate = new Date()
    return currentDate > startDate && currentDate < endDate
}
