import { ASCII_CHARS } from '@/constants/ascii/asciiCharacters'

export const pixelsToAscii = (canvas: HTMLCanvasElement): string => {
    const ctx = canvas.getContext('2d')
    if (!ctx) return ''

    const { width, height } = canvas
    const { data } = ctx.getImageData(0, 0, width, height)

    let asciiString = ''
    for (let i = 0; i < data.length; i += 4) {
        const r = data[i]
        const g = data[i + 1]
        const b = data[i + 2]
        // Ignore alpha (data[i + 3]) since it's fully opaque for most images.
        const avg = (r + g + b) / 3
        asciiString += ASCII_CHARS[Math.floor(avg / 25)]
    }

    // Insert line breaks
    let finalAscii = ''
    for (let i = 0; i < asciiString.length; i += width) {
        finalAscii += asciiString.substring(i, i + width) + '\n'
    }

    return finalAscii
}
