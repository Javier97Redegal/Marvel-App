export const getResultsMessage = (number: number): string => {
    return `Result${number === 1 ? '' : 's'}`
}