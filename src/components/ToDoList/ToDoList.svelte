<script>
    import { flip } from 'svelte/animate';
    import Checkbox from '../ui/Checkbox.svelte';
    import ThreeDots from '../ui/ThreeDots.svelte';
    import Dropdown from '../ui/Dropdown.svelte';
    import IconAdd from '../icons/Add.svelte';
    import { getTodoList, deleteItem, todoList } from '../../store/todoList.js';

    getTodoList();

    let hovering = false;
    let field;

    const drop = (event, target) => {
        event.dataTransfer.dropEffect = 'move';
        const start = parseInt(event.dataTransfer.getData("text/plain"));
        const newTracklist = $todoList

        if (start < target) {
            newTracklist.splice(target + 1, 0, newTracklist[start]);
            newTracklist.splice(start, 1);
        } else {
            newTracklist.splice(target, 0, newTracklist[start]);
            newTracklist.splice(start + 1, 1);
        }
        $todoList = newTracklist
        hovering = null
    }

    const dragstart = (event, i) => {
        event.dataTransfer.effectAllowed = 'move';
        event.dataTransfer.dropEffect = 'move';
        event.dataTransfer.setData('text/plain', i);
    }

    function handleValue(event) {
        const detail = event.detail;

        detail.text = detail.text.replace(/&nbsp;/g, ' ');

        if (detail.text.trim().length === 0) {
            $todoList[detail.index].isEdited = false;
            $todoList.splice(detail.index, 1);
        } else {
            $todoList[detail.index].text = detail.text;
            $todoList[detail.index].isEdited = false;
        }
    }

    function addNewItem() {
        const id = Math.random();

        $todoList.push({
            text: "",
            id,
            isEdited: false,
            isDone: false
        });

        $todoList[$todoList.length - 1].isEdited = true;
    }

    function _editItem() {
        console.log('editItem');
    }

    function eventHandler(event) {
        const eventName = event.detail.eventName;
        const itemId = event.detail.itemIndex;
        const listId = event.detail.listIndex;

        switch(eventName) {
            case 'edit': {
                _editItem(event.detail.itemId);
                break;
            }
            case 'delete': {
                deleteItem(listId, itemId);
                break;
            }
        }
    }

    const listOptions = [{
        eventName: 'opop',
        text: 'asdf'
    }, {
        eventName: 'opop2',
        text: 'asdf'
    }]

    const itemOptions = [{
        // link: '/profile',
        eventName: 'edit',
        text: 'edit'
    }, {
        eventName: 'delete',
        text: 'delete'
    }]
</script>

<div class="todolist">
    <div class='todolist-header'>
        ToDo

        <Dropdown items={listOptions}>
            <ThreeDots>
            </ThreeDots>
        </Dropdown>
    </div>

    <div class='todolist-field'>
        {#each $todoList as n, index  (index)}
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
                <Checkbox {...n} {index} on:setValue={handleValue} bind:this={field}>
                    {n.text}
                </Checkbox>

                <div class='todolist-options'>
                    {#if !n.isEdited}
                        <Dropdown items={itemOptions} on:eventHandler={eventHandler}>
                            <ThreeDots isColored>
                            </ThreeDots>
                        </Dropdown>
                    {/if}
                </div>
            </div>
        {/each}

        <button
          class='todolist-add-item'
          on:click={addNewItem}
        >
            <IconAdd />

            Add task
        </button>
    </div>
</div>

<style lang="scss" global>
    .todolist {
        width: 100%;

        &-add-item {
            align-items: center;
            color: $c-border;
            cursor: pointer;
            display: flex;
            font-size: 19px;
            transition: $transition;

            .icon-add {
                margin: 0 12px 0 0;
            }

            &:hover {
                color: $cd-special;

                .icon-add__circle {
                    fill: $cd-special;
                }

                .icon-add__plus {
                    fill: #ffffff;
                }
            }
        }

        &__textarea {
            width: 100%;
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
            padding: 8px 8px 15px;
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

            &:hover {
                .todolist-options {
                    display: block;
                }
            }
        }

        &-options {
            display: none;
            transition: $transition;
            position: absolute !important;
            top: 20px;
            right: 20px;

            &:hover {
                background-color: $c-hover;
            }
        }

        &-item.is-active {
            background-color: $c-special__light;
            color: #fff;
        }
    }
</style>
