<script>
    export let isPlay;

    let classes = "btn play";

    function playPause() {
        isPlay = !isPlay;

        if ( classes.includes('play') ) {
            classes = classes.replace("play", "pause");
        } else {
            classes = classes.replace("pause", "play");
        }
    }
</script>

<div class="ui-play-pause">
    <div class={classes} on:click={playPause}>
        <span class="ui-play-pause__bar ui-play-pause__bar-1"></span>
        <span class="ui-play-pause__bar ui-play-pause__bar-2"></span>
        <span class="ui-play-pause__bar ui-play-pause__bar-3"></span>
    </div>
</div>

<style lang="scss">
    .ui-play-pause {
        align-items: center;
        position: relative;
        height: 100%;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: center;
        width: 55px;
    }

    .btn {
        position: relative;
        width: 50px;
        height: 64px;
        cursor: pointer;
        transition: border 0.1s ease-in-out;

        .ui-play-pause__bar {
            display: inline-block;
            position: absolute;
            top: 10px;
            left: 6px;
            width: 4px;
            height: 50px;
            border-radius: 5px;
            background-color: var(--c-primary);
            transform-origin: center;
            transition: transform 0.4s ease-in-out, background 0.1s ease-in-out, opacity 0.4s;
        }

        &.pause {
            .ui-play-pause__bar-1 {
                transform: translateX(8px) translateY(0px) rotate(0deg);
                width: 4px;
            }
            .ui-play-pause__bar-2 {
                transform: translateX(24px) translateY(0px) rotate(0deg);
                width: 4px;
            }
            .ui-play-pause__bar-3 {
                opacity: 0;
                transform: translateX(-10px);
            }
        }

        &.play {
            .ui-play-pause__bar-1 {
                transform: translateX(20px) translateY(-12px) rotate(-60deg);
            }
            .ui-play-pause__bar-2 {
                transform: translateX(20px) translateY(12px) rotate(-120deg);
            }
            .ui-play-pause__bar-3 {
                opacity: 1;
                transform: translateX(0);
            }
        }
    }
</style>
