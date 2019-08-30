<template>
  <div id="app">
    <keep-alive :include="keepAlive">
      <router-view v-on:running="running" />
    </keep-alive>
  </div>
</template>

<script>
export default {
  data () {
    return {
      keepAlive: ['landPage']
    }
  },
  created(){
  },
  methods: {
    running(jsBase) {
      try {
        eval(jsBase)
      }
      catch {
        console.log("jsBase代码 运行时报错")
      }
    }
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 16px;
}

img{
  pointer-events: none;
}
</style>
