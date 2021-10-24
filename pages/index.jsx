import Head from 'next/head'
import Card from '../components/Card';
import Header from '../components/Header'
import BirdSvg from '../svgs/bird.svg';
import { Component } from 'react';

async function sendQuery(value) {
	return await fetch(`/api/search?s=${value}`).then(data => data.json())
}
export default class Home extends Component {
	// const query = '';
	// let results = d[]; 
	// const sampleRes = { title: 'Stackoverflow: array won’t sort', content: `const run  = () => { return arr.sort(); } window.addEventListener(‘DOMContentLoaded’, run);` };
	constructor(props) {
		super(props)
		this.state = {
			query: '',
			results: []
		}
	}
	handleChange(event) {
		this.setState({ query: event.target.value, results: this.state.results });
	}
	handleKey(event) {
		if (event.key === 'Enter') {
			console.log('Search', this.state.query)
			sendQuery(this.state.query).then(data => {
				this.setState({ query: this.state.query, results: data })
			});
		}
	}

	render() {
		return <div className="flex flex-col items-center justify-center min-h-screen">
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header></Header>
			<main className="flex flex-col items-center justify-start py-10 w-full flex-1 px-8 md:px-20 text-center bg-[#722505] text-white relative">
				<BirdSvg className="scale-125 origin-top-left absolute top-0 left-0" />
				<div className="w-[800px] max-w-full mx-auto relative">
					<p className="text-left">Search results for...</p>

					{/* Search Input */}
					<input className="mt-4 w-full text-center text-3xl md:text-6xl font-bold bg-transparent placeholder-white placeholder-opacity-50" placeholder="How to sort in JS" onKeyDown={this.handleKey.bind(this)} onChange={this.handleChange.bind(this)} />

					<span className="absolute top-[-2rem] right-[-3rem] text-[160px] md:text-[200px] leading-[100%] font-header font-bold opacity-25">&rdquo;</span>
				</div>

				<div className="mt-16 w-full grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-12 max-w-screen-xl 3xl:max-w-screen-2xl">
					{this.state.results.map((res, ind) =>
						<Card key={ind} {...res} ></Card>
					)}
				</div>

			</main>
		</div>
	}
}
