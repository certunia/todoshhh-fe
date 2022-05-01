<script>
	let isShown = false;

	const handleClick = () => {
		isShown = !isShown
	}

	const handleClose = () => {
		isShown = false
	}
</script>

<div>
	<div class="ui-three-dots">
		<div class='ui-three-dots__backdrop' on:click={handleClose}></div>
		<button class="ui-three-dots__btn" on:click={handleClick}>
			<span></span>
			<span></span>
			<span></span>
		</button>
		{#if isShown}
			xxx
			<slot />
		{/if}
	</div>
</div>

<style lang="scss">
    // TODO rename classes
    .ui-three-dots {
        cursor: pointer;
        display: flex;
        position: relative;

				&__btn {
						border-radius: 50%;
						display: flex;
            height: 7px;
            width: 30px;
						justify-content: space-between;
						padding: 8px;

						span {
								display: block;
								content: '';
                border-radius: 50%;
                background-color: #fff;
                height: 7px;
								position: absolute;
								top: 0;
                width: 7px;
						}
				}
    }
</style>
