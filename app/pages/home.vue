<script setup lang="ts">
useHead({ title: '' })
definePageMeta({
	alias: ['/'],
	title: '主页',
})
const appConfig = useAppConfig()
</script>

<template>
<ZhiluAvatar class="avatar" />

<div class="wrapper">
	<ZField>
		<template #label>
			<span style="font-size: 3rem;">👋</span>
		</template>
		<h1 style="font-size: 3rem;">
			你好，<br>我是<mark>{{ appConfig.author.name }}</mark>
		</h1>
		<p class="desc">
			{{ appConfig.subtitle }}
		</p>
		<div>
			<ZButton
				icon="ri:file-list-3-line"
				to="https://wanblog.qzz.io/"
				text="博客"
				primary
			/>
			<ZButton
				icon="ri:github-line"
				to="https://github.com/wan0705"
				text="GitHub"
			/>
		</div>
	</ZField>

	<ZField label="介绍">
		<p>一名即将毕业初中生，每日努力学习中</p>
		<p>正在维护自己的开源博客网站，你可以在博客或QQ群和我交流。</p>
	</ZField>

	<ZField label="近期活动">
		<p>2025年7月完善重构了<ZLink to="https://wanblog.qzz.io/">个人博客</ZLink>。</p>
	</ZField>

	<ZField label="关于主页">
		<p>
			Fork主页开源在
			<ZLink to="https://github.com/L33Z22L11/homepage-v5" icon="ri:github-line">L33Z22L11/homepage-v5</ZLink>
			上，欢迎使用、参考样式：<br>
		</p>
		<p><ZBadge v-for="item in appConfig.fork" :key="item.link" v-bind="item" /></p>
	</ZField>
</div>
</template>

<style lang="scss" scoped>
.avatar {
	position: fixed;
	opacity: 0.2;
	right: 20vw;
	margin-right: -0.382em; // (1 - √5)/2
	mask-image: radial-gradient(#FFF 43.7%, transparent 70.7%); // (√5 - 1) / 2 x, x = √2 / 2
	font-size: min(100vw, 61.8vh);
	z-index: -1;
}

.desc {
	margin: 1rem 0;
	font-size: 1.5rem;
	color: var(--c-text-2);
}
</style>
