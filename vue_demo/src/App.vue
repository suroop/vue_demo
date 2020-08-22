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
            <Comments/>
            <Msg/>
          </div>
          <div class="right-col">
            <Searchmem/>
            <List/>
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
      msg:'',
      contacts:[{name:"John","img":"../assets/img1.jpg"},
        {name:"Adam","img":"../assets/img2.jpg"},
        {name:"Alice","img":"../assets/img3.jpg"},
        {name:"Sam","img":"../assets/img5.jpg"}],
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
  *{
    padding: 0;
    margin: 0;
    list-style: none;
    text-decoration: none;
  }

  ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }

  ::-webkit-scrollbar-track-piece {
    background-color: #F1EFF1;
  }

  ::-webkit-scrollbar-thumb {
    background-color: skyblue;
    background-clip: padding-box;
    min-height: 28px;
    border-radius: 15px;
  }

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
