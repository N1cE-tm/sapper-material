<script>
  /**
   * Sapper
   */
  import { stores } from "@sapper/app";

  /**
   * Svelte
   */
  import { onMount } from "svelte";

  /**
   * Material
   */
  import { Section } from "@smui/top-app-bar";
  import { Scrim, AppContent } from "@smui/drawer";

  /**
   * Components
   */
  import AppBar from "../components/layout/AppBar.svelte";
  import Drawer from "../components/layout/Drawer.svelte";

  /**
   * Props
   */
  export let segment;

  /**
   * Body
   */
  const { page } = stores();

  let isMobile = false;

  const detectWidth = () => {
    isMobile =
      document &&
      document.documentElement &&
      document.documentElement.clientWidth < 720;
  };

  onMount(() => {
    detectWidth();
  });
</script>

<style>

</style>

<AppBar {segment} {isMobile} />
<svelte:window on:resize={detectWidth} />

<div class="drawer-container">
  <Drawer {segment} {isMobile} />
  {#if isMobile}
    <Scrim />
  {/if}
  <AppContent class="app-content">
    <main class="main-content">
      <section>
        <slot />
      </section>
    </main>
  </AppContent>
</div>
