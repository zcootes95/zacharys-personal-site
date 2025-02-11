import { fileToDataUrl } from './filetoDataUrl'
import { pixelsToAscii } from './pixelsToAscii'
import { resizeImage } from './resizeImage'
import { loadImageFromDataUrl } from './loadImageFromDataUrl'

export const imageToAscii = async (file: File): Promise<string | undefined> => {
    try {
        // 1. convert file to data url
        const dataUrl = await fileToDataUrl(file)

        // 2. load in image
        const image = await loadImageFromDataUrl(dataUrl)

        // 3. resize to fit screen
        const canvas = resizeImage(image)

        // 4. convert pixels to characters
        const asciiImage = pixelsToAscii(canvas)

        return asciiImage
    } catch (err) {
        // alert the user
        console.log(err)
        alert('Error converting image to ASCII')
    }
}
