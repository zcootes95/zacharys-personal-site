import { parseDate } from "./parseDate"

export const formatDateXAxis = (dateStr: string) => {
    const date = parseDate(dateStr)
    return date.toLocaleDateString('en-US', {
        year: 'numeric'
    })
}
