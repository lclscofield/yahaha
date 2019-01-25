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
  title: string = '电影'
  cardsData: any[] = [{
    img: 'https://extraimage.net/images/2018/12/24/04e68cecbfc5b6ac1d0c8efa38ab8f13.jpg',
    cardTitle: '神奇动物在哪里'
  }, {
    img: 'https://extraimage.net/images/2018/12/24/04e68cecbfc5b6ac1d0c8efa38ab8f13.jpg',
    cardTitle: '海王'
  }, {
    img: 'https://extraimage.net/images/2018/12/24/04e68cecbfc5b6ac1d0c8efa38ab8f13.jpg',
    cardTitle: '神奇动物在哪里'
  }, {
    img: 'https://extraimage.net/images/2018/12/24/04e68cecbfc5b6ac1d0c8efa38ab8f13.jpg',
    cardTitle: '海王'
  }, {
    img: 'https://extraimage.net/images/2018/12/24/04e68cecbfc5b6ac1d0c8efa38ab8f13.jpg',
    cardTitle: '神奇动物在哪里'
  }]
}
</script>

<style lang="scss" scoped>
.movies {
}
</style>
