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

    <div class="info-container d-flex justify-content-center py-5">
        <div class="card" v-for="(ads, i) in store.ads" :key="i">
            
            <img :src="ads.img" class="card-img-top img-fluid" alt="...">
            <p class="text-center">{{ads.times}}</p>
            <div class="card-body">
                <h5 class="card-title fw-bold">{{ads.name}}</h5>
                <p class="card-text">{{ads.description}}</p>
                <div class="d-flex justify-content-center">
                
                    <a href="#" class="btn px-5 py-3 rounded-5 text-light bg-black"><p class="mb-0 fw-bold">More</p></a>
                </div>
            </div>
        </div>

        
    </div>

    <div class="d-flex container-ads-pages w-100 py-3 justify-content-center">
        <button class="page-1 "></button>
        <button class="page-1 active"></button>
        <button class="page-1"></button>
        <button class="page-1"></button>
    </div>

</template>

<style lang="scss" scoped>
.card{
    width: 300px;
    margin: 5px;
    height: fit-content;
    img{
        padding: 30px;
        height: 300px;
        background-position: center;
        background-size: cover;
    
    }
}
.container-ads-pages{
    height: 60px;
    button{
        margin: 0 2px;
        height: 5px;
    }
    .page-1,.page-2,.page-3,.page-4{
        padding: 0 15px;
        border: none;
        border: 1px solid gray;
        border-radius: 20px;
        &:hover{
            background-color: lightcoral;
        }
        &.active{
            background-color: black;
            padding: 0 25px;
            &:hover{
                cursor: pointer;
                background-color: black;
                transform: scale(1.1);
                border: 1px;

            }
        }
    }

}

</style>