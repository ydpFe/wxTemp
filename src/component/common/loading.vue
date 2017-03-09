<template>
	<div v-if="loadingStatus" class="loading">
		<img :src="loading" alt="loading" />
	</div>
</template>

<script>
"use strict";

export default {
	props: ["loadingStatus"],
	data() {
		return {
			loading: "https://image.kuaiqiangche.com/loading.gif?imageView2/2/q/90/interlace/1/w/" + parseInt(document.documentElement.clientWidth * 0.3)
		}
	}
}
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
	img {
		position: fixed;
		top: 45%;
		left: 35%;
		z-index: 100;
		width: 30%;
	}
</style>