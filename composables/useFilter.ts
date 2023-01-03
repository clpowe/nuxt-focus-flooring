export function useFilter(arr: any[], catagory: string): any[] {
	if (catagory === 'All' || catagory === '') {
		return arr
	}
	return arr.filter((item) => catagory === item.catagory)
}
