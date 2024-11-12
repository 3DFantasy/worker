import puppeteer from 'puppeteer'

export async function Team6Check() {
	const browser = await puppeteer.launch()
	const page = await browser.newPage()

	await page.goto(process.env.TEAM_6_URL)

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
			// Loop through each row in the <tbody>
			tbody.querySelectorAll('tr').forEach((row) => {
				const cells = row.querySelectorAll('td')

				// Ensure there are at least five columns in the row
				if (cells.length >= 5) {
					// Combine the inner text of the first three <td> elements
					const text = [cells[0].innerText, cells[1].innerText, cells[2].innerText].join(', ')

					// Get the href from the fifth <td> element
					const link = cells[4].querySelector('a')
					const href = link ? link.href : null

					// Add the result to the array only if a valid href is found
					if (href) {
						resultArray.push({
							text: text,
							href: href,
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
