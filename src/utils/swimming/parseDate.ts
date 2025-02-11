export const parseDate = (dateStr: string): Date => {
    const [month, day, year] = dateStr.split('-')
    return new Date(Number.parseInt(year), Number.parseInt(month) - 1, Number.parseInt(day))
}
