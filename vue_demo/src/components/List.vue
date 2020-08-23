<template>
  <div class="list">
    <Item v-for="(contact,index) in CurrentContacts" :key="index" :contact="contact" />
  </div>
</template>

<script>
    import axios from 'axios'
    import Pubsub from 'pubsub-js'
    import Item from "./Item";
    export default {
      name: "List",
      components: {Item},
      props:["contacts"],
      data(){
        return {
          CurrentContacts:[],
          isSearched:undefined,
          tempContacts:[]
        }
      },
      mounted() {
        this.CurrentContacts = this.contacts;
        Pubsub.subscribe("flash",(msg,Member)=>{
          this.tempContacts = Member;
          this.isSearched=Member.length;
        })
      },
      watch:{
        isSearched(value){
          if(value===0){
            this.CurrentContacts = this.contacts;
          }else{
            this.CurrentContacts = this.tempContacts;
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
