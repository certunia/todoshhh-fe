<script>
    import Header from './Header.svelte';
    import Music from './Music.svelte';
</script>

<main class="app-layout relative transition-all bg-white dark:bg-dark">
    <Header />

    <Music />

    <slot />
</main>
