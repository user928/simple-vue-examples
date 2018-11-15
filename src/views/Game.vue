<template>
	<div class="game">

		<section class="row">
			<div class="small-6 columns">
				<h1 class="text-center">YOU</h1>
				<div class="healthbar">
					<div class="healthbar healthbar--green text-center" :style="{width: playerHp + '%'}">
						{{playerHp}}
					</div>
				</div>
			</div>
			<div class="small-6 columns">
				<h1 class="text-center">MONSTER</h1>
				<div class="healthbar">
					<div class="healthbar healthbar--green  text-center" :style="{width: monsterHp + '%'}">
						{{monsterHp}}
					</div>
				</div>
			</div>
		</section>

		<section class="row controls" v-if="!isGameActive">
			<div class="small-12 columns">
				<button id="start-game" @click="[playerHp=100, monsterHp=100, isGameActive=true]">START NEW GAME</button>
			</div>
		</section>

		<section class="row controls" v-else>
			<div class="small-12 columns">
				<button id="attack" @click="attack(1, 'attack')">ATTACK</button>
				<button id="special-attack" @click="attack(3, 'special attack')">SPECIAL ATTACK</button>
				<button id="heal" @click="attack(-5, 'heal')">HEAL</button>
				<button id="give-up" @click="isGameActive=!isGameActive">GIVE UP</button>
			</div>
		</section>

		<section class="row log">
			<div class="small-12 columns">
				<ul>
					<li v-if=" action==='heal' ">
						<p class="player-turn">Player {{action}} for {{-damagePlayer}} hp </p>
						<p class="monster-turn">Monster {{action}} for {{-damageMonster}} hp </p>
					</li>
					<li v-else>
						<p class="player-turn">Player {{action}} Monster for {{damageMonster}} hp </p>
						<p class="monster-turn">Monster {{action}} Player for {{damagePlayer}} hp </p>
					</li>
				</ul>
			</div>
		</section>
	</div>
</template>

<script>
export default {
	name: 'Game',
	data() {
		return {
			isGameActive: false,
			playerHp: 100,
			monsterHp: 100,
			action: null,
			damagePlayer: null,
			damageMonster: null,
		};
	},
	methods: {
		attack(dmg, actionType) {
			const damagePlayer = dmg * Math.round(Math.random() * 10);
			const damageMonster = dmg * Math.round(Math.random() * 10);

			this.playerHp = this.playerHp - damagePlayer;
			this.monsterHp = this.monsterHp - damageMonster;

			this.action = actionType;
			this.damagePlayer = damagePlayer;
			this.damageMonster = damageMonster;
		},
	},
};
</script>
<style lang="scss">
.text-center {
	text-align: center;
}

.healthbar {
	width: 80%;
	height: 40px;
	background-color: #eee;
	margin: auto;
	transition: width 500ms;
}

.healthbar--green {
	background-color: green;
	margin: 0;
	color: white;
}

.controls,
.log {
	margin-top: 30px;
	text-align: center;
	padding: 10px;
	border: 1px solid #ccc;
	box-shadow: 0px 3px 6px #ccc;
}

.turn {
	margin-top: 20px;
	margin-bottom: 20px;
	font-weight: bold;
	font-size: 22px;
}

.log ul {
	list-style: none;
	font-weight: bold;
	text-transform: uppercase;
}

.log ul li {
	margin: 5px;
}

.log ul .player-turn {
	color: blue;
	background-color: #e4e8ff;
}

.log ul .monster-turn {
	color: red;
	background-color: #ffc0c1;
}

button {
	font-size: 20px;
	background-color: #eee;
	padding: 12px;
	box-shadow: 0 1px 1px black;
	margin: 10px;
}

#start-game {
	background-color: #aaffb0;
}

#start-game:hover {
	background-color: #76ff7e;
}

#attack {
	background-color: #ff7367;
}

#attack:hover {
	background-color: #ff3f43;
}

#special-attack {
	background-color: #ffaf4f;
}

#special-attack:hover {
	background-color: #ff9a2b;
}

#heal {
	background-color: #aaffb0;
}

#heal:hover {
	background-color: #76ff7e;
}

#give-up {
	background-color: #ffffff;
}

#give-up:hover {
	background-color: #c7c7c7;
}
</style>
