import { CopyBlock, atomOneLight } from 'react-code-blocks'
import { Button } from '../ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../ui/card'
import { Input } from '../ui/input'
import { imageToAscii } from '@/utils/asciiArt/imageToAscii'
import { ChangeEvent, FormEvent, useState } from 'react'
import { Label } from '../ui/label'

export const AsciiGenerator = () => {
    const [file, setFile] = useState<File | null>(null)
    const [asciiArt, setAsciiArt] = useState('')

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setFile(e.target.files[0])
        }
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        if (!file) return
        try {
            const ascii = await imageToAscii(file)
            if (ascii) {
                setAsciiArt(ascii)
            }
        } catch (error) {
            console.error(error)
        }
    }
    return (
        <Card>
            <CardHeader>
                <CardTitle>Ascii Art Generator</CardTitle>
                <CardDescription>Add a photo to generate Ascii Art. Note the simpler the photo the better the outcome.</CardDescription>
            </CardHeader>
            <CardContent className='space-y-2'>
                {asciiArt !== '' ? (
                    <div className='space-y-1'>
                        <pre style={{ whiteSpace: 'pre', overflowX: 'auto', fontSize: '10px' }}>
                            <CopyBlock
                                text={asciiArt}
                                theme={atomOneLight}
                                language='text'
                                codeBlock
                                customStyle={{ fontSize: '10px', fontFamily: 'monospace' }}
                                wrapLongLines={false}
                                codeBlockStyle={{}}
                                showLineNumbers={false}
                                codeContainerStyle={{ lineHeight: '13px' }}
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
    )
}
