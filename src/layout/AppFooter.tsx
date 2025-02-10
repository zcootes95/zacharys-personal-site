import { ScootesLink } from '@/components/common/ScootesLink'
import { Github, Linkedin, LucideLinkedin } from 'lucide-react' // update

export const AppFooter = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className='w-full border-t bg-background'>
            <div className='container mx-auto max-w-6xl px-4 py-6'>
                <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
                    {/* Copyright Section */}
                    <div className='text-sm text-muted-foreground'>
                        © {currentYear} Zachary Cootes • tag line here •{' '}
                        <ScootesLink external href='https://github.com/zcootes95/zacharys-personal-site' aria-label='Source Code'>
                            Want to learn how I built this?
                        </ScootesLink>{' '}
                        •{' '}
                        <ScootesLink to='/contact' aria-label='Contact Me'>
                            Contact me
                        </ScootesLink>
                    </div>

                    {/* Social Links */}
                    <div className='flex items-center space-x-4'>
                        <ScootesLink external href='https://github.com/zcootes95' aria-label='GitHub Profile'>
                            <Github size={20} />
                        </ScootesLink>
                        <ScootesLink external href='https://www.linkedin.com/in/zachary-cootes-697a0284/' aria-label='LinkedIn Profile'>
                            <LucideLinkedin size={20} />
                        </ScootesLink>
                    </div>
                </div>
            </div>
        </footer>
    )
}
