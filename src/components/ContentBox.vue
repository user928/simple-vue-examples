<template>
	<div class="borderBox" :class="{ 'borderBox-bg': isColorActive }">
		<slot name="title"><h1>Some Default Title</h1></slot>
		<slot name="subTitle"><h4>this is def subtitle text</h4></slot>
		<div class="content">
			<slot><p>def Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur delectus deserunt dicta ea eligendi et fuga, hic ipsa libero nisi nulla odit, perferendis ratione repellendus sunt temporibus ut vel veritatis!</p></slot>
		</div>
		<button @click="isColorActive =! isColorActive">Switch bg color</button>
	</div>
</template>

<script>
export default {
	name: 'ContentBox',
	data() {
		return {
			isColorActive: false,
		};
	},
};
</script>

<style scoped lang="scss">
.borderBox {
	border: 1px solid gray;
	box-shadow: 1px 1px 1px gray;
	text-align: center;
	width: 50%;
	margin: 30px auto;
	padding: 20px;
}
.borderBox-bg {
	background-color: #34d0ff;
}
.content {
	width: 80%;
	margin: auto;
	border-top: 1px solid;
}
</style>
