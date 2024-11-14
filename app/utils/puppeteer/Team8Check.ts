import puppeteer from 'puppeteer'

export async function Team8Check() {
	const browser = await puppeteer.launch()
	const page = await browser.newPage()

	await page.goto(process.env.TEAM_8_URL)

	await page.setViewport({ width: 1080, height: 1024 })

	// Extract hrefs from <td> tags with <a> elements
	const result = await page.evaluate(() => {
		// Select all <tbody> elements in the document
		const tbodies = document.querySelectorAll('table tbody')
		if (!tbodies.length) return []

		// Initialize an array to store all hrefs
		const resultArray: { text: string; href: string }[] = []

		// Loop through each <tbody> and collect hrefs
		tbodies.forEach((tbody) => {
			tbody.querySelectorAll('td').forEach((td, index, tds) => {
				const link = td.querySelector('a')
				if (link && link.href) {
					// Check for three preceding <td> elements
					if (index >= 3) {
						const precedingText = [
							tds[index - 3].innerText,
							tds[index - 2].innerText,
							tds[index - 1].innerText,
						].join(', ')

						// Push the combined string and href as an object
						resultArray.push({
							text: precedingText,
							href: link.href,
						})
					}
				}
			})
		})
		return resultArray
	})

	console.log('Extracted result:', result)

	// compare w db

	// if new entry record to db & trigger email

	await browser.close()
	return true
}
