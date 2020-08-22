<template>
  <nav id="nav">
    <div class="search-box">
      <label for="search"><i class="fa fa-search"></i></label>
      <input type="text" name="search" id="search" placeholder="Search People , Document , Exams ..." autocomplete="off">
    </div>
    <div class="info">
      <div class="FakeImg">
        <img src="../../static/assets/img4.jpg" alt="">
        <div class="point"></div>
      </div>
      <div class="username">Joseph Bowman</div>
      <button>﹀</button>
    </div>
  </nav>
</template>

<script>
    export default {
        name: "Nav"
    }
</script>

<style scoped>
  #nav {
    z-index: 99;
    -webkit-box-shadow: 0 5px 100px rgba(0, 0, 0, 0.1);
    box-shadow: 0 5px 100px rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid #ddd;
    height: 79px;
    background-color: white;
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
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }

  #nav .search-box {
    margin-left: 50px;
    height: 40px;
    width: 350px;
    border: 1px solid #EBEBEB;
    border-radius: 5px;
    position: relative;
  }

  #nav .search-box label {
    width: 25px;
    height: 25px;
  }

  #nav .search-box label i {
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

  #nav .search-box input {
    margin: 5px 0;
    padding-left: 35px;
    width: 300px;
    height: 30px;
    outline: none;
    border: none;
    font-size: 15px;
    line-height: 30px;
  }

  #nav .search-box ::-webkit-input-placeholder {
    font-size: 15px;
    line-height: 30px;
  }

  #nav .info {
    height: 60px;
    width: 220px;
    margin-right: 25px;
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
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }

  #nav .info .FakeImg {
    position: relative;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: yellow;
  }

  #nav .info .FakeImg img {
    position: absolute;
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  #nav .info .FakeImg .point {
    position: absolute;
    width: 10px;
    height: 10px;
    background-color: red;
    border-radius: 50%;
    top: 5%;
    right: 5%;
  }

  #nav .info .username {
    cursor: pointer;
    font-family: 'Microsoft Yahei',
    'Microsoft JhengHei',serif;
  }

  #nav .info button {
    margin-top: 5px;
    cursor: pointer;
    background-color: transparent;
    border: none;
    outline: none;
  }
</style>
