// src/App.js
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ChangeEvent, FormEvent, useState } from 'react'
import pica from 'pica'
import { CopyBlock, dracula, atomOneLight } from 'react-code-blocks'
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarShortcut, MenubarTrigger } from '@/components/ui/menubar'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { Camera } from 'lucide-react' // update
import { foxtailAsciiArt } from '@/constants/foxtailAscii'
import { justTalkAsciiArt } from '@/constants/justtalk'

const imageToAscii = async (file: File, maxPixelWidth = 1000, estimatedCharWidth = 8): Promise<string> => {
    // Determine the max number of ascii columns that fit in maxPixelWidth.
    const asciiColumns = Math.floor(maxPixelWidth / estimatedCharWidth)
    // Because each ascii char is duplicated, our target width is half that.
    const targetWidth = Math.floor(asciiColumns / 2)

    const picaInstance = pica()
    return new Promise((resolve, reject) => {
        const img = new Image()
        img.onload = async () => {
            // Draw the image at full size.
            const sourceCanvas = document.createElement('canvas')
            sourceCanvas.width = img.width
            sourceCanvas.height = img.height
            const sourceCtx = sourceCanvas.getContext('2d')
            if (!sourceCtx) return reject(new Error('Canvas not supported'))
            sourceCtx.drawImage(img, 0, 0)

            // Calculate target dimensions.
            const aspectRatio = img.height / img.width
            const targetHeight = Math.floor(targetWidth * aspectRatio * 0.55)
            const targetCanvas = document.createElement('canvas')
            targetCanvas.width = targetWidth
            targetCanvas.height = targetHeight

            try {
                await picaInstance.resize(sourceCanvas, targetCanvas, { quality: 3 })
                const ctx = targetCanvas.getContext('2d')
                if (!ctx) return reject(new Error('Canvas not supported'))
                const { data } = ctx.getImageData(0, 0, targetWidth, targetHeight)
                const asciiChars = '@%#*+=-:., '
                let asciiStr = ''

                for (let y = 0; y < targetHeight; y++) {
                    let rowStr = ''
                    for (let x = 0; x < targetWidth; x++) {
                        const idx = (y * targetWidth + x) * 4
                        const r = data[idx],
                            g = data[idx + 1],
                            b = data[idx + 2]
                        // Convert to grayscale using luminance.
                        const grayscale = Math.floor(0.299 * r + 0.587 * g + 0.114 * b)
                        const charIndex = Math.floor((grayscale * asciiChars.length) / 256)
                        const asciiChar = asciiChars[charIndex]
                        // Duplicate the char to maintain aspect ratio.
                        rowStr += asciiChar + asciiChar
                    }
                    asciiStr += rowStr + '\n'
                }
                resolve(asciiStr)
            } catch (err) {
                reject(err)
            }
        }
        img.onerror = (err) => reject(err)
        img.src = URL.createObjectURL(file)
    })
}
const AsciiArtScreen = () => {
    const [file, setFile] = useState<File | null>(null)
    const [inputAsciiCharacters, setInputAsciiCharacters] = useState<string | undefined>('@%#*+=-:., ')
    const [asciiArt, setAsciiArt] = useState('')

    const [isLoading, setIsLoading] = useState(false)

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setFile(e.target.files[0])
        }
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        if (!file) return
        setIsLoading(true)
        try {
            const ascii = await imageToAscii(file)
            setAsciiArt(ascii)
        } catch (error) {
            console.error(error)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <Tabs defaultValue='account' className='w-full'>
            <TabsList className='grid w-full grid-cols-2'>
                <TabsTrigger value='account'>Generator</TabsTrigger>
                <TabsTrigger value='password'>Gallery</TabsTrigger>
            </TabsList>
            <TabsContent value='account'>
                <Card>
                    <CardHeader>
                        <CardTitle>Ascii Art Generator</CardTitle>
                        <CardDescription>Add a photo to generate Ascii Art. Note the simpler the photo the better the outcome.</CardDescription>
                    </CardHeader>
                    <CardContent className='space-y-2'>
                        {asciiArt !== '' ? (
                            <div className='flex flex-col items-center'>
                                <pre style={{ whiteSpace: 'pre', overflowX: 'auto', fontSize: '10px' }}>
                                    <CopyBlock
                                        text={asciiArt}
                                        theme={atomOneLight}
                                        language='text'
                                        codeBlock
                                        customStyle={{ fontSize: '14px' }}
                                        wrapLongLines={false}
                                        codeBlockStyle={{}}
                                        showLineNumbers={false}
                                    />
                                </pre>
                            </div>
                        ) : (
                            <form>
                                <div className='mb-2 mt-2'>
                                    <Label htmlFor='picture'>Choose a picture to make into Ascii Art</Label>
                                    <Input id='picture' type='file' className='rounded-l p-2 m-2' onChange={onChange} />
                                </div>
                            </form>
                        )}
                    </CardContent>
                    <CardFooter>
                        <Button
                            onClick={(e) => {
                                if (asciiArt) {
                                    setAsciiArt('')
                                    setFile(null)
                                } else {
                                    handleSubmit(e)
                                }
                            }}
                        >
                            {asciiArt ? 'Clear' : 'Convert to ASCII!'}{' '}
                        </Button>
                    </CardFooter>
                </Card>
            </TabsContent>
            <TabsContent value='password'>
                <Card>
                    <CardHeader>
                        <CardTitle>Gallery</CardTitle>
                        <CardDescription>Enjoy my beautiful Ascii Art</CardDescription>
                    </CardHeader>
                    <CardContent className='space-y-2'>
                        <div className='space-y-1'>
                            <pre style={{ whiteSpace: 'pre', overflowX: 'auto', fontSize: '10px' }}>
                                <CopyBlock
                                    text={foxtailAsciiArt}
                                    theme={atomOneLight}
                                    language='text'
                                    codeBlock
                                    customStyle={{ fontSize: '14px', fontFamily: 'monospace' }}
                                    wrapLongLines={false}
                                    codeBlockStyle={{}}
                                    showLineNumbers={false}
                                />
                            </pre>
                        </div>
                        <div className='space-y-1'>
                            <pre style={{ whiteSpace: 'pre', overflowX: 'auto', fontSize: '10px' }}>
                                <CopyBlock
                                    text={justTalkAsciiArt}
                                    theme={atomOneLight}
                                    language='text'
                                    codeBlock
                                    customStyle={{ fontSize: '14px', fontFamily: 'monospace' }}
                                    wrapLongLines={false}
                                    codeBlockStyle={{}}
                                    showLineNumbers={false}
                                />
                            </pre>
                        </div>
                    </CardContent>
                </Card>
            </TabsContent>
        </Tabs>
    )

    return <div className='flex flex-col items-center'></div>
}

export default AsciiArtScreen
