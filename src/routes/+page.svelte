<script lang="ts">
	import Tiptap from '../lib/Tiptap.svelte';

	let sentenceCollection: string[] = [];
	
	function checkValidity(newInput: string):boolean {
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
			sentenceCollection.push(Paragraph_HTML);
			sentenceCollection = sentenceCollection;
            document.querySelector('#tiptap > div > p')?.remove()
		}
        // create false logic with interface error
	}
</script>

{#each sentenceCollection as sentence}
	<div>{@html sentence}</div>
{/each}
<button on:click={pushNewSentence}>Add</button>

<Tiptap />
