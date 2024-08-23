import Airtable from 'airtable'

Airtable.configure({ apiKey: process.env.AIRTABLE_TOKEN })
var base = Airtable.base('appX4S4Y72F1Ppq2Q')

type image = {
	id: string
	width: number
	height: number
	url: string
	size: number
	type: string
	thumbnails: any
}

type TeamMember = {
	id?: string
	image?: image
	srcImg?: string
	firstName?: string
	lastName?: string
	title?: string
	bio?: string
	category?: string
	office?: string
	mobile?: string
	address?: string
	email?: string
	allowMessage?: boolean
}

export default defineEventHandler(async () => {
	const team = base('Table 1')
		.select({
			view: 'Grid view'
		})
		.all()
		.then((res) => {
			let teamMembers: TeamMember[] = []
			res.forEach((member) => {
				const stringToRemove =
					'https://v5.airtableusercontent.com/v3/u/32/32/1724385600000/'

				const resultString = member.fields.image[0].url.replace(
					stringToRemove,
					''
				)

				if (member.fields.status === 'live') {
					teamMembers.push({
						id: member.id,
						firstName: member.get('firstName'),
						lastName: member.fields.lastName,
						//@ts-ignore
						srcImg: resultString,
						title: member.fields.title,
						category: member.fields.category,
						bio: member.fields.bio,
						office: member.fields.office,
						mobile: member.fields.mobile,
						address: member.fields.address,
						email: member.fields.email,
						allowMessage: member.fields.allowMessage
					} as TeamMember)
				}
			})
			return teamMembers
		})
		.catch((error) => console.log(error))

	return team
})
