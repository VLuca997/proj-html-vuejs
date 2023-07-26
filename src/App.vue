<script >
//import component h1
import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/MainComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import MainS2Component from './components/MainS2Component.vue';
import PlayerTeamComponent from './components/PlayerTeamComponent.vue';
import TableLeague from './components/TableLeague.vue';
import SponsorComponent from './components/SponsorComponent.vue';



import axios from 'axios';

// my-component.js
export default {
  data() {
    return 
  },
  components:{
    HeaderComponent, MainComponent, FooterComponent, MainS2Component,PlayerTeamComponent,TableLeague,SponsorComponent
  }
}
</script>

<template>
    <HeaderComponent />
    <MainComponent/>
    <MainS2Component/>
    <PlayerTeamComponent/>
    <TableLeague/>
    <SponsorComponent/>
    <FooterComponent />
</template>

<style lang="scss">
@use "assets/scss/main.scss";
</style>
