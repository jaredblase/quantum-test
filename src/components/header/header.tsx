import { Link, useLocation } from 'react-router-dom'
import { cn } from '@/lib/utils'
import { MenuIcon } from '../icons/menu'
import { useState } from 'react'

const links = [
	{ href: import.meta.env.BASE_URL, title: 'Quantum Pulse Consulting' },
	{ href: import.meta.env.BASE_URL + 'about-us', title: 'About Us' },
	{ href: import.meta.env.BASE_URL + 'experiences', title: 'Experiences' },
	{ href: import.meta.env.BASE_URL + 'case-studies', title: 'Case Studies' },
	{ href: import.meta.env.BASE_URL + 'contact-us', title: 'Contact Us' },
]

export function Header() {
	const location = useLocation()
	const [isMenuOpen, setMenuOpen] = useState(false)

	return (
		<header className="relative bg-[#040E19] text-white">
			<div className="container flex h-20 items-center justify-between">
				<Link to={import.meta.env.BASE_URL}>
					<img
						src={import.meta.env.BASE_URL + 'logo.webp'}
						alt="Quantum Pulse Logo"
						className="w-36"
					/>
				</Link>
				<nav className="hidden gap-8 lg:flex">
					{links.map((l) => (
						<Link
							key={l.href}
							to={l.href}
							className={cn(
								'link decoration-white underline-offset-8',
								location.pathname === l.href && 'text-[#597EB5] underline'
							)}
						>
							{l.title}
						</Link>
					))}
				</nav>
				{/* Mobile Menu */}
				<MenuIcon
					className="lg:hidden"
					onClick={() => setMenuOpen((x) => !x)}
					open={isMenuOpen}
				/>
				<div
					className={cn(
						'pointer-events-none absolute left-0 top-full w-full -translate-y-4 gap-8 bg-primary opacity-0 transition-all duration-300 lg:hidden',
						isMenuOpen && 'pointer-events-auto block translate-y-0 opacity-100'
					)}
				>
					<nav className="container flex flex-col gap-4 py-4">
						{links.map((l) => (
							<Link
								key={l.href}
								to={l.href}
								className={cn(
									'link decoration-white underline-offset-8',
									location.pathname === l.href && 'text-[#597EB5] underline'
								)}
							>
								{l.title}
							</Link>
						))}
					</nav>
				</div>
			</div>
		</header>
	)
}
