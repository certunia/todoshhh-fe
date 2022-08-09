<script>
	export let isColored;
	export let shadow;
</script>

<div class="ui-three-dots {isColored ? 'ui-three-dots_colored' : '' }">
	<button class='ui-three-dots__background' style='box-shadow: {shadow}'>
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
                        background-color: $c-special;
                    }
                }

                &__background {
										background-color: $c-hover;
										box-shadow: 0 0 16px 8px $c-hover;
                }
						}
				}

				&__background {
            background-color: $c-special;
            box-shadow: 0 0 16px 8px $c-special;
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
