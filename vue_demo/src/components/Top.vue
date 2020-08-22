<template>
  <div class="top">
    <button class="Back">Back</button>
    <h2>Gennady Alexrevich</h2>
    <button class="View">View Profile</button></div>
</template>

<script>
    export default {
        name: "Top"
    }
</script>

<style scoped>
  .top {
    background-color: #F1F1F1;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    width: 100%;
    height: 99px;
    border-bottom: 1px solid #ddd;
  }

  .top button {
    font-family: 'Microsoft JhengHei',serif;
    color: #5F6267;
    height: 50px;
    width: auto;
    padding: 15px;
    outline: none;
    cursor: pointer;
    -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), inset 0 1px 1px rgba(255, 255, 255, 0.15);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), inset 0 1px 1px rgba(255, 255, 255, 0.15);
    border-radius: 5px;
    border: 1px solid #ddd;
  }

  .top .Back {
    margin-left: 35px;
  }

  .top .View {
    margin-right: 35px;
  }
</style>
