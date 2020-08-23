<template>
  <div class="comments">
    <div v-for="(message,index) in Messages" :key="index">
      <div class="time">{{message.Time}}</div>
      <div :class="message.UserType">
        <img :src="message.img" alt="img">
        <div :class="[message.TextType,'txt']">{{message.Msg}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Comments",
    props:{
      Messages:{
        type:Array
      }
    }
  }
</script>

<style scoped>
  .comments {
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    height: 497px;
    width: 100%;
    background-color: #F7F6F9;
    overflow-y: auto;
  }

  .comments img {
    height: 50px;
    width: 50px;
    border-radius: 50%;
    margin: 0 25px;
  }

  .comments .txt {
    border-radius: 15px;
    padding-left: 15px;
    font-size: 18px;
    height: 50px;
    min-height: 50px;
    width: auto;
    line-height: 50px;
    min-width: 350px;
    padding-right: 55px;
  }

  .comments .time {
    text-align: center;
    width: 100%;
    height: 10px;
    margin: 10px 0;
    color: #BDC1C5;
    font-size: 10px;
  }

  .comments .others {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    width: 100%;
    min-height: 60px;
    height: 60px;
    margin: 10px 0;
  }

  .comments .others .others-text {
    background-color: #fff;
  }

  .comments .my {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: reverse;
    -ms-flex-direction: row-reverse;
    flex-direction: row-reverse;
    width: 100%;
    min-height: 60px;
    height: 60px;
  }

  .comments .my .MyText {
    background-color: #E9F2F6;
  }
</style>

