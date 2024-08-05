import { Header } from './components/header'

function App() {
	return (
		<>
			<Header />
			<section className="flex h-[calc(100vh-5rem)] items-center bg-[url('/hero-bg.png')] bg-cover bg-center">
				<div className="bg-[#3B5472] bg-opacity-[.78] px-8 py-12">
					<p className="text-2xl font-medium">
						Quantum Pulse Consulting: Empowering Futures, Digitally Defined
					</p>
					<h1 className="mb-4 mt-6 text-6xl font-bold">
						Progress & Innovative with Quantum Pulse
					</h1>
					<p className="text-xl font-medium">
						Where your businesses' digital aspirations become groundbreaking
						realities, setting you apart in today's competitive market
					</p>
				</div>
			</section>
			<section className="relative mb-16 mt-12 py-0 md:py-16">
				<div className="container grid gap-y-16 md:grid-cols-2 md:gap-y-32">
					<div className="col-span-2">
						<button className="ml-auto block w-fit border border-gray-600 px-16 py-3 text-xl">
							Services
						</button>
					</div>
					<div className="max-md:hidden">
						<img
							src={import.meta.env.BASE_URL + 'building.avif'}
							alt=""
							className="absolute bottom-0 left-0 h-3/4 w-[42%] object-cover"
						/>
					</div>
					<article>
						<h2 className="mb-6 text-center text-3xl font-medium md:mb-12 md:text-6xl">
							Financial Reporting
						</h2>
						<p className="mb-8 text-lg">
							At Quantum Pulse Consulting, we provide detailed financial reports
							and timely weekly market insights to help our clients make
							informed investments decisions. Our reports cover key financial
							metrics, earnings analysis, and sector trends, while our weekly
							updates offer concise summaries of market developments, economic
							indicators, and investment opportunities. Stay ahead with our
							expert analysis and actionable insights.
						</p>
						<a href="#" className="link mx-auto block w-fit text-xl">
							Learn More &gt;
						</a>
					</article>
				</div>
			</section>
			<section className="relative mt-4 max-md:pb-12 md:h-[75vh]">
				<img
					src={import.meta.env.BASE_URL + 'boat.jpg'}
					alt=""
					className="absolute bottom-0 right-0 h-full w-[45%] object-cover max-lg:hidden"
				/>
				<div className="y-16 container relative z-10 grid gap-y-16 pt-12 lg:grid-cols-[2fr_1fr]">
					<div>
						<p className="mb-8 text-4xl lg:mb-20 lg:text-8xl">GET IN TOUCH</p>
						<address>
							<span className="text-2xl">Email:</span>
							<br />
							<a href="mailto:arivin.anba@qpulse.tecj">
								arivin.anba@qpulse.tecj
							</a>
						</address>
					</div>
					<div className="lg:text-center">
						<p className="mb-6 text-4xl lg:mb-12 lg:text-7xl">QUESTIONS?</p>
						<p className="mb-4 text-2xl lg:mb-8">Head to our FAQ page here</p>
						<p className="text-6xl">⟶</p>
					</div>
				</div>
			</section>
		</>
	)
}

export default App
