export function useFilter(arr: any[], category: string): any[] {
	if (category === 'All' || category === '') {
		return arr
	}
	return arr.filter((item) => category === item.category)
}
