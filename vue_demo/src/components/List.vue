<template>
  <div class="list">
    <Item v-for="(contact,index) in contacts" :key="index" :contact="contact" />
  </div>
</template>

<script>
    import Item from "./Item";
    export default {
      name: "List",
      components: {Item},
      props:["contacts"]
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
