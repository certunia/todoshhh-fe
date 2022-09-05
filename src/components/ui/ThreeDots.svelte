<script>
	export let isColored = false;
</script>

<div class="ui-three-dots {isColored ? 'ui-three-dots_colored' : '' }">
	<button class='ui-three-dots__background'>
		<span class='ui-three-dots__btn'>
			<span></span>
			<span></span>
			<span></span>
		</span>
	</button>
</div>

<style lang="scss">
    // TODO rename classes
    .ui-three-dots {
        display: flex;
        position: relative;

				&_colored {
						.ui-three-dots {
                &__btn {
                    span {
                        background-color: var(--c-primary);
                    }
                }

                &__background {
										background-color: inherit;
										box-shadow: 0 0 16px 8px inherit;
                }
						}
				}

				&__background {
            background-color: inherit;
            box-shadow: 0 0 16px 8px inherit;
				}

				&__btn {
						align-items: center;
						border-radius: 50%;
            cursor: pointer;
            display: flex;
            height: 23px;
            width: 40px;
						justify-content: space-between;
						padding: 8px 5px;

						span {
								display: block;
								content: '';
                border-radius: 50%;
                background-color: #fff;
                height: 7px;
                width: 7px;
						}
				}
    }
</style>
