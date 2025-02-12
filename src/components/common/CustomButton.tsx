import { Link } from 'react-router-dom'
import { Button } from '../ui/button'

type CustomButtonProps = {
    link: string
    text: string
    right?: boolean
}

export const CustomButton = (props: CustomButtonProps) => {
    const { link, text, right } = props

    if (right) {
        return (
            <Button asChild variant='default' className='mt-4 self-end'>
                <Link to={props.link}>{props.text}</Link>
            </Button>
        )
    }
    return (
        <Button asChild variant='default' className='mt-4 w-full'>
            <Link to={props.link}>{props.text}</Link>
        </Button>
    )
}
