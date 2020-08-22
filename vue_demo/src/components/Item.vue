<template>
  <div>
    <div class="list-item">
      <div class="left">
        <img :src="contact.img" alt="">
      </div>
      <div class="right">
        <div class="top">
          <div class="name">{{contact.name}}</div>
          <div class="LastTime">{{contact.LastTime}}</div>
        </div>
        <div class="bottom">{{contact.LastText}}</div>
      </div>
    </div>
  </div>

</template>

<script>
    export default {
      name: "Item",
      props:{//指定属性名和属性类型
        contact:Object
      },
      data(){
          return {

          }
      }
    }
</script>

<style scoped>
  .list-item {
    height: 150px;
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    background-color: #F1EFF1;
    -webkit-box-shadow: 0 1px 3px rgba(26, 26, 26, 0.1);
    box-shadow: 0 1px 3px rgba(26, 26, 26, 0.1);
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    border-left: 1px solid #ddd;
    -webkit-transition: 1s;
    transition: 1s;
    cursor: pointer;
  }

  .list-item .left {
    width: 80px;
    height: 100%;
  }

  .list-item .left img {
    margin: 13px 15px 87px 15px;
    height: 50px;
    width: 50px;
    border-radius: 50%;
  }

  .list-item .right {
    width: 320px;
    height: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
  }

  .list-item .right .top {
    width: 100%;
    height: 50px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: distribute;
    justify-content: space-around;
  }

  .list-item .right .bottom {
    word-break: keep-all;
    text-indent: 2rem;
    color: #BDC1C5;
    font-size: 15px;
  }

  .list-item:hover {
    border-left: 1px solid skyblue;
  }

  .list-item:first-child {
    border-top: 1px solid #ddd;
  }

  .list-item:last-child {
    border-bottom: none;
  }
</style>
