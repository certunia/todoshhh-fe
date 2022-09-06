<script>
    export let isDone = false;
    export let isEdited = false;
    export let text = '';
    export let itemIndex;
    export let listIndex;
    let input;

    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    const changeVal = (e) => {
        dispatch('setChecked', { itemIndex, listIndex, isDone: e.target.checked })
    }

    const onKeyPress = (event) => {
        if (event.key === 'Enter' && event.shiftKey) {
            return null;
        } else if (event.key === 'Enter') {
            isEdited = false; // prevent new line
        }
    }

    const stopEditing = () => {
        isEdited = false;
        dispatch('setValue', { text, itemIndex, listIndex });
    }

    export function focus() {
        input.focus();
    }

    function init(el){
        setTimeout(() => {
            el.focus()
        }, 100);
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
                  use:init
                >
                    {text}
                </label>
                <span class='border'></span>
            </div>
        {:else}
            <slot />
        {/if}

        <input type="checkbox" checked={isDone} on:change={changeVal}>
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
    padding: 14px 7px 14px 48px;
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
    top: 15px;
    left: 0;
    height: 32px;
    width: 32px;
    border: 4px solid var(--c-primary);
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

  .dark .ui-checkbox .ui-checkbox_checkmark:after {
      background: center no-repeat url("/img/ui/check_white.svg");
      background-size: 39px 37px;
      height: 37px;
      width: 39px;
  }
</style>
