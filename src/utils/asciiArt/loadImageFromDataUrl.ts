const loadImageFromDataUrl = async (dataUrl: string): Promise<HTMLImageElement> => {
    return new Promise((resolve, reject) => {
        // Option 1: create an <img> via the DOM
        const img = document.createElement('img')

        // Option 2: cast new Image() to HTMLImageElement
        // const img = new Image() as HTMLImageElement;

        img.onload = () => resolve(img)
        img.onerror = (err) => reject(err)
        img.src = dataUrl
    })
}