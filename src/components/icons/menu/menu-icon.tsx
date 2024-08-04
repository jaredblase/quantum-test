import { cn } from '@/lib/utils'
import { HTMLAttributes } from 'react'
import classes from './menu-icon.module.css'

type MenuIconProps = {
	open?: boolean
	barsClassName?: string
} & HTMLAttributes<HTMLDivElement>

export function MenuIcon({
	open,
	className,
	barsClassName,
	...props
}: MenuIconProps) {
	const barClass = cn(classes.div, barsClassName)

	return (
		<div className={cn(classes.menu, className)} {...props}>
			<div className={cn(barClass, 'top-0', open && 'left-1/2 top-1/2 w-0')} />
			<div
				className={cn(
					barClass,
					'top-1/2 -translate-y-1/2',
					open && 'rotate-45'
				)}
			/>
			<div
				className={cn(
					barClass,
					'top-1/2 -translate-y-1/2',
					open && '-rotate-45'
				)}
			/>
			<div
				className={cn(barClass, 'bottom-0', open && 'left-1/2 top-1/2 w-0')}
			/>
		</div>
	)
}
