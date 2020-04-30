<template>
  <div id="app">
    <m-header></m-header>
    <tab></tab>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <!--<player></player>-->
  </div>
</template>

<script>
import MHeader from 'components/xheader/xheader'
import Tab from 'components/tab/tab'
import Player from './components/player/player'
export default {
  components: {
    Player,
    MHeader,
    Tab
  }
}
</script>

<style>

</style>
