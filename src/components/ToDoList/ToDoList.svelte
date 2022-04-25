<script>
    import {flip} from 'svelte/animate';
    import Checkbox from '../ui/Checkbox.svelte'

    let list = [
        {name: "foo", id: 0},
        {name: "bar", id: 1},
        {name: "bob", id: 2},
        {name: "jean", id: 3}
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
    </div>

    <div class='todolist-items'>
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
            </div>
        {/each}
    </div>
</div>

<style lang="scss">
    .todolist {
        width: 100%;
    }

    .todolist-header {
        align-items: center;
        background-color: $c-special;
        border: 4px solid $c-special;
        border-radius: 20px 20px 0 0;
        color: #fff;
        display: flex;
        font-size: 24px;
        height: 58px;
        text-transform: uppercase;
        padding: 0 28px;
        z-index: 1;
    }

    .todolist-items {
        border-left: 4px solid $c-bg;
        border-bottom: 4px solid $c-bg;
        border-right: 4px solid $c-bg;
        border-radius: 0 0 20px 20px;
        padding: 8px;
    }

    .todolist-item {
        font-size: 22px;
        font-weight: 500;
        border-radius: 4px;
        display: block;
        padding: 0 8px;
    }

    .todolist-item.is-active {
        background-color: $c-special__light;
        color: #fff;
    }
</style>
