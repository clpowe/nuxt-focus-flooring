import { z } from 'zod'

const phoneRegExp =
	/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const TeamContactSchema = z.object({
	name: z.string().min(1, 'Please provide your full '),
	phone: z.string().regex(phoneRegExp, 'Please enter a contact number'),
	email: z
		.string({ required_error: 'A contact email is required' })
		.email('A contact email is required'),
	subject: z.string({ required_error: 'Please provide a subject' }),
	message: z
		.string({ required_error: 'Please enter a message' })
		.min(1, 'A message is required')
		.max(
			300,
			'Your message is too long. Try summarizing it in 300 characters or less.'
		),
	formName: z.string(),
	sendto: z.string()
})
