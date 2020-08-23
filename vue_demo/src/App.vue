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
            <Searchmem />
            <List />
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
