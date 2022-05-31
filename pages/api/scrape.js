import puppeteer from 'puppeteer';
import parser from '../../scripts/htmlParser';

export default async (req, res) => {
	const data = JSON.parse(req.body);// console.log(req.data);
	// Start of the browser
	const browser = await puppeteer.launch({ headless: true });
	const page = await browser.newPage();

	// access to results object here
	// const url = req.data.links[0];
	const url = data.url;

	await page.goto(url, { waitUntil: 'networkidle0' })
	const html = await parser(page);

	// const html = await page.content();
	await browser.close();

	res.status(200).json({ html })
	// res.status(200).json({title: 'asd', content: 'bar'})

}