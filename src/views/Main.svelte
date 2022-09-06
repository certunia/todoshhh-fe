<script>
	import Layout from './../components/Layout.svelte';
	import ToDoList from './../components/ToDoList.svelte';
	import Pomodoro from '../components/Pomodoro.svelte';
	import RouterView from '@spaceavocado/svelte-router/component/view';
</script>

<Layout>
	<div class="wrap main transition-all bg-white dark:bg-dark">
		<div class="main-tables">
			<ToDoList />
		</div>

		<div class='main-pomodoro transition-all bg-white dark:bg-dark'>
			<Pomodoro />
		</div>
	</div>

	<RouterView />
</Layout>

<style global lang='scss'>
		.app-layout {
				position: relative;
    }

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
