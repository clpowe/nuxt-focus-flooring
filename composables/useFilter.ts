type Project = {
	id: number
	name: string
	size: string
	cost: number
	client: string
	scope: string
	image: string
	alt?: string
	category: string
	date: Date
}

type TeamMember = {
	id: number
	image: string
	firstName: string
	lastName: string
	title: string
	bio: string
	category: string
	slug: string
}

export function useFilter(
	arr: Project[] | TeamMember[],
	category: string
): Project[] | TeamMember[] {
	if (category === 'All' || category === '') {
		return arr
	}
	return arr.filter((item) => category === item.category) as
		| Project[]
		| TeamMember[]
}
