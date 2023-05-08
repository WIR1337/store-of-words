<script lang="ts">
	import Tiptap from '../lib/Tiptap.svelte';

	let sentenceCollection: string[] = [];
	function checkValidity(newInput: string): boolean {
		let nullTrigger = newInput.includes('<br class="ProseMirror-trailingBreak">');
		let whiteSpaceTrigger = newInput.trim() ? false : true;

		// add lenght check
		if (nullTrigger) {
			return false;
		} else if (whiteSpaceTrigger) {
			return false;
		} else {
			return true;
		}
	}
	function pushNewSentence() {
		const Paragraph_HTML = document.querySelector('#tiptap > div > p')?.innerHTML as string;
		const ResOfValidity = checkValidity(Paragraph_HTML);

		if (ResOfValidity) {
			seven_days_collection[0].sentences.push(Paragraph_HTML)
			seven_days_collection[0].sentences = seven_days_collection[0].sentences
			
			document.querySelector('#tiptap > div > p')?.remove();
		}
		// create false logic with interface error
	}
	function increasRepeatCount(id:number){
		let currentCollection = seven_days_collection.find(collection => collection.id == id)

		if (currentCollection?.count == 2) return
		currentCollection.count += 1

		seven_days_collection = seven_days_collection

	}

	let first_day = {
		sentences: [],
		count:0,
		id: 1
	};
	let second_day = {
		sentences: [],
		count:0,
		id: 2
	};
	let third_day = {
		sentences: [],
		count:0,
		id: 3
	};
	let fourth_day = {
		sentences: [],
		count:0,
		id: 4
	};
	let fifth_day = {
		sentences: [],
		count:0,
		id: 5
	};
	let sixth_day = {
		sentences: [],
		count:0,
		id: 6
	};
	let seventh_day = {
		sentences: [],
		count:0,
		id: 7
	};

	let seven_days_collection = [
		first_day,
		second_day,
		third_day,
		fourth_day,
		fifth_day,
		sixth_day,
		seventh_day
	];
</script>

<div class="flex gap-3">
	{#each seven_days_collection as collection}
		<div>
			<div class="words-box">
				{#each collection.sentences as sentence}
					<div>{@html sentence}</div>
				{/each}
			</div>
			<div class="flex justify-between">
				<button on:click={() => increasRepeatCount(collection.id)}>Ok</button>
				<div>{collection.count}/2</div>
			</div>
		</div>
	{/each}
</div>


<button on:click={pushNewSentence}>Add</button>
<Tiptap />

<style>
	.words-box {
		border: 2px solid blue;
		min-height: 100px;
		min-width: 100px;
	}
</style>
