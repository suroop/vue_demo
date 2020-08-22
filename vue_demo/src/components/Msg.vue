<template>
  <div class="msg">
    <img src="../../static/assets/img4.jpg" alt="">
    <div class="textarea">
      <label>
        <input type="text" placeholder="Type your message" v-model="msg">
      </label>
      <button><i class="fa fa-paperclip" @click="SendMsg"></i></button>
    </div>
    <input type="submit" value="send">
  </div>
</template>

<script>
    export default {
      name: "Msg",
      props:{
        SendMsg:{
          type:Function,
          required:true
        }
      },
      data(){
        return {
          msg:''
        }
      },
      methods:{

      }
    }
</script>

<style scoped>
  .msg {
    border-top: 1px solid #ddd;
    height: 80px;
    width: 100%;
    background-color: #F1F1F1;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: distribute;
    justify-content: space-around;
  }

  .msg img {
    height: 50px;
    width: 50px;
    border-radius: 50%;
  }

  .msg .textarea {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }

  .msg .textarea input[type=text] {
    outline: none;
    border: none;
    height: 40px;
    width: 450px;
    border-radius: 5px 0 0 5px;
    font-size: 18px;
    background-color: white;
    padding-left: 15px;
  }

  .msg .textarea button {
    background-color: white;
    border-radius: 0 5px 5px 0;
    outline: none;
    border: none;
    cursor: pointer;
    height: 40px;
    width: 40px;
    font-size: 25px;
    color: #BDC1C5;
  }

  .msg .textarea ::-webkit-input-placeholder {
    font-size: 18px;
  }

  .msg input[type=submit] {
    background-color: #0AA7E4;
    outline: none;
    border: none;
    color: white;
    height: 40px;
    width: 100px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 15px;
  }
</style>
