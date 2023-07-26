<script>
// my-component.js
export default {
    data() {
        return {
            
            navItems: [
                { text: "HOME", link: "#" },
                { text: "FIXTURE & RESULT", link: "#" },
                { text: "LEAGUE TABLE", link: "#" },
                { text: "PLAYERS", link: "#" },
                { text: "GALLERY", link: "#" },
                { text: "BLOG", link: "#" },
                { text: "CONTACT", link: "#" },
            ]
        }
    },
}
</script>

<template>

    <div class="header-container bg-warning">

        <div class="my-container">
            <!-- LOGO -->
            <div class="logo">
                <img src="../assets/img/loader-football.png" alt="">
            </div>
            <!-- --------------------------------------------------- -->

            <div class="header-logo text-danger">
                <!-- SPONSOR -->
                <div class="sponsor">
                    <img src="../assets/img/sponsor1.png" alt="">
                    <img src="../assets/img/sponsor2.png" alt="">
                </div>
                <!-- --------------------------------------------------- -->

                <!-- ICON SOCIAL'S -->
                <div class="icons">
                    <i class="fa-brands fa-facebook-f"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-twitter"></i>
                </div>
                <!-- --------------------------------------------------- -->

            </div>
            <!-- NAVBAR -->
            <div class="nav-bottom d-flex justify-content-center ">
                <div class="content-navbar">
                    <ul class="nav nav-underline text-light pb-2">
                        <!-- NAVBAR HEADER BOTTOM  reattivo con v-for {{ navItem }} -->
                        <li v-for="(navItem, i) in navItems" :key="i.text" class="nav-item">
                            <a class="nav-link" href="i">{{navItem.text}}</a>
                        </li>
                        
                        <!-- --------------------------------------------------- -->
                    </ul>
                </div>
            </div>
            <!-- --------------------------------------------------- -->

        </div>
            <!-- HEADER-BOTTOM // JUMBOTRON -->
            <div class="jumbotron pt-3 text-light ">

                <span class="arrow-left d-flex"><i class="fa-solid fa-chevron-left fa-xl"></i></span>

                <h1>Football Club Sport Club</h1>

                <span class="arrow-right d-flex"><i class="fa-solid fa-chevron-right fa-xl"></i></span>
                
            </div>

            <div class="h-bottom-content text-light text-center" >

                <h4 class="py-3">Private football matches</h4>

                <button type="button" class="my-btn btn text-center p-4 rounded-5 text-light"><p>Learn More   <i class="fa-solid fa-arrow-right"></i></p></button>
    
            </div>
            <!-- --------------------------------------------------- -->

    </div>

</template>

<style lang="scss" scoped>
        // HEADER-TOP CONTENT
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