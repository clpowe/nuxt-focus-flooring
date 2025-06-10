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
	thumbnails: { [key: string]: { url: string } }
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
			const projects: Project[] = []
			for (const project of res) {
				if (project.fields.status === 'live') {
					let img: string | undefined = undefined;
					const images = project.fields.image;
					if (Array.isArray(images) && images.length > 0 && typeof images[0] === 'object' && images[0] !== null && 'url' in images[0]) {
						img = (images[0] as { url: string }).url.replace(/^.{35}/, "https://ik.imagekit.io/focusflooring/");
					}

					projects.push({
						id: project.id,
						name: project.fields.name,
						size: project.fields.size,
						cost: project.fields.cost,
						client: project.fields.client,
						scope: project.fields.scope,
						srcImg: img,
						category: project.fields.category
					} as Project)
				}
			}
			return projects
		})
		.catch((error) => console.log(error))

	

	return projects
})
