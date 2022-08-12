<script>
    import Header from './Common/header/Header.svelte';
    import Music from './Music.svelte';
</script>

<main class="app-layout relative">
    <Header />

    <Music />

    <slot />
</main>
