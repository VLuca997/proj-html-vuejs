<script>
// my-component.js
export default {
    data() {
        return 
    },
}
</script>


<template>

    <div class="info-container d-flex justify-content-center py-5">
        <div class="card">
            
            <img src="../assets/img/news1-1-300x300.png" class="card-img-top img-fluid" alt="...">
            <p class="text-center">29.05.2022 - Football</p>
            <div class="card-body">
                <h5 class="card-title fw-bold">What is Football?</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <div class="d-flex justify-content-center">
                
                    <a href="#" class="btn px-5 py-3 rounded-5 text-light bg-black"><p class="mb-0 fw-bold">More</p></a>
                </div>
            </div>
        </div>

        <div class="card justify-content-around" style="width: 18rem;">
            
            <img src="../assets/img/news3-1-300x300.png" class="card-img-top img-fluid" alt="...">
            <p class="text-center">29.05.2022 - Football</p>
            <div class="card-body">
                <h5 class="card-title fw-bold">What is Football?</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <div class="d-flex justify-content-center">
                
                    <a href="#" class="btn px-5 py-3 rounded-5 text-light bg-black"><p class="mb-0 fw-bold">More</p></a>
                </div>
            </div>
        </div>

        <div class="card justify-content-around" style="width: 18rem;">
            
            <img src="../assets/img/news2-1-300x300.png" class="card-img-top img-fluid" alt="...">
            <p class="text-center">29.05.2022 - Football</p>
            <div class="card-body">
                <h5 class="card-title fw-bold">What is Football?</h5>
                <p class="card-text">Some quick example text to build on the c content.</p>
                <div class="d-flex justify-content-center">
                
                    <a href="#" class="btn px-5 py-3 rounded-5 text-light bg-black"><p class="mb-0 fw-bold">More</p></a>
                </div>
            </div>
        </div>

        <div class="card justify-content-around" style="width: 18rem;">
            
            <img src="../assets/img/news4-1-300x300.png" class="card-img-top img-fluid" alt="...">
            <p class="text-center">29.05.2022 - Football</p>
            <div class="card-body">
                <h5 class="card-title fw-bold">What is Football?</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <div class="d-flex justify-content-center">
                
                    <a href="#" class="btn px-5 py-3 rounded-5 text-light bg-black"><p class="mb-0 fw-bold">More</p></a>
                </div>
            </div>
        </div>
    </div>

    <div class="d-flex container-ads-pages w-100 py-3 justify-content-center">
        <button class="page-1 "></button>
        <button class="page-2 active"></button>
        <button class="page-3"></button>
        <button class="page-4"></button>
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
            background-color: cyan;
            padding: 0 25px;
            &:hover{
                cursor: pointer;
                background-color: blueviolet;

            }
        }
    }

}

</style>