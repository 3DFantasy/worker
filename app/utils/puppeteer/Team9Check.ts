import puppeteer from 'puppeteer'

export async function Team9Check() {
	// Launch the browser and open a new blank page
	const browser = await puppeteer.launch()
	const page = await browser.newPage()

	// Navigate the page to a URL.
	await page.goto(process.env.TEAM_9_URL)

	// Set screen size.
	await page.setViewport({ width: 1080, height: 1024 })

	// Extract hrefs from <td> tags with <a> elements
	const hrefs = await page.evaluate(() => {
		const tbody = document.querySelector('tbody')
		if (!tbody) return []

		// Initialize an array to store the hrefs
		const hrefArray: string[] = []

		// Loop through each <td> inside <tbody>
		tbody.querySelectorAll('td').forEach((td) => {
			// Find <a> tags within <td>
			const link = td.querySelector('a')
			if (link && link.href) {
				// Push the href attribute to the array
				hrefArray.push(link.href)
			}
		})

		return hrefArray
	})

	console.log('Extracted hrefs:', hrefs)

	await browser.close()
	return true
}
