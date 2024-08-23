import Airtable from 'airtable'

Airtable.configure({ apiKey: process.env.AIRTABLE_TOKEN })
var base = Airtable.base('appv2XIRixefc5mI3')

type image = {
	id: string
	width: number
	height: number
	url: string
	size: number
	type: string
	thumbnails: any
}

type Project = {
	id?: string
	name?: string
	size?: string
	cost?: number
	client?: string
	scope?: string
	image?: image[]
	srcImg?: string
	category?: string
	date?: string
}

export default defineEventHandler(async () => {
	const projects = base('Table 1')
		.select({
			view: 'Grid view'
		})
		.all()
		.then((res) => {
			let projects: Project[] = []
			res.forEach((project) => {
				if (project.fields.status === 'live') {
					let image: string = '/placeholder.jpg'
					if (project.fields.image) {
						const stringToRemove =
							'https://v5.airtableusercontent.com/v3/u/32/32/'

						const resultString = project.fields.image[0].url.replace(
							stringToRemove,
							''
						)

						image = resultString ?? '/placeholder.jpg'
					}

					projects.push({
						id: project.id,
						name: project.fields.name,
						size: project.fields.size,
						cost: project.fields.cost,
						client: project.fields.client,
						scope: project.fields.scope,
						srcImg: image,
						category: project.fields.category
					} as Project)
				}
			})
			return projects
		})
		.catch((error) => console.log(error))

	return projects
})
