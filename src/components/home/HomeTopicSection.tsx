import { CustomButton } from '../common/CustomButton'

type HomeTopicSection = {
    title: string
    contentText?: string
    content?: JSX.Element
    route?: string
    routeText?: string
}

export const HomeTopicSection = (props: HomeTopicSection) => {
    const { content, contentText, route, routeText, title } = props
    return (
        <div className='flex-1  flex flex-col items-left justify-center rounded-lg p-6  border-2 border-gray-200'>
            <div className='flex font-bold text-lg mb-6'>{title}</div>
            {contentText && <div className='flex text-sm text-left flex-grow'>{contentText}</div>}
            {content && content}
            {route && routeText && <CustomButton link={route} text={routeText} right />}
        </div>
    )
}
