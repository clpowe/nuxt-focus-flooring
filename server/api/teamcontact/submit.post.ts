import Airtable from 'airtable'
import { TeamContactSchema } from '~/schemas/TeamContact'

Airtable.configure({ apiKey: process.env.AIRTABLE_CONTACT })
var base = Airtable.base('appA9gJqhlSOsEq6L')

export default defineEventHandler(async (event) => {
	const result = await readValidatedBody(event, (body) =>
		TeamContactSchema.safeParse(body)
	)

	if (!result.success) {
		console.log(result.error)
		throw result.error.issues
	} else {
		base(result.data.formName)
			.create({
				name: result.data.name,
				phone: result.data.phone,
				email: result.data.email,
				subject: result.data.subject,
				message: result.data.message,
				sendto: result.data.sendto
			})
			.then((res) => {
				return {
					statusCode: 200,
					body: JSON.stringify(res)
				}
			})
			.catch((err) => {
				throw createError({
					statusCode: err.statusCode,
					statusMessage: err.message
				})
			})
	}
})
