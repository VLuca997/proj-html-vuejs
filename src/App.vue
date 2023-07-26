<script >
//import component h1
import HeaderComponent from './components/HeaderComponent.vue';

import MainComponent from './components/MainComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import MainS2Component from './components/MainS2Component.vue';
import PlayerTeamComponent from './components/PlayerTeamComponent.vue';
import TableLeague from './components/TableLeague.vue';
import SponsorComponent from './components/SponsorComponent.vue';
import InfoComponent from './components/InfoComponent.vue';

import { store } from './store';//IMPORTO STORE.JS CON "DESTRUCTURING"
import axios from 'axios';

// my-component.js
export default {
  data() {
    return {
      store,
    }
  },
  components:{
    HeaderComponent, MainComponent, FooterComponent, MainS2Component,PlayerTeamComponent,TableLeague,SponsorComponent,InfoComponent,
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
    <InfoComponent/>
    <FooterComponent />
</template>

<style lang="scss">
@use "assets/scss/main.scss";
</style>
