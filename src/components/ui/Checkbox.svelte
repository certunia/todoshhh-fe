<script>
    export let isDone;
    export let isEdited;
    export let text;
    export let index;
    let input;

    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    const changeVal = () => {
        console.log('asdf')
    }

    const onKeyPress = (event) => {
        if (event.key === 'Enter' && event.shiftKey) {
            console.log('Add new one here');
        }
    }

    const stopEditing = () => {
        isEdited = false;
        dispatch('setValue', { text, index });
    }

    export function focus() {
        input.focus();
    }
</script>

<div>
    <label class="ui-checkbox">
        {#if isEdited}
            <div class='relative'>
                <label
                  class="ui-checkbox__input"
                  contenteditable="true"
                  on:keypress={onKeyPress}
                  on:blur={stopEditing}
                  bind:innerHTML={text}
                  bind:this={input}
                >
                    {text}
                </label>
                <span class='border'></span>
            </div>
        {:else}
            <slot />
        {/if}

        <input type="checkbox" checked={isDone} onChange={changeVal}>
        <span class="ui-checkbox_checkmark"></span>
    </label>
</div>

<style lang="scss">
  // TODO rename classes
  .ui-checkbox {
    cursor: pointer;
    display: block;
    //font-size: 14px;
    font-weight: 600;
    line-height: 32px;
    padding: 18px 7px 18px 48px;
    position: relative;
    text-align: left;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .border {
      height: calc(100% + 5px);
      border: 2px solid $c-border;
      border-radius: 7px;
      bottom: -2px;
      display: block;
      padding: 0 12px;
      position: absolute;
      right: 12px;
      width: 100%;
  }

  .ui-checkbox__input {
      cursor: text;
      display: block;
      padding: 0 12px;
      position: relative;
      right: 12px;
      width: 100%;
      z-index: 1;
  }

  /* Hide the browser's default checkbox and input */
  .ui-checkbox input {
    cursor: pointer;
    height: 0;
    opacity: 0;
    position: absolute;
    width: 0;
  }

  /* Create a custom checkbox */
  .ui-checkbox_checkmark {
    border-radius: 4px;
    position: absolute;
    top: 17px;
    left: 0;
    height: 32px;
    width: 32px;
    border: 4px solid $c-special;
  }

  /* On mouse-over, add a grey background color */
  .ui-checkbox:hover input ~ .ui-checkbox_checkmark {
    //background: center no-repeat url("check_orange.svg");
    //background-size: 39px 37px;
  }

  /* When the checkbox is checked, add a blue background */
  .ui-checkbox input:checked ~ .ui-checkbox_checkmark {
    //background: center no-repeat url("check_orange.svg");
    //background-size: 39px 37px;
  }

  /* Create the checkmark/indicator (hidden when not checked) */
  .ui-checkbox_checkmark:after {
    content: "";
    left: -5px;
    position: absolute;
    top: -7px;
    display: none;
  }

  /* Show the checkmark when checked */
  .ui-checkbox input:checked ~ .ui-checkbox_checkmark:after {
    display: block;
  }

  /* Style the checkmark/indicator */
  .ui-checkbox .ui-checkbox_checkmark:after {
    background: center no-repeat url("/img/ui/check_orange.svg");
    background-size: 39px 37px;
    height: 37px;
    width: 39px;
  }
</style>
