<template>
  <div class="hot">
    <div class="hot-title">热门{{ title }}</div>
    <div class="hot-card">
      <diy-card v-for="(item, index) in cardsData" :key="index" :cardData="item"></diy-card>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import DiyCard from './DiyCard.vue'

@Component({
  components: {
    DiyCard
  }
})
export default class Hot extends Vue {
  @Prop(String)
  title!: string
  @Prop(Array)
  cardsData!: any[]
}
</script>

<style lang="scss" scoped>
.hot {
  > .hot-title {
    height: 70px;
    line-height: 70px;
    font-size: 18px;
    text-align: center;
  }
  > .hot-card {
    display: flex;
    justify-content: center;
  }
}
</style>
