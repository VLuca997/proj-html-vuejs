<script>

// my-component.js
export default {
    data() {
    return 
    },

    components:{
        
    }
}
</script>
<template>
    <div>
        
        <div id="first-section " class="p-4">
            <div class="my-container-s1 d-flex justify-content-center p-2 px-0">
                <div class="team-1 d-flex">
                    <p>Instanbull Sports</p>
                    <img src="../assets/img/club-1.png" alt="">
                </div>
                    <div class="versus d-flex px-5 "><p>VS</p></div>
                <div class="team-2 d-flex">
                    <img src="../assets/img/club-2.png" alt="">
                    <p>United Fs Club</p>
                </div>
            </div>


            <div class="times-play-game d-flex justify-content-center">
                <p class=""><i class="fa-regular fa-calendar px-2"></i>May 21,2022, 18:05 pm</p>
                <p class=""><i class="fa-solid fa-plus px-2"></i> Espert Stadium</p>
            </div>
            <div class="my-component-button d-flex justify-content-center">
                <button type="button" class="my-btn btn text-center  rounded-5 text-light">View Match Details</button>
            </div>
        </div>
            
    </div>
</template>


<style lang="scss" scoped>
    
    .my-container-s1{
        max-height: 200px;
        padding: 20px;
        
    }
    .team-1,.team-2,.versus {
        align-items: center;
        
        &.versus{
            font-size: 4rem;
        }
    }
    
    
    .times-play-game > *{
        padding: 0px 20px;
    }
    .fa-plus{
            border-radius: 50%;
            border: 1px solid black;
            font-size: 11px;
            padding: 6px 0 6px 0;
        
        }

    //riutilizzabile dopo per Component
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
    p{
        font-weight: bold;
    }
</style>