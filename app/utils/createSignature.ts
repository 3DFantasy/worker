import crypto from 'crypto'
import { sendSlackMessage } from './slack'

export const createSignature = (body: string) => {
	if (process.env.ONEREVIEW_APP_SECRET) {
		const appSecret = process.env.ONEREVIEW_APP_SECRET
		const signature = crypto.createHmac('sha256', appSecret).update(body).digest('hex')
		return signature
	} else {
		sendSlackMessage('APP Secret not set', 'utils/createSignature')
		console.log('APP Secret not set')
		return ''
	}
}
