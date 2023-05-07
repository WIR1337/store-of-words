<script lang="ts">
import Tiptap from "../lib/Tiptap.svelte";

    let newSentence = ''
    
    let sentenceArr:string[] = []

    function saveSentence(){
        sentenceArr.push(newSentence)
        sentenceArr = sentenceArr
    }

</script>

<Tiptap></Tiptap>


{#each sentenceArr as sentence}
    <div>{sentence}</div>
{/each}
<button on:click={saveSentence} class="border border-black">Add</button>