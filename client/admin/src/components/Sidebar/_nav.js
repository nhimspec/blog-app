export default {
	items: [
		{
			name: 'Dashboard',
			url: '/dashboard',
			icon: 'icon-speedometer',
			badge: {
				variant: 'info',
				text: 'NEW'
			}
		},
		{
			title: true,
			name: 'UI elements',
			wrapper: {            // optional wrapper object
				element: "span",      // required valid HTML5 element tag
				attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
			},
			class: ""             // optional class names space delimited list for title item ex: "text-center"
		},
		{
			name: 'Blog',
			url: '/post',
			icon: 'icon-puzzle',
			children: [
				{
					name: 'Create Post',
					url: '/post/create',
					icon: 'icon-puzzle'
				},
				{
					name: 'Categories',
					url: '/post/categories',
					icon: 'icon-puzzle'
				}
			]
		},
		{
			divider: true
		},
		{
			title: true,
			name: 'Extras'
		},
		{
			name: 'Pages',
			url: '/pages',
			icon: 'icon-star',
			children: [
				{
					name: 'Error 404',
					url: '/404',
					icon: 'icon-star'
				},
				{
					name: 'Error 500',
					url: '/500',
					icon: 'icon-star'
				}
			]
		}
	]
};
