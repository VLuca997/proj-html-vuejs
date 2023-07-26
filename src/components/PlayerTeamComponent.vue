<script>
// my-component.js
export default {
    data() {
        return 
    },
}
</script>

<template >
    <div class="player-container">
        <h2 class="text-center text-light fw-bold py-5">Players</h2>

        <div class="card-conteiner d-flex justify-content-around">
            <div class="pb-4 my-card">
                <div class="card p-2 bg-black text-light">
                    <img src="../assets/img/player1.jpg" class="card-img-top " alt="...">
                    <div class="card-body text-center p-4 bg-black d-block">
                        <h5 class="card-title">07</h5>
                        <p class="text-wrap p-2 py-0 mb-0">Adam Brown - Forwarder</p>
                    </div>
                </div>
                
            </div>


            <div class="pb-4 my-card">
                <div class="card p-2 bg-black text-light">
                    <img src="../assets/img/player2.jpg" class="card-img-top " alt="...">
                    <div class="card-body text-center p-4 bg-black d-block">
                        <h5 class="card-title">07</h5>
                        <p class="text-wrap p-2 py-0 mb-0">Adam Brown - Forwarder</p>
                    </div>
                </div>
                
            </div>


            <div class="pb-4 my-card">
                <div class="card p-2 bg-black text-light">
                    <img src="../assets/img/player3.jpg" class="card-img-top " alt="...">
                    <div class="card-body text-center p-4 bg-black d-block">
                        <h5 class="card-title">07</h5>
                        <p class="text-wrap p-2 py-0 mb-0">Adam Brown - Forwarder</p>
                    </div>
                </div>
                
            </div>


            <div class="pb-4 my-card">
                <div class="card p-2 bg-black text-light">
                    <img src="../assets/img/player4.jpg" class="card-img-top" alt="...">
                    <div class="card-body text-center p-4 bg-black d-block">
                        <h5 class="card-title">07</h5>
                        <p class="text-wrap p-2 py-0 mb-0">Adam Brown - Forwarder</p>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="my-component-button d-flex justify-content-center py-5">
            <button type="button" class="my-btn btn text-center rounded-5 text-light"><p>View All Player</p></button>
        </div>
    </div>
    
</template>

<style lang="scss" >
    .my-card{
    }
    .card{
        border-radius: 35px !important;
        width: 300px;
    
    .card-body{
        width: 100%;
        display: flex;
        justify-content: center;
        z-index: 1;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        padding: 20px;
        border-radius: 30px;
        text-align: center;
    }
    img{
        background-position: center;
        background-size: cover;
        height: 350px;
        object-fit: cover;
        border-radius: 30px;
        
    }
    height: fit-content !important;
}
    .player-container{
        background-image: url(../assets/img/player.jpg);
        object-fit: cover;
        background-position: center;
        background-size: cover;
    }
    .my-btn{
                cursor: pointer;
                font-size: large;
                font-weight: bolder ;
                background-color: black !important;
                padding: 20px 40px 20px;
                    p{
                        margin: 0 50px;
                        
                    }
    }
    

</style>