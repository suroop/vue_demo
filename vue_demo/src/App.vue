<template>
    <div id="app">
      <aside id="Class">
        <Class/>
      </aside>
      <main id="Chat">
        <Nav/>
        <div class="container">
          <div class="left-col">
            <Top/>
            <Comments :Messages="Messages"/>
            <Msg @addComment="addComment"/>
          </div>
          <div class="right-col">
            <Searchmem :contact="contacts"/>
            <List :contacts="contacts"/>
          </div>
        </div>
      </main>
    </div>
</template>

<script>
import Msg from "./components/Msg";
import List from "./components/List";
import Searchmem from "./components/Searchmem";
import Top from "./components/Top";
import Nav from "./components/Nav";
import Class from "./components/Class";
import Comments from "./components/Comments";
export default {
  name: 'App',
  data(){
    return {
      Messages:[
        {Msg:"em ...? so what do you mean",Time:"Friday, January 12, 2020 at 10:52 AM",UserType:'others',TextType:"others-text",img:"../../static/assets/img6.jpg"},
        {Msg:"i have a task needed to be finished",Time:"Friday, January 12, 2020 at 10:52 AM",UserType:'my',TextType:"MyText",img:"../../static/assets/img4.jpg"},
        {Msg:"but you know ... i am lazy /doge",Time:'Friday, January 12, 2020 at 10:53 AM',UserType:'my',TextType:"MyText",img:"../../static/assets/img4.jpg"}],
      contacts:[{name:"Williams John","img":"../../static/assets/img1.jpg",LastTime:"7:35PM",LastText:"Buy me a bottle of Coca-Cola, I will pay you later."},
        {name:"Martin Bob","img":"../../static/assets/img2.jpg",LastTime:"6:12AM",LastText: "My neighbors often quarrel, and they are so mad!!!, I am almost crazy, even though I often remind them, they have never heard of it.OMG"},
        {name:"Hoffman Alice","img":"../../static/assets/img3.jpg",LastTime:"12:15AM",LastText:"Hem, have you called me??emmm.... maybe the phone was not with me at the time"},
        {name:"Schneider Wendy","img":"../../static/assets/img5.jpg",LastTime:"8:45PM",LastText:"How to do this math problem.I still don't understand"},
        {name:"Gennady Alexrevich","img":"../../static/assets/img6.jpg",LastTime:"10:52AM",LastText:"em ...? so what do you mean."}],
    }
  },
  methods:{
    addComment(message){
      this.Messages.push(message);
    }
  },
  components: {
    Comments,
    Nav,
    Top,
    Searchmem,
    List,
    Msg,
    Text,
    Class
  }
}
</script>

<style>
  #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
}

  #Class {
    background-color: #212227;
    height: 100vh;
    width: 300px;
    position: relative;
  }

  #Chat {
    height: 100vh;
    width: 1235px;
  }

  #Chat .container {
    width: 100%;
    height: 680px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
  }

  #Chat .container .right-col {
    height: 100%;
    width: 403px;
  }

  #Chat .container .left-col {
    height: 100%;
    width: 830px;
    border-right: 1px solid #ddd;
  }
</style>
