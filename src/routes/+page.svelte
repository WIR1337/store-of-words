<script lang="ts">
	import type { Writable } from 'svelte/store';
	import { seven_days_collection, repeatAfterWeak } from '../collections-store';
	import createDate from '../scripts/currentDate'

	import Tiptap from '../lib/Tiptap.svelte';


	const TODAY_IS = createDate()


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
	function createDate_7(collection:DayCollection):SevenDayCollection {
		// look's like shit. Rework , read docs ts 
		let newCol = collection as SevenDayCollection

		const DATE = new Date();

		let year = DATE.getFullYear();
		let month = DATE.getMonth() + 1;
		let day = DATE.getDate();

		const MaxDaysInMonth = new Date(year, month, 0).getDate();

		let supposedNextDate = day + 7;

		newCol.dateOfRepeat = {
			year,
			month,
			day
		};
		newCol.totalRepeat = 3;
		newCol.countRepeat = 0;
		newCol.typeOfRepeat = 7
		// id ? remove or ?

		if (supposedNextDate > MaxDaysInMonth) {
			let difference = supposedNextDate - MaxDaysInMonth;

			newCol.dateOfRepeat.month = month + 1;
			if (newCol.dateOfRepeat.month == 13) {
				newCol.dateOfRepeat.year += 1;
				newCol.dateOfRepeat.month = 1;
			}
			newCol.dateOfRepeat.day = difference;
		} else {
			newCol.dateOfRepeat.day = supposedNextDate;
		}

		return newCol;
	}
	function changeId(Collections:Array<DayCollection>) {
		for (let index = 0; index < Collections.length; index++) {
			Collections[index].id = index + 2 
		}
		
	}
	function moveAll() {
		let first = $seven_days_collection[0];
		let second = $seven_days_collection[1];
		let third = $seven_days_collection[2];
		let fourth = $seven_days_collection[3];
		let fifth = $seven_days_collection[4];
		let sixth = $seven_days_collection[5];
		let seventh = $seven_days_collection[6];

		changeId([first, second, third, fourth, fifth, sixth]);

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

</script>

<div>{TODAY_IS}</div>

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
