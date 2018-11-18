<template>
	<div>
		<h4>I am emitter component</h4>
		<slot></slot>
		<button @click="emitterFired">Click to emit!</button>
	</div>
</template>

<script>
export default {
	name: 'EmitterComp',
	data() {
		return {
			emitCount: 0,
		};
	},
	methods: {
		emitterFired() {
			this.emitCount++;
			this.$emit('emitterHasFired', this.emitCount);
		},
	},
};
</script>

<style scoped lang="scss">
div {
	font-size: 20px;
	text-align: center;
	border: 1px solid green;
	box-shadow: 1px 1px 1px green;
	background: greenyellow;
}
button {
	border: 1px solid green;
	box-shadow: 1px 1px 1px green;
	padding: 20px;
	margin: 10px;
}
</style>
