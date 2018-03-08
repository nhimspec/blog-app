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
			name: 'Posts',
			url: '/post',
			icon: 'icon-puzzle',
			children: [
				{
					name: 'Buttons',
					url: '/post/buttons',
					icon: 'icon-puzzle'
				},
				{
					name: 'Create Post',
					url: '/post/create',
					icon: 'icon-puzzle'
				},
				{
					name: 'Modals',
					url: '/post/modals',
					icon: 'icon-puzzle'
				},
				{
					name: 'Switches',
					url: '/post/switches',
					icon: 'icon-puzzle'
				},
				{
					name: 'Tables',
					url: '/post/tables',
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
