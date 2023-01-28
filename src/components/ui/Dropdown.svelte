<script>
	import { onMount } from 'svelte';
	import { scale } from 'svelte/transition';
	import RouterLink from '@spaceavocado/svelte-router/component/link';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let items;
	export let dropdownInfo = {};

	let show = false; // menu state
	let menu = null; // menu wrapper DOM reference

	onMount(() => {
		const handleOutsideClick = (event) => {
			if (show && !menu.contains(event.target)) {
				show = false;
			}
		};

		const handleEscape = (event) => {
			if (show && event.key === 'Escape') {
				show = false;
			}
		};

		// add events when element is added to the DOM
		document.addEventListener('click', handleOutsideClick, false);
		document.addEventListener('keyup', handleEscape, false);

		// remove events when element is removed from the DOM
		return () => {
			document.removeEventListener('click', handleOutsideClick, false);
			document.removeEventListener('keyup', handleEscape, false);
		};
	});

	function handleClick(eventName) {
		dispatch('eventHandler',
			{
				...eventName,
				...dropdownInfo
			});

		show = false;
	}
</script>

<div class="dropdown relative" bind:this={menu}>
		<span
			on:click={() => (show = !show)}
			class="menu focus:outline-none focus:shadow-solid cursor-pointer"
		>
			<slot></slot>
		</span>

		{#if show}
			<div
				in:scale={{ duration: 100, start: 0.95 }}
				out:scale={{ duration: 75, start: 0.95 }}
				class="origin-top-right absolute right-0 py-2 mt-1 bg-white
				rounded-md rounded-tr-none shadow-md z-10 border border-black text-base text-black
				dark:bg-dark"
			>
				{#each items as item, i}
					{#if item?.link?.length}
						<RouterLink cls='block px-4 py-2 cursor-pointer' to="{item.link}">
							{item.text}
						</RouterLink>
					{:else}
						<div
							class='block px-4 py-2 cursor-pointer'
							on:click|once={handleClick({eventName: item.eventName})}
						>
							{item.text}
						</div>
					{/if}
				{/each}
			</div>
		{/if}
</div>


