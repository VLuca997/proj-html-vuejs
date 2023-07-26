<script>
// my-component.js
export default {
    data() {
        return 
    },
}
</script>

<template >
    <div class="ads-sponsor py-3">
        <img class="w-100" src="../assets/img/reclam.jpg" alt="">
    </div>
    <div class="sponsor-container w-100 d-flex justify-content-center bg-black">
        <div class="card-sponsor py-5">
            <img src="../assets/img/cliente2.png" alt="">
            <img src="../assets/img/client3.png" alt="">

            <img src="../assets/img/client4.png" alt="">
            <img src="../assets/img/client7.png" alt="">
            <img src="../assets/img/client9.png" alt="">
            <img src="../assets/img/client10.png" alt="">

        </div>
    </div>
    <div class="pollice d-flex justify-content-center py-5 ">
        <img src="../assets/img/POLLICE.png" class="bg-black img-fluid text-light" alt="">
    </div>
    <div class="text-center">
        <h4 class="fw-bold text-black fs-1">RESENTE NEW & ARTICLES</h4>
        <p class="text-grey">Be aware of the football world.</p>
    </div>

</template>

<style lang="scss" scoped >


    .ads-sponsor{
        width: 100vw;
        background-position: center;
        background-size: cover;
        object-fit: cover;
    }
    .sponsor-container{
        display: flex;
        justify-content: space-around;
        flex-wrap: nowrap;
        
        img{
            margin-right: 30px;
            background-size: cover;
            background-color: black;
            border: 3px solid white;
            border-radius: 30px;
        }
    }
    .pollice{
        height: 300px;
        background-position: center;
        background-size: cover;
    }

</style>