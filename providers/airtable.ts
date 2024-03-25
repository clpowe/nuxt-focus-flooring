import { joinURL } from 'ufo'
import type { ProviderGetImage } from '@nuxt/image'

export const getImage: ProviderGetImage = (
	src,
	{
		modifiers = {},
		baseURL = 'https://https://v5.airtableusercontent.com/v3/u/27/27/'
	} = {}
) => {
	// https://spoonacular.com/cdn/ingredients_{SIZE}/

	return {
		url: joinURL(baseURL, src)
	}
}
