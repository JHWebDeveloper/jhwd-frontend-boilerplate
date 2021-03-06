import React from 'react'

import Root from './components/Root'
import Main from './components/Main'

const routes = [
	{
		component: Root,
		routes: [
			{
				path: '/',
				exact: true,
				component: Main
			}
		]
	}
]

export default routes
