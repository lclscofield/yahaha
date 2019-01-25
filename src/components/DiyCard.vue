<template>
  <div class="diy-card" :title="cardData.cardTitle">
    <card :padding="10">
      <div class="diy-card-content">
        <img :src="cardData.img" class="diy-card-img">
        <span class="diy-card-title">{{ cardData.cardTitle }}</span>
      </div>
    </card>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

// 卡片数据
interface CardData {
  img: string
  cardTitle: string
}

@Component({})
export default class DiyCard extends Vue {
  @Prop(Object)
  cardData!: CardData[]

  created () {
    console.log(this.cardData)
  }
}
</script>

<style lang="scss" scoped>
.diy-card {
  width: 150px;
  margin: 0 25px;
  .diy-card-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    > img.diy-card-img {
      width: 100%;
      height: 150px;
    }
    > span.diy-card-title {
      text-align: center;
      padding-top: 5px;
      width: 80%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
  >>> .ivu-card {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    &:hover {
      box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
      border-color: #eee;
      transform: scale(1.1);
    }
  }
}
</style>
