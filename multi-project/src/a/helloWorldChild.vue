<template>
  <div>
    aaa hello wolrd children
    <button>111</button>
    <button>222</button>
    <button>333</button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'helloWorldChild',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
