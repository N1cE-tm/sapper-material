<script context="module">
  /**
   * Svelte
   */
  import { writable, get } from "svelte/store";

  /**
   * Exports
   */
  export const drawerOpen = writable(false);
</script>

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
  import Drawer, {
    AppContent,
    Content,
    Header,
    Title,
    Subtitle,
    Scrim
  } from "@smui/drawer";
  import List, { Item, Text, Separator, Subheader } from "@smui/list";
  import H6 from "@smui/common/H6.svelte";

  /**
   * Props
   */
  export let segment;
  export let isMobile;

  /**
   * Body
   */
  const { page } = stores();

  const menu = [
    {
      segment: undefined,
      name: "Home",
      link: "/"
    },
    {
      segment: "about",
      name: "About",
      link: "/about"
    },
    {
      segment: "blog",
      name: "Blog",
      link: "/blog"
    }
  ];

  $: if ($page) $drawerOpen = false;
</script>

<style>

</style>

<Drawer variant={isMobile ? 'modal' : 'permanent'} bind:open={$drawerOpen}>
  <Content>
    <List>
      {#each menu as item}
        <Item href={item.link} activated={item.segment === segment}>
          <Text>{item.name}</Text>
        </Item>
      {/each}
    </List>
  </Content>
</Drawer>
