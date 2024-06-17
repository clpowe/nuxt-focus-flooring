import Airtable from 'airtable'

Airtable.configure({ apiKey: process.env.AIRTABLE_FORM })
var base = Airtable.base('appMDLS774dmy6UBH')

type AirtableError = {
	error: string
	message: string
	statusCode: number
}

export default defineFormActions({
	default: async (event) => {
		const body = await readBody(event)

		try {
			await base('Sheet1').create([{ fields: body }])
			return {
				statusCode: 200,
				message: 'Success'
			}
		} catch (err: AirtableError | any) {
			throw createError({
				statusCode: err.statusCode,
				statusMessage: 'Something went wrong. Please try again.'
			})
		}
	}
})
