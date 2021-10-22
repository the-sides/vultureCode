/**
 * params:
 *  page {object} the friggin puppeteer page object to use it's api
 */
export default async (page) => {
	// 
	console.log(page.url())
	if(page.url().includes('developer.mozilla.org')) {
		// await page.waitForSelector('.CodeMirror-code');
		// console.log('mdn page')
		const element = await page.$('main');
		// console.log('mdn element', element)
		const html = await page.evaluate(el => el.outerHTML, element);
		
		console.log('mdn html', html)
		return html
	}
	return false;
}