<template>
	<div>

		<section>
			<h1>Two way bindings</h1>
			<input type="text" v-model="inptxt" @keyup.enter="sayFnc(inptxt)">
			<p>{{inptxt}}</p>
		</section>

		<section>
			<h1>Counters / click prevents</h1>
			<button @click="counter">Count ++</button>
			<button @click="countNmb=0">Count reset</button>
			<p>{{countNmb}}</p>
			<a :href="link" @click.prevent>google</a>
		</section>

		<section>
			<h1>v-for</h1>
			<ul>
				<li v-for="(item, indx) in list">
					<span>{{indx}} </span>
					<span>{{item}} </span>
				</li>
			</ul>
		</section>


		<section>
			<h1>If / Else on click</h1>
			<h4 v-if="bully">I see bullyZ</h4>
			<h4 v-else>No bully here</h4>
			<button @click="bully = !bully">switcher</button>
		</section>

		<section>
			<h1>Slots</h1>
			<ContentBox>
				<h1 slot="title">My main title</h1>
				<h5 slot="subTitle">Some smaller subs</h5>
				<p v-for="(item, index) in list">{{index}} - {{item}}</p>
			</ContentBox>
			<ContentBox />
		</section>

		<section>
			<h1>Dynamic components</h1>
			<button @click="dynamicComp = 'ContentBox'">dynamic comp 1</button>
			<button @click="dynamicComp = 'ParagBox'">dynamic comp 2</button>
			<component :is="dynamicComp"></component>
		</section>

		<section>
			<h1>Emit/Receive events</h1>
			<div>
				<h4>Event received</h4>
				<h5>{{ EmitCounterTimes }} times</h5>
			</div>
			<EmitterComp @emitterHasFired="EmitCountFnc">
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur dolore earum, eligendi eos excepturi hic labore laborum maxime, molestias necessitatibus odit quo, recusandae repudiandae sequi tempora tempore velit vitae voluptas!</p>
			</EmitterComp>
		</section>


		<section>
			<h1>Props and callback functions</h1>
			<ParagBox :sayFncParent="sayFnc" myProp="gitara" :myDinamicProp="someTxt"></ParagBox>
		</section>
	</div>
</template>

<script>
import ContentBox from '@/components/ContentBox.vue';
import ParagBox from '@/components/ParagBox.vue';
import EmitterComp from '@/components/EmitterComp.vue';

export default {
	name: 'Examples',
	data() {
		return {
			someTxt: 'this is someTxt',
			inptxt: 'base txt',
			countNmb: 0,
			link: 'https://www.google.com',
			list: ['orange', 'banana', 'mango', 'pineapple', 'kiwi'],
			bully: true,
			dynamicComp: 'ContentBox',
			EmitCounterTimes: 0,
		};
	},
	methods: {
		counter() {
			this.countNmb++;
		},
		sayFnc(msg) {
			alert(msg);
		},
		EmitCountFnc(dataFromEvent) {
			this.EmitCounterTimes = dataFromEvent;
		},
	},
	components: {
		ContentBox,
		ParagBox,
		EmitterComp,
	},
};
</script>

<style scoped>
section {
	padding: 20px;
	border: 1px solid #dfdfdf;
	margin: 50px auto;
	width: 80%;
	box-shadow: 2px 2px 2px #dfdfdf;
}
h1 {
	border-bottom: 1px solid #dfdfdf;
	background: #f9f9f9;
	padding: 20px;
}
</style>
