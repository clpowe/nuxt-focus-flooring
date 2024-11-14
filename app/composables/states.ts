export const useDrawer = () => useState<boolean>('drawer', () => false)
export const useNavDrawer = () => useState<boolean>('navDrawer', () => false)

export const useTeam = () =>
	useAsyncData('team', () => $fetch('/team'), {
		transform: (data) => {
			return data.map((m) => ({
				...m,
				slug: `${m.firstName?.toLowerCase().trim()}${m.lastName?.toLowerCase().trim()}`
			}))
		}
	})

export const useProjects = () =>
	useAsyncData('projects', () => $fetch('/projects'))
