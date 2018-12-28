<template>
  <div class="movies">
    <hot :title="title" :cardsData="cardsData"></hot>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Hot from '../../components/Hot.vue'
import DiyCard from '../../components/DiyCard.vue'

@Component({
  components: {
    Hot,
    DiyCard
  }
})
export default class Movies extends Vue {
  title: string = 'movies'
  cardsData: any[] = [{
    img: 'https://i.loli.net/2017/08/13/599044275d5fc.jpg',
    cardTitle: '神奇动物在哪里'
  }, {
    img: 'https://i.loli.net/2017/08/13/599044275d5fc.jpg',
    cardTitle: '海王'
  }]
}
</script>

<style lang="scss" scoped>
.movies {
}
</style>
