import { DefaultConfigOptions } from '@formkit/vue'
import { createAutoAnimatePlugin } from '@formkit/addons'

const config: DefaultConfigOptions = {
	theme: 'genesis',
	plugins: [createAutoAnimatePlugin()]
}

export default config
