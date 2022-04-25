<script>
    import PlayPause from "../ui/PlayPause.svelte"
    import Time, { svelteTime } from "svelte-time";
    import dayjs from "dayjs";

    const timeFormat = "mm: ss"
    const timers = [25];

    // let dayjs = null;
    let step1 = null;
    let minutes = 0;
    let seconds = 0;

    // let time = dayjs().format('MMM DD, YYYY');

    step1 = dayjs().minute(25);
    step1 = step1.second(10);
    // step1.subtract(1, 'minute')

    // setInterval(() => {
        // step1.add(1, 'd')
        // console.log(step1)
    // }, 1000);
</script>

<div class="pomodoro">
    <div class="pomodoro__sessions">
        <p>Work sessions</p>
        <span class="pomodoro__sessions_current"><span>2</span>/10</span>
    </div>

    <div class="pomodoro__timer">
        <PlayPause />

        <time
            use:svelteTime="{{
                format: timeFormat,
                live: true
          }}"
        ></time>

<!--        <Time live format={timeFormat}></Time>-->

        <!--{#each list as n, index  (n.name)}-->
        <!--{/each}-->
    </div>
</div>

<style lang="scss">
    .pomodoro {
        display: flex;
        flex-direction: column;
        min-width: 216px;
    }

    .pomodoro__sessions {
        display: flex;
        font-size: 18px;

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
        font-size: 38px;
        margin: 40px 0 0;

        time {
          margin: 8px 0 0 20px;
        }
    }
</style>
