export const convertTimeToSeconds = (timeStr: string) => {
    const [min, sec] = timeStr.split(':')
    return parseInt(min, 10) * 60 + parseFloat(sec)
}
