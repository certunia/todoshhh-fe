<script>
    import { tweened } from 'svelte/motion';
    import PlayPause from "../ui/PlayPause.svelte"
    import ThreeDots from '../ui/ThreeDots.svelte'
    // import dayjs from "dayjs";

    let isPlay = false;
    const timeArr = [10, 3, 1500, 300, 1500];
    let numbersLeft = [];
    let currentSession = 0;

    let timer = tweened(timeArr[currentSession]);

    calcNumbersLeft();

    setInterval(() => {
        if (!isPlay) return;
        if ( $timer > 0 )
            $timer--;
        else {
            currentSession++;
            timer = tweened(timeArr[currentSession])
            calcNumbersLeft();
        }
    }, 1000);

    $: minutes = countMinutes($timer);
    $: seconds = countSeconds($timer);

    function makeMeTwoDigits(n){
        return (n < 10 ? "0" : "") + n;
    }

    function countMinutes(time) {
        return makeMeTwoDigits(Math.floor(time / 60));
    }

    function countSeconds(time) {
        return makeMeTwoDigits(Math.floor(time % 60));
    }

    function calcNumbersLeft() {
        numbersLeft = timeArr.slice(currentSession, currentSession + 4);
    }
</script>

<div class="pomodoro transition-all bg-white dark:bg-dark">
    <div class='pomodoro__header'>

        <div class="pomodoro__sessions dark:text-white">
            <p>Work sessions</p>

            <span class="pomodoro__sessions_current"><span>{currentSession + 1}</span>/{timeArr.length}</span>
        </div>
    </div>

    <div class="pomodoro__timer">
        <div class="pomodoro__numbers">
            <span>{minutes}:{seconds}</span>

            {#each Array(4) as _, index (index)}
                {#if timeArr[currentSession + index + 1]}
                    <span>
                        {countMinutes(timeArr[currentSession + index + 1])}:{countSeconds(timeArr[currentSession + index + 1])}
                    </span>
                {:else}
                    <span>00:00</span>
                {/if}
            {/each}
        </div>

        <PlayPause bind:isPlay={isPlay}/>
    </div>
</div>

<style lang="scss" global>
    .pomodoro {
        border: 4px solid $c_border;
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        min-width: 216px;
        padding: 18px 21px;
        width: 240px;

        .ui-three-dots {
            .ui-three-dots__btn {
                margin: 0 0 0 auto;
            }
        }
    }

    .pomodoro__sessions {
        display: flex;
        font-size: 18px;
        justify-content: space-between;

        p {
            margin: 2px 0 0;
        }
    }

    .pomodoro__sessions_current {
        font-size: 20px;
        margin: 0 0 0 14px;

        span {
          color: $c_special;
        }
    }

    .pomodoro__timer {
        color: $c_special;
        display: flex;
        justify-content: space-between;
        font-size: 47px;
        margin: 15px 0 0;
    }

    .pomodoro__numbers {
        display: flex;
        flex-direction: column;
        line-height: 1.2;
        margin: 8px 0 0;

        @for $i from 1 through 5 {
            span {
                &:nth-child(#{$i}) {
                    color: $c_special;
                    font-size: calc(53px - 6px * #{$i});
                    opacity: calc(1 / #{$i} + 0.2);
                }
            }
        }
    }
</style>
