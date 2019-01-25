<template>
  <div class="navi">
    <i-menu mode="horizontal" theme="light" active-name="Movies">
      <menu-item :name="item.name" :to="item.link" v-for="(item, index) in message" :key="index">{{ item.title }}</menu-item>
    </i-menu>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator'

// 路由跳转接口
interface ToLink {
  name: string
  title: string
  link: string
}

export default class Navi extends Vue {
  message: ToLink[] = [{
    name: 'Movies',
    title: '电影',
    link: 'movies'
  }, {
    name: 'Books',
    title: '书籍',
    link: 'books'
  }]
}
</script>

<style lang="scss" scoped>
.navi {
  >>> .ivu-menu {
    &.ivu-menu-horizontal {
      display: flex;
      justify-content: center;
      height: 70px;
      line-height: 70px;

      > .ivu-menu-item {
        margin: 0 30px;
      }
    }
  }
}
</style>
