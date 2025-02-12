import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { AsciiGallery } from '@/components/ascii/AsciiGallery'
import { AsciiGenerator } from '@/components/ascii/AsciiGenerator'
import { PageHeader } from '@/layout/PageHeader'

const AsciiArtScreen = () => {
    return (
        <div className='flex flex-col w-full'>
            <PageHeader title='Ascii Art' />

            <Tabs defaultValue='generator' className='w-full'>
                <TabsList className='grid w-full grid-cols-2 gap-2'>
                    <TabsTrigger value='generator'>Generator</TabsTrigger>
                    <TabsTrigger value='gallery'>Gallery</TabsTrigger>
                </TabsList>
                <TabsContent value='generator'>
                    <AsciiGenerator />
                </TabsContent>
                <TabsContent value='gallery'>
                    <AsciiGallery />
                </TabsContent>
            </Tabs>
        </div>
    )
}

export default AsciiArtScreen
