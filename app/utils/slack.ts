export const sendSlackMessage = async (text: string, job: string): Promise<Response | undefined> => {
	if (process.env.SLACK_WEBHOOK_URL) {
		const response = await fetch(process.env.SLACK_WEBHOOK_URL, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: `{
        "blocks": [
          {
            "type": "section",
            "text": {
              "type": "mrkdwn",
              "text": "*${job}*"
            }
          },
          {
            "type": "divider"
          },
          {
            "type": "section",
            "text": {
              "type": "mrkdwn",
              "text": "${text}"
            }
          },
        ]
      }`,
		})
		return response
	}
}
