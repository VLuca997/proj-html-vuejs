<script >
//import component h1
import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/MainComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import MainS2Component from './components/MainS2Component.vue';
import PlayerTeamComponent from './components/PlayerTeamComponent.vue';

import axios from 'axios';

// my-component.js
export default {
  data() {
    return 
  },
  components:{
    HeaderComponent, MainComponent, FooterComponent, MainS2Component,PlayerTeamComponent
  }
}
</script>

<template>
    <HeaderComponent />
    <MainComponent/>
    <MainS2Component/>
    <PlayerTeamComponent/>
    <FooterComponent />
</template>

<style lang="scss">
@use "assets/scss/main.scss";
</style>
