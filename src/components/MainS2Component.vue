<script>
import { store } from '../store';//IMPORTO STORE.JS CON "DESTRUCTURING"

// my-component.js
export default {
    data() {
        return {
            store,
            

        }
    },
}
</script>
<template>
    <div class="general-container text-light fw-bold pb-5">

        <h2 class="text-center py-5">Upcoming Matches</h2>

        <div v-for="(matches, i) in store.TeamMatches" :key="i" class="px-4 py-3 container-matches">
            <div class="card-matches d-flex justify-content-center p-0">
                <div class="home d-flex">
                    <span><img :src="matches.homeTeam.img" alt=""></span>
                    <p>{{matches.homeTeam.name}}</p>
                </div>
                <div class="versus d-flex">
                    <p>VS</p>
                </div>
                <div class="transfert d-flex">
                    <p class="">{{matches.awayteam.name}}</p>
                    <img :src="matches.awayteam.img" alt="">
                </div>
            </div>
            <div>
                <div class="times-play-game d-flex justify-content-center">
                    <p class=""><i class="fa-regular fa-calendar px-2"></i>{{matches.timing.timestamp}}</p>
                    <p class=""><i class="fa-solid fa-plus px-2"></i> {{matches.stadium}}</p>
                </div>
            </div>
        </div>

    </div>
</template>


<style lang="scss" scoped>
        .general-container{
            background-image: url(../assets/img/saha.jpg);
            color: white;
            background-size: cover;
            background-position: center;
            height: 100%;
            
        }
        .card-matches{
            background-color: rgba(0, 0, 0, 0.2);
            box-shadow: 5px 5px 10px #0c0c0c62;
            border: 1px solid rgba(0, 0, 0, 0.5);

            padding: 20px;
                .home,.transfert,.versus{
                    align-items: center;
                            &.versus{
                                font-size: 4rem;
                                padding: 0 100px;
                            }
                }
        }
        .times-play-game > *{
            padding: 0px 20px;
            margin-bottom: 0;
            
                &:not(i){
                    font-size: 14px;
                }
        }
        .times-play-game{
            border: 1px solid rgba(0, 0, 0, 0.5);
            padding: 0;
            margin: 0;
            background-color: rgba(0, 0, 0, 0.5);
            box-shadow: 5px 5px 10px #0c0c0c65;
        }
        .fa-plus{
                border-radius: 50%;
                border: 1px solid black;
                font-size: 11px;
                padding: 6px 0 6px 0;
            
            }
</style>