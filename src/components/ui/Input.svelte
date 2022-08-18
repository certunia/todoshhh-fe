<script>
	export let placeholder;
	export let id;
	export let type = 'text';
</script>

<label for={id}>
	<input type={type} id={id} class="border-2 border-solid border-gray-800 my-4 text-gray-800 text-sm rounded-lg
				block w-full p-2.5 not-italic" placeholder={placeholder} required>
</label>
