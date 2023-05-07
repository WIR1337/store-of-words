<script>
    import "./styles.scss";
  
    import StarterKit from "@tiptap/starter-kit";
    import { Editor } from "@tiptap/core";
    import { onMount } from "svelte";
  
    let element;
    let editor;
  
    onMount(() => {
      editor = new Editor({
        element: element,
        extensions: [StarterKit],
        
        onTransaction: () => {
          // force re-render so `editor.isActive` works as expected
          editor = editor;
        },
      });
    });
  </script>
  
  {#if editor}
    <div>
      <div>
        <button
          on:click={() => console.log && editor.chain().focus().toggleBold().run()}
          disabled={!editor.can().chain().focus().toggleBold().run()}
          class={editor.isActive("bold") ? "is-active" : ""}
        >
          bold
        </button>
      </div>
    </div>
  {/if}
  <div bind:this={element} />