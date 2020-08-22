<template>
  <div class="searchmem">
    <div class="search-message">
      <label for="message"><i class="fa fa-search"></i></label>
      <input type="text" name="search" id="message" placeholder="Search Message ..." autocomplete="off" v-model="MemberName" @change="SearchName" @keydown.enter="Goto">
    </div>
  </div>
</template>

<script>
  import Pubsub from 'pubsub-js'
    export default {
      name: "Searchmem",
      props:{
        contacts:{
          type:Array
        }
      },
      data(){
          return{
            MemberName:'',
            Members:[]
          }
      },
      methods:{
        Goto(){
          Pubsub.publish("flash",this.Members);
        },
        SearchName(){
         if(this.MemberName!==''){
            this.contacts.forEach((item,index)=>{
              if(item.includes(this.MemberName)){
                this.Members.push(this.contacts[index])
              }
            });
           }
        }
      }
    }
</script>

<style scoped>
  .searchmem {
    position: relative;
    background-color: #F1F1F1;
    width: 100%;
    height: 99px;
    border-bottom: 1px solid #ddd;
    border-left: 1px solid #ddd;
  }

  .searchmem .search-message {
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    height: 40px;
    width: 300px;
    background-color: #fff;
    border: 1px solid #EBEBEB;
    border-radius: 10px;
  }

  .searchmem .search-message label {
    width: 25px;
    height: 25px;
  }

  .search-message label i {
    cursor: pointer;
    text-align: center;
    position: absolute;
    width: 30px;
    height: 40px;
    font-size: 15px;
    color: #EBEBEB;
    line-height: 40px;
    top: 0;
    left: 0;
  }

  .search-message input {
    margin: 5px 0;
    padding-left: 35px;
    width: 200px;
    height: 30px;
    outline: none;
    border: none;
    font-size: 15px;
    line-height: 30px;
    background-color: transparent;
  }

  .searchmem .search-message ::-webkit-input-placeholder {
    font-size: 15px;
    line-height: 30px;
  }
</style>
