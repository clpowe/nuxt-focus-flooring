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
	image?: image[]
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
				if (member.fields.status === 'live') {
					teamMembers.push({
						id: member.id,
						firstName: member.get('firstName'),
						lastName: member.fields.lastName,
						srcImg: member.fields.image[0].url,
						title: member.fields.title,
						category: member.fields.category,
						bio: member.fields.bio,
						office: member.fields.office,
						mobile: member.fields.mobile,
						address: member.fields.address,
						email: member.fields.email
					} as TeamMember)
				}
			})
			return teamMembers
		})
		.catch((error) => console.log(error))

	return team
})
