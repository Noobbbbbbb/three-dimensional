<template>
  <div id="cesiumContainer"></div>
  <el-button type="primary">开始</el-button>
</template>

<script setup>
import * as Cesium from 'cesium'
import { onMounted } from 'vue'
onMounted(() => {
  window.viewer = new Cesium.Viewer('cesiumContainer')
})
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

html,
body {
    #cesiumContainer {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
    }
}

</style>
