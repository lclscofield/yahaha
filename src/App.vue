<template>
  <div id="app">
    <navi></navi>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Navi from './views/Navi.vue'

@Component({
  components: {
    Navi
  }
})
export default class App extends Vue {
}
</script>

<style lang="scss">
#app {
  height: 100vh;

  > .main {
    height: calc(100vh - 70px);
    padding: 0 100px;
    min-width: 1200px;
    overflow: auto;
  }
}
</style>
