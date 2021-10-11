export default function Header() {
	return (
		<div className="flex items-center justify-between px-5 w-full h-12 bg-[#C34009] text-white sticky top-0 z-40">
			<a href="/" className="font-header text-3xl">Vulture</a>
			<div className="space-x-4">
				<a className="font-body font-light" href="/carcasses">Carcasses</a>
				<a className="font-body font-light" href="/about">About</a>
			</div>
		</div>
	)
} 