import { z } from 'zod'

const phoneRegExp =
	/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const GeneralContactSchema = z.object({
	first_name: z.string().min(1, 'Please provide your full '),
	last_name: z.string().min(1, 'Please provide your full '),
	email: z
		.string({ required_error: 'A contact email is required' })
		.email('A contact email is required'),
	phone_number: z.string().regex(phoneRegExp, 'Please enter a contact number'),
	job_title: z.string().optional(),
	industry: z.string().optional(),
	how_did_you_hear_about_us: z
		.string({ required_error: 'Please enter a message' })
		.min(1, 'A message is required')
		.max(
			300,
			'Your message is too long. Try summarizing it in 300 characters or less.'
		),
	message: z
		.string({ required_error: 'Please enter a message' })
		.min(1, 'A message is required')
		.max(
			300,
			'Your message is too long. Try summarizing it in 300 characters or less.'
		)
})
