<script>
    import { get } from 'svelte/store';
    import { val } from './main.js'
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
HEY

<input type="number" name="testInp" id="testInp" bind:value={$val}>

{$val}