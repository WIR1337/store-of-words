<script lang="ts">
    let newSentence = ''
    
    let sentenceArr:string[] = []

    function saveSentence(){
        sentenceArr.push(newSentence)
        sentenceArr = sentenceArr
    }

</script>

{#each sentenceArr as sentence}
    <div>{sentence}</div>
{/each}
<textarea bind:value={newSentence} class="border-2 border-blue-500" id="sentenceInput" cols="30" rows="5"></textarea>
<button on:click={saveSentence} class="border border-black">Add</button>