<script>
	import Layout from './../components/Layout.svelte';
	import ToDoList from './../components/ToDoList/ToDoList.svelte';
	import Pomodoro from './../components/Pomodoro/Pomodoro.svelte';
</script>

<Layout>
	<div class="wrap main">
		<div class="main-tables">
			<ToDoList />
		</div>

		<div class='main-pomodoro'>
			<Pomodoro />
		</div>
	</div>
</Layout>

<style lang='scss'>
    .main {
        display: flex;
        flex-direction: row;
				justify-content: space-between;
    }

    .main-tables {
        flex-grow: 1;
    }

		.main-pomodoro {
				margin: 0 0 0 38px;
		}
</style>
