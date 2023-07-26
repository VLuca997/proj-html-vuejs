<template>
    <div class="header-container bg-warning">
      <div class="my-container">
        <div class="logo">
          <img :src="logoSrc" alt="Logo del Football Club">
        </div>
  
        <div class="header-logo text-danger">
          <div class="sponsor">
            <img v-for="sponsor in sponsors" :key="sponsor" :src="sponsor" alt="Sponsor">
          </div>
  
          <div class="icons">
            <i v-for="socialIcon in socialIcons" :key="socialIcon" :class="socialIcon"></i>
          </div>
        </div>
  
        <div class="nav-bottom d-flex justify-content-center">
          <div class="content-navbar">
            <ul class="nav nav-underline text-light pb-2">
              <li v-for="navItem in navItems" :key="navItem.text" class="nav-item">
                <a class="nav-link" :href="navItem.link">{{ navItem.text }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
  
      <div class="jumbotron pt-3 text-light">
        <span class="arrow-left d-flex" @click="cambiaSfondo('precedente')">
          <i class="fa-solid fa-chevron-left fa-xl"></i>
        </span>
        <h1>{{ nomeClub }}</h1>
        <span class="arrow-right d-flex" @click="cambiaSfondo('successivo')">
          <i class="fa-solid fa-chevron-right fa-xl"></i>
        </span>
      </div>
  
      <div class="h-bottom-content text-light text-center">
        <h4 class="py-3">{{ testoInfo }}</h4>
        <button type="button" class="my-btn btn text-center p-4 rounded-5 text-light" @click="scopriDiPiù">
          <p>{{ testoPulsante }} <i class="fa-solid fa-arrow-right"></i></p>
        </button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      nomeClub: {
        type: String,
        default: "Football Club Sport Club",
      },
      testoInfo: {
        type: String,
        default: "Partite private di calcio",
      },
      testoPulsante: {
        type: String,
        default: "Scopri di più",
      },
      logoSrc: {
        type: String,
        default: "../assets/img/loader-football.png",
      },
      sponsors: {
        type: Array,
        default: () => [],
      },
      socialIcons: {
        type: Array,
        default: () => ["fa-brands fa-facebook-f", "fa-brands fa-instagram", "fa-brands fa-twitter"],
      },
      navItems: {
        type: Array,
        default: () => [
          { text: "HOME", link: "#" },
          { text: "CALENDARIO & RISULTATI", link: "#" },
          { text: "CLASSIFICA", link: "#" },
          { text: "GIOCATORI", link: "#" },
          { text: "GALLERIA", link: "#" },
          { text: "BLOG", link: "#" },
          { text: "CONTATTI", link: "#" },
        ],
      },
    },
    methods: {
      cambiaSfondo(direzione) {
        // Implementa la logica per cambiare l'immagine di sfondo
        // in base alla direzione fornita (precedente o successiva).
        // Puoi utilizzare dati o proprietà calcolate per gestire l'URL dell'immagine di sfondo.
      },
      scopriDiPiù() {
        // Implementa l'azione per il pulsante "Scopri di più".
      },
    },
  };
  </script>
  
  <style lang="scss" scoped>
        .logo{
            display: flex;
            justify-content: center;
            position: relative;
                *:not(.my-container){
                    z-index: 1;
                    position: absolute;
                }
        }
        .sponsor{
            z-index: 1;
            position: relative;
            right: 30px;
        }
        .icons{
                position: relative;
                left: 60px;
                display: flex;
                padding: 0;
                font-size: 40px;
                gap: 30px;
                color: white;
        }
        .header-container{
            height: 100vh;
            background-image: url(../assets/img/slider2-1.jpg);
            background-position: center;
            background-size: cover;
            object-fit: cover;
            
        
        }
        .my-container:not(h1){
            background-color: rgba(0, 0, 0, 0.7);
            height: fit-content;
            padding: 0px;
            width: 100%;
            padding-top: 20px;
            
        }
        .header-logo{
            display: flex;
            justify-content: center;
            padding: 40px;
        }
        li{
            padding: 0 40px;
            list-style: none;
            text-decoration: none;
            .nav-link{
                color: white;
                padding-top: 40px;
                font-weight: bolder;
                font-size: larger;
                    &.nav-link:hover{
                        color: white;
                    }
            }
        }
        // HEADER-BOTTOM CONTENT
        .jumbotron{
            display: flex;
            justify-content: center;
            h1{
                font-weight: bold;
                text-align: center;
                max-width: 50%;
                font-size: 100px;
            }
            .arrow-left{
                position: absolute;
                left: 60px;
                bottom: 30%;
                i{
                    border: 2px solid white;
                    padding: 30px 20px 30px 20px;
                    border-radius: 50%;
                    color: white;
                    background-color: transparent;
                    cursor: pointer;
                }
            }
            .arrow-right{
                position: absolute;
                bottom: 30%;
                right: 60px;
                i{
                    border: 2px solid white;
                    padding: 30px 20px 30px 20px;
                    border-radius: 50%;
                    color: white;
                    background-color: transparent;
                    cursor: pointer;
                }
            }
            
        }
        .my-btn{
            cursor: pointer;
            font-weight: bolder !important;
            border-color: white !important;
            background-color: transparent !important;
            p{
                margin: 0 50px;
            }
            
        }
  </style>
  