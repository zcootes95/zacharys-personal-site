export const resizeImage = (img: HTMLImageElement, newWidth = 150): HTMLCanvasElement => {
    const ratio = img.height / (2 * img.width)
    const newHeight = Math.floor(newWidth * ratio)

    const canvas = document.createElement('canvas')
    canvas.width = newWidth
    canvas.height = newHeight

    const ctx = canvas.getContext('2d')
    if (ctx) {
        ctx.drawImage(img, 0, 0, newWidth, newHeight)
    }

    return canvas
}
