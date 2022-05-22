<script>
    import {flip} from 'svelte/animate';
    import Checkbox from '../ui/Checkbox.svelte'
    import ThreeDots from '../ui/ThreeDots.svelte'
    import MdAdd from 'svelte-icons/md/MdAdd.svelte'

    let list = [
        {name: "foo", id: 0},
        {name: "bar", id: 1},
        {name: "bob", id: 2},
        {name: "jean", id: 3},
        {name: "make a better world make a better world", id: 4}
    ];

    let hovering = false;

    const drop = (event, target) => {
        event.dataTransfer.dropEffect = 'move';
        const start = parseInt(event.dataTransfer.getData("text/plain"));
        const newTracklist = list

        if (start < target) {
            newTracklist.splice(target + 1, 0, newTracklist[start]);
            newTracklist.splice(start, 1);
        } else {
            newTracklist.splice(target, 0, newTracklist[start]);
            newTracklist.splice(start + 1, 1);
        }
        list = newTracklist
        hovering = null
    }

    const dragstart = (event, i) => {
        event.dataTransfer.effectAllowed = 'move';
        event.dataTransfer.dropEffect = 'move';
        const start = i;
        event.dataTransfer.setData('text/plain', start);
    }
</script>

<div class="todolist">
    <div class='todolist-header'>
        ToDo

        <ThreeDots>

        </ThreeDots>
    </div>

    <div class='todolist-field'>
        {#each list as n, index  (n.name)}
            <div
              class="todolist-item"
              animate:flip
              draggable={true}
              on:dragstart={event => dragstart(event, index)}
              on:drop|preventDefault={event => drop(event, index)}
              ondragover="return false"
              on:dragenter={() => hovering = index}
              class:is-active={hovering === index}
            >
                <Checkbox>
                    {n.name}
                </Checkbox>
                <ThreeDots
                  isColored
                >

                </ThreeDots>
            </div>
        {/each}

        <button class='todolist-add-item'>
            <span class='icon'>
                <MdAdd class='icon'/>
            </span>

            Add task
        </button>
    </div>
</div>

<style lang="scss" global>
    .todolist {
        width: 100%;

        &-add-item {
            .icon {
                height: 30px;
                width: 30px;

                :global(svg) {
                    height: 30px;
                    width: 30px;
                }
            }
        }

        &-header {
            align-items: center;
            background-color: $c-special;
            border: 4px solid $c-special;
            border-radius: 20px 20px 0 0;
            color: #fff;
            display: flex;
            font-size: 24px;
            font-weight: 700;
            justify-content: space-between;
            height: 58px;
            padding: 0 28px;
            z-index: 1;
        }

        &-field {
            border-left: 4px solid $c-border;
            border-bottom: 4px solid $c-border;
            border-right: 4px solid $c-border;
            border-radius: 0 0 20px 20px;
            padding: 8px;
        }

        &-item {
            font-size: 22px;
            font-weight: 500;
            border-radius: 4px;
            display: block;
            line-height: 1.2;
            padding: 0 8px;
            position: relative;
            transition: $transition;

            .ui-three-dots {
                display: none !important;
                transition: $transition;
                position: absolute !important;
                top: 13px;
                right: 20px;
            }

            &:hover {
                background-color: $c-hover;

                .ui-three-dots {
                    display: block !important;
                }
            }
        }

        &-item.is-active {
            background-color: $c-special__light;
            color: #fff;
        }
    }
</style>
