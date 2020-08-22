<template>
    <div>
      <header>
        <span>C&nbsp;L&nbsp;A&nbsp;S&nbsp;S</span>
        <i class="fa fa-bars"></i>
      </header>
      <h6>Navigation</h6>
      <ul id="Navigation">
        <li class="item"><i class="fa fa-calendar-o"></i><span>TIMETABLE</span></li>
        <li class="item"><i class="fa fa-comment-o"></i><span>CHATS</span></li>
        <li class="item"><i class="fa fa-bookmark-o"></i><span>EXAMS</span></li>
        <li class="item"><i class="fa fa-folder-o"></i><span>DOCUMENTS</span></li>
      </ul>
      <h6>Frequent Contact</h6>
      <ul id="PeopleOnline">
        <li class="People"><img src="../assets/img1.jpg" alt=""><span>John</span></li>
        <li class="People"><img src="../assets/img2.jpg" alt=""><span>Bob</span></li>
        <li class="People"><img src="../assets/img3.jpg" alt=""><span>Alice</span></li>
        <li class="People"><img src="../assets/img5.jpg" alt=""><span>Wendy</span></li>
      </ul>
      <div class="line"></div>
      <footer>
        <ul>
          <li><h5>About</h5></li>
          <li><h5>Help</h5></li>
          <li><h5>Contact</h5></li>
        </ul>
        <h5 style="text-align: center;color: #5F6267;">copyright&nbsp;©&nbsp;&nbsp;2020&nbsp;suroop</h5>
      </footer>
    </div>
</template>

<script>
    export default {
        name: "Class"
    }
</script>

<style scoped>

  header {
    padding: 0 25px 0 40px;
    width: 235px;
    height: 70px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }

  header span {
    font-family: 'Microsoft JhengHei',
    'Microsoft Yahei',
    'STXinwei',serif;
    color: #BDC1C5;
    font-size: 30px;
  }

  header i {
    color: #5F6267;
    font-size: 25px;
    border: 1px #5F6267 solid;
    padding: 2px 5px;
    border-radius: 15%;
    cursor: pointer;
  }

  h6 {
    text-indent: 3rem;
    margin: 15px 0;
    color: #5F6267;
  }

  #Navigation {
    width: 100%;
    height: auto;
  }

  #Navigation .item {
    cursor: pointer;
    color: #5F6267;
    height: 50px;
    width: 100%;
  }

  #Navigation .item i {
    font-size: 20px;
    height: 30px;
    width: 30px;
    padding-left: 3rem;
    padding-right: 15px;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  #Navigation .item span {
    font-family: 'Microsoft JhengHei',serif;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  #Navigation .item:hover i {
    color: #1C5A81;
  }

  #Navigation .item:hover span {
    color: #BDC1C5;
  }

  #PeopleOnline {
    text-indent: 2rem;
    width: 100%;
    height: 250px;
  }

  #PeopleOnline .People {
    cursor: pointer;
    height: 50px;
    width: 100%;
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
  }

  #PeopleOnline .People img {
    border: 2px solid white;
    margin-left: 3rem;
    height: 40px;
    width: 40px;
    background-color: yellow;
    border-radius: 50%;
    -webkit-transition: 1s;
    transition: 1s;
  }

  #PeopleOnline .People span {
    color: #5F6267;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  #PeopleOnline .People:hover img {
    border: 2px solid #263B57;
  }

  #PeopleOnline .People:hover span {
    color: #BDC1C5;
  }

  .line {
    width: 250px;
    margin: 0 25px;
    height: 1px;
    background-color: #272B30;
    position: absolute;
    bottom: 100px;
    left: 0;
  }

  footer {
    width: 100%;
    height: 100px;
    position: absolute;
    bottom: 0;
    left: 0;
  }

  footer ul {
    width: 200px;
    margin: 0 50px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -ms-flex-pack: distribute;
    justify-content: space-around;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }

  footer ul li {
    color: #5F6267;
    height: 40px;
    line-height: 40px;
    cursor: pointer;
    -webkit-transition: .4s;
    transition: .4s;
  }

  footer ul li:hover {
    color: #BDC1C5;
  }
</style>
