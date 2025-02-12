import { CustomImage } from '../common/CustomImage'

export const BioPicture = () => {
    return (
        <div className='flex flex-col items-center p-4'>
            <div className='group relative w-full aspect-square rounded-full border-4 border-white overflow-hidden'>
                <CustomImage
                    src='/home/bio_pic2.jpg'
                    className='absolute inset-0 w-full h-full object-contain rounded-full shadow-lg bg-secondary transition-opacity  group-hover:opacity-0'
                />
                <CustomImage
                    src='/home/bio_pic3.jpg'
                    className='absolute inset-0 w-full h-full object-contain rounded-full shadow-lg bg-secondary opacity-0 transition-opacity  group-hover:opacity-100'
                />
            </div>
        </div>
    )
}
