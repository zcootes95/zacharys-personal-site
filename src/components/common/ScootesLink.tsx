import { cn } from '@/lib/utils'
import { Button, ButtonProps } from '@/components/ui/button'
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom'

interface BaseLinkProps {
    children: React.ReactNode
    className?: string
}

interface ExternalLinkSpecificProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    external: true
    href: string
    to?: never
}

interface InternalLinkSpecificProps extends Omit<RouterLinkProps, 'className'> {
    external?: false
    to: string
    href?: never
}

type LinkProps = BaseLinkProps & (ExternalLinkSpecificProps | InternalLinkSpecificProps)

const baseTextLinkStyles = 'text-muted-foreground hover:text-primary transition-colors underline'

export const ScootesLink = ({ children, className, external, ...props }: LinkProps) => {
    if (external) {
        return (
            <a className={cn(baseTextLinkStyles, className)} target='_blank' rel='noopener noreferrer' {...(props as ExternalLinkSpecificProps)}>
                {children}
            </a>
        )
    }

    return (
        <RouterLink className={cn(baseTextLinkStyles, className)} {...(props as InternalLinkSpecificProps)}>
            {children}
        </RouterLink>
    )
}

// Base interface for button links
interface BaseButtonLinkProps extends Omit<ButtonProps, 'href'> {
    variant?: ButtonProps['variant']
    size?: ButtonProps['size']
}

// Props specific to external button links
interface ExternalButtonLinkProps extends BaseButtonLinkProps {
    external: true
    href: string
    to?: never
}

// Props specific to internal button links
interface InternalButtonLinkProps extends BaseButtonLinkProps {
    external?: false
    to: string
    href?: never
}

// Combined type for button links
type LinkButtonProps = BaseButtonLinkProps & (ExternalButtonLinkProps | InternalButtonLinkProps)

export const LinkButton = ({ children, className, variant = 'default', size = 'default', external, ...props }: LinkButtonProps) => {
    const buttonProps = {
        variant,
        size,
        className,
        asChild: true,
        ...props
    }

    return (
        <Button {...buttonProps}>
            {external ? (
                <a href={(props as ExternalButtonLinkProps).href} target='_blank' rel='noopener noreferrer'>
                    {children}
                </a>
            ) : (
                <RouterLink to={(props as InternalButtonLinkProps).to}>{children}</RouterLink>
            )}
        </Button>
    )
}
