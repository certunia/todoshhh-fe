<script>
    import Header from './Common/header/Header.svelte';
    import Music from './Music.svelte';
</script>

<div class="app-layout">
    <Header />

    <Music />

    <h1 class="text-3xl font-bold underline">
        Here is some tailwind!
    </h1>

    <main>
        <slot />
    </main>
</div>
