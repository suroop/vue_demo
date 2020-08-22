<template>
  <div class="list">
    <Item/>
  </div>
</template>

<script>
    import Item from "./Item";
    export default {
        name: "List",
      components: {Item}
    }
</script>

<style scoped>
  .list {
    height: 580px;
    max-height: 580px;
    width: 100%;
    overflow-y: auto;
  }

</style>
