// 存储 nuxt.config 和 app.config 共用的配置

import type { NitroConfig } from 'nitropack'

const author = {
	name: '晚Official',
	avatar: 'https://s41.ax1x.com/2025/12/20/pZ310V1.jpg',
	email: 'wan0705007@qq.com',
	homepage: 'https://home.wanblog.qzz.io/',
}

const homepageConfig = {
	title: '晚Official(@wan0705)',
	subtitle: '太容易心碎就不要去别人的世界排队',
	description: '晚Official，你也可以叫我wan0705,是一个在互联网的一个人',
	author,
	language: 'zh-CN',
	timeZone: 'Asia/Shanghai',
	favicon: '/icon.png',
	url: 'https://home.wanblog.qzz.io/',
	blogAtom: 'https://wanblog.qzz.io/atom.xml',
}

// https://nitro.build/config#routerules
export const routeRules: NitroConfig['routeRules'] = {
	'/api/avatar.png': { redirect: author.avatar },
	'/api/icon.png': { redirect: homepageConfig.favicon },
	'/favicon.ico': { redirect: homepageConfig.favicon },
}

export default homepageConfig
