import { foxtailAsciiArt } from '@/constants/foxtailAscii'
import { pennyroyalAsciiArt } from '@/constants/pennyroyalAscii'
import { zacharyAsciiArt } from '@/constants/zacharyAscii'
import { atomOneLight, CopyBlock } from 'react-code-blocks'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'

const asciiArtTexts = [foxtailAsciiArt, pennyroyalAsciiArt, zacharyAsciiArt]

export const AsciiGallery = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Gallery</CardTitle>
                <CardDescription>Enjoy my beautiful Ascii Art</CardDescription>
            </CardHeader>
            <CardContent className='space-y-2'>
                {asciiArtTexts.map((asciiArt) => (
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
                ))}
            </CardContent>
        </Card>
    )
}
