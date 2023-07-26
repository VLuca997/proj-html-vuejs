<script>
// my-component.js
export default {
    data() {
        return 
    },
}
</script>

<template >
    <div>
        <button type="button" class="my-btn btn text-center p-4 rounded-5 text-light"><p>Learn More   <i class="fa-solid fa-arrow-right"></i></p></button>
        
    </div>
</template>

<style lang="scss" scoped>

        .my-btn{
                    cursor: pointer;
                    font-weight: bolder ;
                    border-color: red ;
                    background-color: transparent ;
                        p{
                            margin: 0 50px;
                        }
                        &:hover{
                            transform: scale(1.1);
                            

                        }
                }

</style>