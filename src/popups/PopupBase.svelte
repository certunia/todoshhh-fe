<script>
	import RouterLink from '@spaceavocado/svelte-router/component/link';
	import CloseIcon from '../components/icons/Close.svelte'
	export let to;
	export let title;
</script>

<div class='top-0 left-0 absolute w100 h100'>
	<RouterLink to={to}><div class='w100 h100 z-10 popup-background-blur cursor-pointer'></div></RouterLink>
	<div class='popup-window rounded-3xl border border-black drop-shadow-md'>
		<div class='flex items-center justify-between p-4'>
			<div class='text-2xl'>{title}</div>

			<RouterLink to={to}>
				<CloseIcon/>
			</RouterLink>
		</div>

		<hr class='bg-black'/>

		<div class='p-4'>
			<slot></slot>
		</div>
	</div>
</div>

<style>
	.popup-background-blur {
      background-color: rgba(255, 255, 255, .15);
      backdrop-filter: blur(5px);
  }

	.popup-window {
			position: fixed;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			background-color: white;
			width: 600px;
  }
</style>
