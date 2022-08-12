<script>
	import RouterLink from '@spaceavocado/svelte-router/component/link';
</script>

<div class='top-0 left-0 absolute w100 h100'>
	<RouterLink to='/'><div class='w100 h100 z-10 popup-background-blur cursor-pointer'></div></RouterLink>
	<div class='popup-window rounded-3xl border border-black drop-shadow-md'>
		<slot></slot>
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
			height: 400px;
			width: 600px;
  }
</style>
