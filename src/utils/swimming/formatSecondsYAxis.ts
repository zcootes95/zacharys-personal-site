export const formatSecondsYAxis = (value: number) => {
    const minutes = Math.floor(value / 60)
    const seconds = value % 60
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds.toFixed(0)}`
}
