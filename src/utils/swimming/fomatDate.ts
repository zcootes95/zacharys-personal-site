import { parseDate } from "./parseDate"

export const formatDate = (dateStr: string) => {
    const date = parseDate(dateStr)
    return date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    })
}
