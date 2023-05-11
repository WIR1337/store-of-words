<script lang="ts">
	import type { Writable } from 'svelte/store';
	import { seven_days_collection, repeatAfterWeak } from '../collections-store';

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
			seven_days_collection.update((col) => {
				col[0].sentences.push(Paragraph_HTML);
				return col;
			});
			document.querySelector('#tiptap > div > p')?.remove();
		}
		// create false logic with interface error
	}
	function increasRepeatcountRepeat(id: number, store:Writable<Array<DayCollection>>) {
		store.update(col => {
			let currentCollection = col.find((day:DayCollection) => day.id == id) as DayCollection; 
			if (currentCollection?.countRepeat < currentCollection?.totalRepeat) {
				currentCollection.countRepeat += 1;
			}
			return col;
		});
	}

	function createDate_7(collection:DayCollection) {
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
		collection.totalRepeat = 3;
		collection.countRepeat = 0;
		// id ? remove or ?

		if (supposedNextDate > MaxDays) {
			let difference = supposedNextDate - MaxDays;

			collection.dateOfRepeat.month = month + 1;
			if (collection.dateOfRepeat.month == 13) {
				collection.dateOfRepeat.year += 1;
				collection.dateOfRepeat.month = 1;
			}
			collection.dateOfRepeat.day = difference;
		} else {
			collection.dateOfRepeat.day = supposedNextDate;
		}

		return collection;
	}
	function changeId(a, b, c, d, e, f) {
		a.id = 2;
		b.id = 3;
		c.id = 4;
		d.id = 5;
		e.id = 6;
		f.id = 7;
	}
	function moveAll() {
		let first = $seven_days_collection[0];
		let second = $seven_days_collection[1];
		let third = $seven_days_collection[2];
		let fourth = $seven_days_collection[3];
		let fifth = $seven_days_collection[4];
		let sixth = $seven_days_collection[5];
		let seventh = $seven_days_collection[6];
		changeId(first, second, third, fourth, fifth, sixth);
		seven_days_collection.update((col) => {
			col[0] = {
				sentences: [],
				countRepeat: 0,
				id: 1,
				totalRepeat: 2
			};
			col[1] = first;
			col[2] = second;
			col[3] = third;
			col[4] = fourth;
			col[5] = fifth;
			col[6] = sixth;

			return col;
		});

		if (seventh.sentences.length != 0) {
			repeatAfterWeak.update((col) => {
				col.push(createDate_7(seventh));
				return col;
			});
		}
	}

	// Create different file ?
	const DATE = new Date().toString().split(' ');

	const YEAR = DATE[3];
	const MONTH = DATE[1];
	const DAY = DATE[2];
	const NAME_OF_DAY = DATE[0]
</script>

<div>{NAME_OF_DAY} ,{DAY} {MONTH} {YEAR}</div>

<div class="flex gap-3">
	{#each $seven_days_collection as collection}
		<div>
			<div class="words-box">
				{#each collection.sentences as sentence}
					<div>{@html sentence}</div>
				{/each}
			</div>
			<div class="flex justify-between">
				<button on:click={() => increasRepeatcountRepeat(collection.id, seven_days_collection)}>Ok</button>
				<div>{collection.countRepeat}/{collection.totalRepeat}</div>
			</div>
		</div>
	{/each}
</div>

<div>
	{#each $repeatAfterWeak as collection}
		
		<div>
			{collection.dateOfRepeat.day}/{collection.dateOfRepeat.month}/{collection.dateOfRepeat.year}
		</div>
		<div>
			<div class="words-box">
				{#each collection.sentences as sentence}
					<div>{@html sentence}</div>
				{/each}
			</div>
			<div class="flex justify-between">
				<button on:click={() => increasRepeatcountRepeat(collection.id,repeatAfterWeak)}>Ok</button>
				<div>{collection.countRepeat}/{collection.totalRepeat}</div>
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
