import googleIt from 'google-it';
import puppeteer from 'puppeteer';
import parser from '../../scripts/htmlParser';
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function googleSearch(req, res) {

	// Start of the browser
	const browser = await puppeteer.launch({ headless: true });
	const page = await browser.newPage();

	await googleIt({ query: req.query.s }).then(async (results) => {
		// access to results object here
		const url = results[0].link;
		await page.goto(url, { waitUntil: 'networkidle0' })
		const html = await parser(page);
		// const html = await page.content();
		await browser.close();
		res.status(200).json({ results, html })
	}).catch(async (e) => {
		// any possible errors that might have occurred (like no Internet connection)
		await browser.close();
		res.status(505).json({ msg: 'google error', e })
	})
}
