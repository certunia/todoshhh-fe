<script>

    let val = false;
    // <!--export default {-->
    // <!--    props: {-->
    // <!--        checked: Boolean,-->
    // <!--    },-->
    // <!--    data() {-->
    // <!--        return {-->
    // <!--            isChecked: this.checked-->
    // <!--        }-->
    // <!--    },-->
    // <!--    methods: {-->
    // <!--        click() {-->
    // <!--            this.$emit('click', this.isChecked)-->
    // <!--        }-->
    // <!--    },-->
    // <!--    watch: {-->
    // <!--        checked(newVal) {-->
    // <!--            this.isChecked = newVal;-->
    // <!--        },-->
    // <!--        isChecked(newVal) {-->
    // <!--            this.$emit('input', newVal);-->
    // <!--        }-->
    // <!--    },-->
    // <!--    created() {-->
    // <!--        this.$emit('input', this.checked);-->
    // <!--    }-->

    const changeVal = () => {
        console.log('asdf')
    }

    // }
</script>

<div>
    <label class="ui-checkbox">
        <slot />
        <input type="checkbox" value={val} onChange={changeVal}>
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
    line-height: 24px;
    padding: 18px 7px 18px 48px;
    position: relative;
    text-align: left;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  /* Hide the browser's default checkbox */
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
    height: 24px;
    width: 24px;
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
    left: -8px;
    position: absolute;
    top: -14px;
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
