<template>
	<div>
		<p>I am some para, this is my {{ myProp }} </p>
		<p>and this is {{ myDinamicProp }}</p>
		<button @click="sayFncParent('tra la la')">Click to fire in parent!</button>
	</div>
</template>

<script>
export default {
	name: 'ParagBox',
	props: {
		myProp: {
			type: String,
			default: 'default text',
		},
		myDinamicProp: {
			type: String,
			required: true,
		},
		sayFncParent: Function,
	},
};
</script>

<style scoped lang="scss">
p {
	font-size: 20px;
	text-align: center;
	border: 1px solid gray;
	box-shadow: 1px 1px 1px gray;
}
</style>
