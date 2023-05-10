<script lang="ts">
	import Tiptap from '../lib/Tiptap.svelte';

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
			seven_days_collection[0].sentences.push(Paragraph_HTML);
			seven_days_collection[0].sentences = seven_days_collection[0].sentences;

			document.querySelector('#tiptap > div > p')?.remove();
		}
		// create false logic with interface error
	}
	function increasRepeatCount(id: number) {
		let currentCollection = seven_days_collection.find((collection) => collection.id == id);

		if (currentCollection?.count == 2) return;
		currentCollection.count += 1;

		seven_days_collection = seven_days_collection;
	}

	let first_day = {
		sentences: [],
		count: 0,
		id: 1,
		numberOfRepeat: 2
	};
	let second_day = {
		sentences: [],
		count: 0,
		id: 2,
		numberOfRepeat: 2
	};
	let third_day = {
		sentences: [],
		count: 0,
		id: 3,
		numberOfRepeat: 2
	};
	let fourth_day = {
		sentences: [],
		count: 0,
		id: 4,
		numberOfRepeat: 2
	};
	let fifth_day = {
		sentences: [],
		count: 0,
		id: 5,
		numberOfRepeat: 2
	};
	let sixth_day = {
		sentences: [],
		count: 0,
		id: 6,
		numberOfRepeat: 2
	};
	let seventh_day = {
		sentences: [],
		count: 0,
		id: 7,
		numberOfRepeat: 2
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

	let repeatAfterWeak = [];

	function createDate_7(collection) {
		const DATE = new Date();

		let year = DATE.getFullYear();
		let month = DATE.getMonth() + 1;
		let day = DATE.getDate();

		const MaxDays = new Date(year, month, 0).getDate();

		let supposedNextDate = day + 7;

		collection.dateOfRepeat = {
			year,
			month,
			day
		};
		collection.numberOfRepeat = 3
		// id ? remove or ?

		if (supposedNextDate > MaxDays) {
			let difference = supposedNextDate - MaxDays
			
			month = month + 1
			if (month == 13) {
				year += 1
				month = 1
			}
			day = difference

		} else {
			day = supposedNextDate
		}

		return collection
	}
	function moveAll() {
		let first = seven_days_collection[0];
		let second = seven_days_collection[1];
		let third = seven_days_collection[2];
		let fourth = seven_days_collection[3];
		let fifth = seven_days_collection[4];
		let sixth = seven_days_collection[5];
		let seventh = seven_days_collection[6];

		seven_days_collection[0] = {
			sentences: [],
			count: 0,
			id: 1,
			numberOfRepeat: 2
		};
		seven_days_collection[1] = first;
		seven_days_collection[2] = second;
		seven_days_collection[3] = third;
		seven_days_collection[4] = fourth;
		seven_days_collection[5] = fifth;
		seven_days_collection[6] = sixth;

		repeatAfterWeak.push(createDate_7(seventh));
	}
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
				<div>{collection.count}/{collection.numberOfRepeat}</div>
			</div>
		</div>
	{/each}
</div>

<button on:click={moveAll}>Move All</button>

<button on:click={pushNewSentence}>Add</button>
<Tiptap />

<style>
	.words-box {
		border: 2px solid blue;
		min-height: 100px;
		min-width: 100px;
	}
</style>
