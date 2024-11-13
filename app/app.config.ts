export default defineAppConfig({
	ui: {
		primary: 'focusyellow',
		gray: 'slate',
		header: {
			wrapper: '-mb-px  z-50 bg-midnight-950 !border-transparent !relative ',
			links: {
				base: 'transition-colors hover:text-focusyellow-200',
				inactive: 'text-white hover:text-focusyellow-200',
				active: 'text-focusyellow-500'
			},
			right: 'flex items-center justify-end lg:flex-1 gap-1.5',
			logo: 'flex-shrink-0 font-bold text-xl text-white  flex items-end gap-1.5',
			panel: {
				wrapper:
					'fixed text-white inset-0 z-50 overflow-y-auto bg-midnight-950 lg:hidden',
				header: 'px-4 sm:px-6',
				body: 'px-4 sm:px-6 pt-3 pb-6'
			},
			button: {
				base: 'lg:hidden text-midnight-950 bg-focusyellow-500 hover:bg-focusyellow-400',
				icon: {
					open: 'i-heroicons-bars-3-20-solid',
					close: 'i-heroicons-x-mark-20-solid'
				}
			}
		}
	}
})
