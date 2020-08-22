<template>
  <div v-if="!isSearched" class="list">
    <Item v-for="(contact,index) in contacts" :key="index" :contact="contact" />
  </div>
  <div v-else class="list">
    <Item v-for="(CurrentContact,index) in contacts" :key="index" :contact="CurrentContact" />
  </div>
</template>

<script>
    import Pubsub from 'pubsub-js'
    import Item from "./Item";
    export default {
      name: "List",
      components: {Item},
      props:["contacts"],
      data(){
        return {
          isSearched:false,
          CurrentContacts:[]
        }
      },
      watch:{
        isSearched(value){
          if(value){
            Pubsub.subscribe("flash",(msg,Members)=>{
              this.CurrentContacts.fill(Members);
            })
          }
        }
      }
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
