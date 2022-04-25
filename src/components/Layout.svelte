<script>
    import Header from './Common/header/Header.svelte';
    import Music from './Music.svelte';
</script>

<div class="app-layout">
    <Header />

    <Music />

    <main>
        <slot />
    </main>
</div>
