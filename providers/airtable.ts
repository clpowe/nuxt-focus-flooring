import { joinURL } from 'ufo'
import type { ProviderGetImage } from '@nuxt/image'
import { createOperationsGenerator } from '#image'

const operationsGenerator = createOperationsGenerator()
export const getImage: ProviderGetImage = (
	src,
	{
		modifiers = {},
		baseURL = 'https://v5.airtableusercontent.com/v3/u/32/32/1724385600000/'
	} = {}
) => {
	if (!baseURL) {
		baseURL = useRuntimeConfig().public.siteUrl
	}

	const operations = operationsGenerator(modifiers)

	return {
		url: joinURL(baseURL, src + (operations ? '?' + operations : ''))
	}
}
