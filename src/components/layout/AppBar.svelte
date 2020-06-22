<script>
  /**
   * Sapper
   */
  import { stores } from "@sapper/app";

  /**
   * Svelte
   */

  /**
   * Material
   */
  import TopAppBar, { Row, Section, Title } from "@smui/top-app-bar";
  import IconButton from "@smui/icon-button";

  /**
   * Components
   */
  import { drawerOpen } from "./Drawer.svelte";

  /**
   * Props
   */
  export let segment;
  export let isMobile;
  export let title = "Admin";

  /**
   * Body
   */
  const { page } = stores();
</script>

<style>

</style>

<TopAppBar class="dpg" variant="static" color="secondary">
  <Row>
    <Section>
      {#if isMobile}
        <IconButton
          on:click={() => ($drawerOpen = !$drawerOpen)}
          class="material-icons">
          menu
        </IconButton>
      {/if}
      <Title>{title}</Title>
    </Section>
    <Section align="end" toolbar>
      <IconButton class="material-icons" aria-label="Download">
        file_download
      </IconButton>
      <IconButton class="material-icons" aria-label="Print this page">
        print
      </IconButton>
      <IconButton class="material-icons" aria-label="Bookmark this page">
        bookmark
      </IconButton>
    </Section>
  </Row>
</TopAppBar>
